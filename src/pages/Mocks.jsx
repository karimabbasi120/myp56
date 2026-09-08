import { useEffect, useMemo, useState } from 'react'
import { db, getSetting, setSetting } from '../db'
import { VAR_CATEGORIES } from '../data/mockBlocks'
import { generatePaper, PAPER_TARGETS } from '../data/mockGenerator'
import { subjectDisplayName } from '../data/subjects'
import { mockAvailability, onScreenClassChange } from '../platform'
import {
  PageHeader,
  Card,
  Chip,
  Button,
  EmptyState,
  inputClass,
} from '../components/ui'

// Total marks in a generated paper.
const paperTotalMarks = (paper) =>
  paper.questions.reduce(
    (sum, q) => sum + q.parts.reduce((s, p) => s + p.marks, 0),
    0,
  )

// Generated papers have no stored title, so build one from the subject.
const paperTitle = (paper) =>
  `${subjectDisplayName(paper.subject)}${
    paper.level ? ` (${paper.level === 'extended' ? 'Extended' : 'Standard'})` : ''
  } - On-screen examination`

export default function Mocks() {
  const [availability, setAvailability] = useState(mockAvailability())
  const [phase, setPhase] = useState('pick')
  const [paper, setPaper] = useState(null)
  const [answers, setAnswers] = useState({})
  const [marks, setMarks] = useState({})
  const [subjects, setSubjects] = useState([])
  const [mathsLevel, setMathsLevel] = useState('standard')

  useEffect(() => onScreenClassChange(setAvailability), [])

  useEffect(() => {
    Promise.all([
      getSetting('mySubjects', []),
      getSetting('mathsLevel', 'standard'),
    ]).then(([s, l]) => {
      setSubjects(Array.isArray(s) ? s : [])
      setMathsLevel(l ?? 'standard')
    })
  }, [])

  // Subjects a paper can be generated for. If the student has not chosen
  // subjects yet, offer every subject that has a block pool.
  const available = useMemo(() => {
    const withPapers = Object.keys(PAPER_TARGETS)
    return subjects.length
      ? withPapers.filter((s) => subjects.includes(s))
      : withPapers
  }, [subjects])

  if (availability !== 'ok') {
    // On a Mac or iPad the window can simply be too narrow, which is fixable.
    // Telling that user to "open this on a Mac" would make no sense.
    const windowTooSmall = availability === 'window'
    return (
      <div>
        <PageHeader
          title="Mock Exams"
          subtitle="Full on-screen examinations in the real MYP format."
        />
        <Card>
          <h2 className="font-semibold text-slate-900">
            {windowTooSmall
              ? 'Make this window a little wider'
              : 'Open this on an iPad or Mac'}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Mock papers are long, on-screen examinations with extended typed
            responses, just like the real MYP eAssessment.{' '}
            {windowTooSmall
              ? 'Widen the window and the papers will appear.'
              : 'They need a larger screen to work properly, so they are available on iPad and Mac.'}
          </p>
          {!windowTooSmall && (
            <p className="mt-2 text-sm text-slate-500">
              On iPhone, use the <strong>Practice Centre</strong> for quick
              recall questions by criterion.
            </p>
          )}
        </Card>
      </div>
    )
  }

  // Build a brand new paper for this subject, avoiding blocks seen recently.
  async function start(subject) {
    const history = await getSetting('recentBlocks', {})
    const recentIds = history?.[subject] ?? []
    const p = generatePaper({ subject, mathsLevel, recentIds })
    if (!p) return // pool cannot satisfy the spec

    // Remember these blocks so the next paper for this subject differs.
    const nextHistory = {
      ...history,
      [subject]: [...p.blockIds, ...recentIds].slice(0, 12),
    }
    await setSetting('recentBlocks', nextHistory)

    setPaper(p)
    setAnswers({})
    setMarks({})
    setPhase('sitting')
  }

  if (phase === 'sitting' && paper) {
    return (
      <Sitting
        paper={paper}
        answers={answers}
        setAnswers={setAnswers}
        onFinish={() => setPhase('review')}
        onQuit={() => setPhase('pick')}
      />
    )
  }

  if (phase === 'review' && paper) {
    return (
      <Review
        paper={paper}
        answers={answers}
        marks={marks}
        setMarks={setMarks}
        onDone={() => setPhase('pick')}
      />
    )
  }

  return (
    <div>
      <PageHeader
        title="Mock Exams"
        subtitle="Sit a full paper in the real MYP on-screen format, with command terms, mark values and criterion tagging. Then mark yourself against the markscheme."
      />
      {available.length === 0 ? (
        <EmptyState
          title="No papers for your subjects yet"
          hint="Mock papers currently cover Sciences and Mathematics. More subjects are coming."
        />
      ) : (
        <div className="space-y-3">
          {available.map((subject) => {
            const spec = PAPER_TARGETS[subject]
            return (
              <Card key={subject}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-semibold text-slate-900">
                      {subjectDisplayName(subject)}
                      {subject === 'mathematics' &&
                        ` (${mathsLevel === 'extended' ? 'Extended' : 'Standard'})`}
                    </h2>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <Chip color="indigo">{spec.total} marks</Chip>
                      <Chip>{spec.minutes} min</Chip>
                    </div>
                    <p className="mt-2 text-xs text-slate-500">
                      {Object.entries(spec.perCriterion)
                        .map(([c, m]) => `Criterion ${c}: ${m}`)
                        .join('  ·  ')}
                    </p>
                  </div>
                  <Button onClick={() => start(subject)}>
                    Generate paper
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      )}
      <p className="mt-4 text-xs text-slate-400">
        Every paper is newly assembled from a large question pool, so each attempt differs. Papers are written in the style of MYP on-screen examinations for
        practice. They are not past papers and are not produced by the IB.
      </p>
    </div>
  )
}

/* ---------------- Sitting the paper ---------------- */

function Sitting({ paper, answers, setAnswers, onFinish, onQuit }) {
  const [secondsLeft, setSecondsLeft] = useState(paper.timeMinutes * 60)

  useEffect(() => {
    const t = setInterval(() => setSecondsLeft((s) => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
  const ss = String(secondsLeft % 60).padStart(2, '0')
  const low = secondsLeft < 300

  const set = (id, value) => setAnswers((a) => ({ ...a, [id]: value }))

  return (
    <div>
      {/* Exam header. Kept inside the content column (no negative margins) so
          it can never push the page wider than the screen. */}
      <div className="sticky top-0 z-10 mb-5 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold text-slate-900">
              {paperTitle(paper)}
            </h1>
            <p className="text-xs text-slate-500">
              {paperTotalMarks(paper)} marks · {paper.timeMinutes} minutes
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <span
              className={`font-mono text-lg tabular-nums ${low ? 'text-rose-600' : 'text-slate-700'}`}
            >
              {mm}:{ss}
            </span>
            <Button variant="secondary" onClick={onQuit}>
              Quit
            </Button>
            <Button onClick={onFinish}>Finish</Button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {paper.questions.map((q, qi) => (
          <Card key={q.id}>
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h2 className="font-semibold text-slate-900">
                Question {qi + 1}
              </h2>
              <span className="text-xs text-slate-500">
                {q.parts.reduce((s, p) => s + p.marks, 0)} marks
              </span>
            </div>
            {q.stimulus && (
              <p className="mb-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
                {q.stimulus}
              </p>
            )}
            <div className="space-y-5">
              {q.parts.map((part) => (
                <PartInput
                  key={part.id}
                  part={part}
                  value={answers[part.id]}
                  onChange={(v) => set(part.id, v)}
                />
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <Button onClick={onFinish}>Finish & mark</Button>
      </div>
    </div>
  )
}

function PartHeader({ part }) {
  return (
    <div className="mb-1.5 flex flex-wrap items-baseline gap-2">
      <span className="text-sm font-semibold text-slate-900">{part.id}</span>
      <span className="text-xs text-slate-500">
        ({part.marks} mark{part.marks === 1 ? '' : 's'})
      </span>
      <Chip color="indigo">Criterion {part.criterion}</Chip>
    </div>
  )
}

function Prompt({ part }) {
  return (
    <p className="mb-2 whitespace-pre-line text-sm text-slate-800">
      <strong className="text-indigo-700">{part.command}</strong> {part.prompt}
    </p>
  )
}

function PartInput({ part, value, onChange }) {
  return (
    <div>
      <PartHeader part={part} />
      <Prompt part={part} />

      {part.type === 'select' && (
        <select
          value={value ?? ''}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`${inputClass} sm:max-w-lg`}
          aria-label={`Answer for ${part.id}`}
        >
          <option value="">Select…</option>
          {part.options.map((o, i) => (
            <option key={o} value={i}>
              {String.fromCharCode(65 + i)}. {o}
            </option>
          ))}
        </select>
      )}

      {(part.type === 'short' || part.type === 'calculate') && (
        <textarea
          rows={part.type === 'calculate' ? 4 : 3}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={
            part.type === 'calculate'
              ? 'Show your working and give the final answer with units…'
              : 'Type your answer…'
          }
          className={inputClass}
          aria-label={`Answer for ${part.id}`}
        />
      )}

      {part.type === 'extended' && (
        <>
          <textarea
            rows={8}
            value={value ?? ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Write your response…"
            className={inputClass}
            aria-label={`Answer for ${part.id}`}
          />
          <p className="mt-1 text-xs text-slate-400">
            Guide: about {part.wordGuide} words ·{' '}
            {(value ?? '').trim() ? (value ?? '').trim().split(/\s+/).length : 0}{' '}
            written
          </p>
        </>
      )}

      {part.type === 'varTable' && (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[26rem] text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs text-slate-500">
                <th className="py-2 pr-3 font-medium">Variable</th>
                {VAR_CATEGORIES.map((c) => (
                  <th
                    key={c.id}
                    className="px-2 py-2 text-center font-medium"
                    title={c.name}
                  >
                    {c.short}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {part.rows.map((row, ri) => (
                <tr key={row.label} className="border-b border-slate-100">
                  <td className="py-2 pr-3 text-slate-700">{row.label}</td>
                  {VAR_CATEGORIES.map((c) => (
                    <td key={c.id} className="px-2 py-2 text-center">
                      <input
                        type="radio"
                        name={`${part.id}-${ri}`}
                        checked={(value?.[ri] ?? '') === c.id}
                        onChange={() => {
                          const next = { ...(value ?? {}) }
                          next[ri] = c.id
                          onChange(next)
                        }}
                        className="h-4 w-4 accent-indigo-600"
                        aria-label={`${row.label} is ${c.name}`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

/* ---------------- Review & self-marking ---------------- */

// Auto-markable parts are scored for the student; written parts are self-marked.
function autoScore(part, value) {
  if (part.type === 'select') {
    return value === part.answer ? part.marks : 0
  }
  if (part.type === 'varTable') {
    const correct = part.rows.filter(
      (r, i) => (value?.[i] ?? '') === r.correct,
    ).length
    // Award proportionally, rounded down, capped at the part's marks.
    return Math.min(part.marks, Math.round((correct / part.rows.length) * part.marks))
  }
  return null // self-marked
}

function Review({ paper, answers, marks, setMarks, onDone }) {
  const total = paperTotalMarks(paper)
  const [saved, setSaved] = useState(false)

  const parts = paper.questions.flatMap((q) => q.parts)
  const scored = parts.reduce((sum, part) => {
    const auto = autoScore(part, answers[part.id])
    return sum + (auto ?? marks[part.id] ?? 0)
  }, 0)
  const pct = total ? Math.round((scored / total) * 100) : 0

  async function save() {
    await db.mockAttempts.add({
      paperId: paper.id,
      subject: paper.subject,
      level: paper.level ?? null,
      score: scored,
      total,
      date: new Date().toISOString(),
    })
    setSaved(true)
  }

  return (
    <div>
      <PageHeader
        title="Mark your paper"
        subtitle="Auto-marked questions are already scored. For written answers, compare against the markscheme and award yourself marks honestly. That’s where the learning happens."
      />

      <Card className="mb-5">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-semibold text-slate-900">
            {scored}
          </span>
          <span className="text-slate-500">/ {total} marks</span>
          <span className="ml-auto text-lg font-medium text-indigo-700">
            {pct}%
          </span>
        </div>
      </Card>

      <div className="space-y-6">
        {paper.questions.map((q, qi) => (
          <Card key={q.id}>
            <h2 className="mb-3 font-semibold text-slate-900">
              Question {qi + 1}
            </h2>
            <div className="space-y-6">
              {q.parts.map((part) => {
                const auto = autoScore(part, answers[part.id])
                return (
                  <div key={part.id}>
                    <PartHeader part={part} />
                    <Prompt part={part} />

                    <div className="mt-2 rounded-lg border border-slate-200 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Your answer
                      </p>
                      <p className="mt-1 whitespace-pre-wrap text-sm text-slate-700">
                        {renderAnswer(part, answers[part.id])}
                      </p>
                    </div>

                    {/* Markscheme / explanation */}
                    <div className="mt-2 rounded-lg bg-emerald-50 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                        {part.markscheme ? 'Markscheme' : 'Correct answer'}
                      </p>
                      {part.markscheme ? (
                        <ul className="mt-1 space-y-1">
                          {part.markscheme.map((m) => (
                            <li key={m} className="text-sm text-emerald-900">
                              • {m}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-1 text-sm text-emerald-900">
                          {part.type === 'select'
                            ? part.options[part.answer]
                            : part.rows
                                ?.map((r) => `${r.label} → ${r.correct}`)
                                .join(' · ')}
                        </p>
                      )}
                      {/* Real markschemes list what else earns the mark and
                          what is explicitly not credited. */}
                      {part.accept && (
                        <p className="mt-2 text-sm text-emerald-900">
                          <span className="font-semibold">ACCEPT: </span>
                          {part.accept.join('; ')}
                        </p>
                      )}
                      {part.reject && (
                        <p className="mt-1 text-sm text-rose-700">
                          <span className="font-semibold">DO NOT ACCEPT: </span>
                          {part.reject.join('; ')}
                        </p>
                      )}
                      {part.altMethod && (
                        <div className="mt-2">
                          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                            Alternative method
                          </p>
                          <ul className="mt-1 space-y-1">
                            {part.altMethod.map((m) => (
                              <li key={m} className="text-sm text-emerald-900">
                                • {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {part.explanation && (
                        <p className="mt-2 text-sm text-emerald-900">
                          {part.explanation}
                        </p>
                      )}
                      {part.answerNote && (
                        <p className="mt-2 text-sm font-medium text-emerald-900">
                          Answer: {part.answerNote}
                        </p>
                      )}
                    </div>

                    {/* Scoring */}
                    <div className="mt-2 flex items-center gap-2">
                      {auto !== null ? (
                        <span className="text-sm font-medium text-slate-700">
                          Auto-marked: {auto} / {part.marks}
                        </span>
                      ) : (
                        <>
                          <span className="text-sm text-slate-600">
                            Award yourself:
                          </span>
                          {Array.from({ length: part.marks + 1 }, (_, i) => i).map(
                            (n) => (
                              <button
                                key={n}
                                onClick={() =>
                                  setMarks((m) => ({ ...m, [part.id]: n }))
                                }
                                className={`h-8 w-8 rounded-lg border text-sm font-medium transition-colors ${
                                  (marks[part.id] ?? -1) === n
                                    ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
                                    : 'border-slate-200 text-slate-600 hover:border-slate-300'
                                }`}
                              >
                                {n}
                              </button>
                            ),
                          )}
                          <span className="text-sm text-slate-500">
                            / {part.marks}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        {saved ? (
          <>
            <span className="text-sm font-medium text-emerald-700">
              Result saved ✓
            </span>
            <Button variant="secondary" onClick={onDone}>
              Back to papers
            </Button>
          </>
        ) : (
          <>
            <Button onClick={save}>Save result</Button>
            <Button variant="secondary" onClick={onDone}>
              Discard
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

function renderAnswer(part, value) {
  if (value === undefined || value === '' || value === null)
    return '(not answered)'
  if (part.type === 'select') return part.options[value] ?? '(not answered)'
  if (part.type === 'varTable') {
    return part.rows
      .map((r, i) => `${r.label} → ${value?.[i] ?? 'not answered'}`)
      .join('\n')
  }
  return value
}

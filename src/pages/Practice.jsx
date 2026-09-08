import { useEffect, useMemo, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db, getSetting, setSetting } from '../db'
import {
  QUIZ_SUBJECTS,
  questionsFor,
  countBySubject,
  subjectName,
} from '../data/quizzes'
import { SUBJECT_GROUPS } from '../data/subjectGroups'
import { PRACTICE_CRITERIA } from '../data/practiceCriteria'
import {
  PageHeader,
  Card,
  Chip,
  Button,
  formatDate,
} from '../components/ui'

const LENGTH_OPTIONS = [5, 10, 0] // 0 = all available

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Pre-shuffle each question's options once, remembering where the answer went.
function prepare(questions, length) {
  const picked = shuffle(questions).slice(0, length > 0 ? length : questions.length)
  return picked.map((q) => {
    const order = shuffle(q.options.map((_, i) => i))
    return {
      ...q,
      shuffled: order.map((i) => q.options[i]),
      answerIndex: order.indexOf(q.answer),
    }
  })
}

export default function Practice() {
  const [phase, setPhase] = useState('setup') // setup | active | results
  const [selected, setSelected] = useState([])
  const [criterion, setCriterion] = useState(null) // null = all criteria
  const [length, setLength] = useState(10)
  const [quiz, setQuiz] = useState([])
  const [results, setResults] = useState(null)
  const [mySubjects, setMySubjects] = useState([])
  const [mathsLevel, setMathsLevel] = useState('standard')

  const counts = useMemo(() => countBySubject(mathsLevel), [mathsLevel])
  const attempts = useLiveQuery(
    () => db.quizAttempts.orderBy('date').reverse().limit(5).toArray(),
    [],
  )

  // Load the student's chosen subjects, level and last practice selection.
  useEffect(() => {
    Promise.all([
      getSetting('quizSubjects', []),
      getSetting('mySubjects', []),
      getSetting('mathsLevel', 'standard'),
    ]).then(([last, mine, lvl]) => {
      setMySubjects(Array.isArray(mine) ? mine : [])
      setMathsLevel(lvl ?? 'standard')
      if (Array.isArray(last) && last.length) setSelected(last)
    })
  }, [])

  function toggleSubject(id) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    )
    setCriterion(null) // criteria differ per subject, so reset the filter
  }

  // Criteria offered are the union of those for the selected subjects.
  const criteriaOptions = useMemo(() => {
    const seen = new Map()
    for (const s of selected) {
      for (const c of PRACTICE_CRITERIA[s] ?? []) {
        if (!seen.has(c.id)) seen.set(c.id, c)
      }
    }
    return [...seen.values()].sort((a, b) => a.id.localeCompare(b.id))
  }, [selected])

  const available = questionsFor({
    subjects: selected,
    criterion,
    mathsLevel,
  }).length

  function startQuiz() {
    setSetting('quizSubjects', selected)
    setQuiz(
      prepare(questionsFor({ subjects: selected, criterion, mathsLevel }), length),
    )
    setPhase('active')
  }

  async function finishQuiz(answers) {
    const correct = answers.filter((a) => a.correct).length
    const attempt = {
      subjects: selected,
      total: quiz.length,
      correct,
      date: new Date().toISOString(),
      wrong: answers
        .filter((a) => !a.correct)
        .map((a) => a.questionId),
    }
    await db.quizAttempts.add(attempt)
    setResults({ answers, correct, total: quiz.length })
    setPhase('results')
  }

  function reset() {
    setPhase('setup')
    setQuiz([])
    setResults(null)
  }

  return (
    <div>
      <PageHeader
        title="Practice Centre"
        subtitle="Pick your subjects and test yourself. Every question comes with an explanation, so wrong answers turn into learning."
      />

      {phase === 'setup' && (
        <Setup
          counts={counts}
          selected={selected}
          toggleSubject={toggleSubject}
          length={length}
          setLength={setLength}
          available={available}
          onStart={startQuiz}
          attempts={attempts}
          mySubjects={mySubjects}
          criteriaOptions={criteriaOptions}
          criterion={criterion}
          setCriterion={setCriterion}
          mathsLevel={mathsLevel}
        />
      )}

      {phase === 'active' && <Runner quiz={quiz} onFinish={finishQuiz} onQuit={reset} />}

      {phase === 'results' && (
        <Results results={results} quiz={quiz} onRestart={reset} />
      )}
    </div>
  )
}

/* ---------- Setup ---------- */

function Setup({
  counts,
  selected,
  toggleSubject,
  length,
  setLength,
  available,
  onStart,
  attempts,
  mySubjects,
  criteriaOptions,
  criterion,
  setCriterion,
  mathsLevel,
}) {
  // Show only the subjects the student actually takes, once they've chosen.
  const pool = mySubjects.length
    ? QUIZ_SUBJECTS.filter((s) => mySubjects.includes(s.id))
    : QUIZ_SUBJECTS

  // Group subjects under their MYP subject group.
  const grouped = SUBJECT_GROUPS.map((g) => ({
    group: g,
    subjects: pool.filter((s) => s.group === g.id),
  })).filter((x) => x.subjects.length > 0)

  return (
    <div className="space-y-5">
      <Card>
        <h2 className="text-sm font-semibold text-slate-700">
          1. Choose your subjects
        </h2>
        <p className="mt-1 text-xs text-slate-400">
          Tap any subjects you want to practise. You can mix several.
        </p>
        <div className="mt-3 space-y-4">
          {grouped.map(({ group, subjects }) => (
            <div key={group.id}>
              <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-slate-400">
                {group.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {subjects.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => toggleSubject(s.id)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                      selected.includes(s.id)
                        ? 'border-indigo-600 bg-indigo-50 font-medium text-indigo-800'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {s.name}
                    {s.id === 'mathematics' && (
                      <span className="ml-1.5 text-xs text-slate-400">
                        {mathsLevel === 'extended' ? 'Ext' : 'Std'}
                      </span>
                    )}
                    <span className="ml-1.5 text-xs text-slate-400">
                      {counts[s.id]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {criteriaOptions.length > 0 && (
        <Card>
          <h2 className="text-sm font-semibold text-slate-700">
            2. Focus on a criterion
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Target the skill you’re being assessed on, or mix everything.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => setCriterion(null)}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                criterion === null
                  ? 'border-indigo-600 bg-indigo-50 font-medium text-indigo-800'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              All criteria
            </button>
            {criteriaOptions.map((c) => (
              <button
                key={c.id}
                onClick={() => setCriterion(c.id)}
                title={c.blurb}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                  criterion === c.id
                    ? 'border-indigo-600 bg-indigo-50 font-medium text-indigo-800'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {c.id === 'V' ? c.name : `${c.id} · ${c.name}`}
              </button>
            ))}
          </div>
          {criterion && (
            <p className="mt-2 text-xs text-slate-500">
              {criteriaOptions.find((c) => c.id === criterion)?.blurb}
            </p>
          )}
        </Card>
      )}

      <Card>
        <h2 className="text-sm font-semibold text-slate-700">
          3. How many questions?
        </h2>
        <div className="mt-3 flex gap-2">
          {LENGTH_OPTIONS.map((n) => (
            <button
              key={n}
              onClick={() => setLength(n)}
              className={`flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                length === n
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {n === 0 ? 'All' : n}
            </button>
          ))}
        </div>
      </Card>

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {selected.length === 0
            ? 'Select at least one subject to begin.'
            : `${available} question${available === 1 ? '' : 's'} available`}
        </p>
        <Button onClick={onStart} disabled={available === 0}>
          Start quiz →
        </Button>
      </div>

      {attempts && attempts.length > 0 && (
        <section>
          <h2 className="mb-2 text-sm font-semibold text-slate-700">
            Recent attempts
          </h2>
          <div className="space-y-2">
            {attempts.map((a) => {
              const pct = Math.round((a.correct / a.total) * 100)
              return (
                <Card key={a.id} className="flex items-center gap-3 text-sm">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                      pct >= 70
                        ? 'bg-emerald-100 text-emerald-700'
                        : pct >= 40
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-rose-100 text-rose-700'
                    }`}
                  >
                    {pct}%
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-slate-700">
                      {a.correct}/{a.total} correct
                    </p>
                    <p className="truncate text-xs text-slate-400">
                      {a.subjects.map((s) => subjectName(s)).join(', ')}
                    </p>
                  </div>
                  <span className="text-xs text-slate-400">
                    {formatDate(a.date)}
                  </span>
                </Card>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}

/* ---------- Runner ---------- */

function Runner({ quiz, onFinish, onQuit }) {
  const [index, setIndex] = useState(0)
  const [chosen, setChosen] = useState(null)
  const [answers, setAnswers] = useState([])

  const q = quiz[index]
  const answered = chosen !== null
  const isLast = index === quiz.length - 1

  function choose(i) {
    if (answered) return
    setChosen(i)
    setAnswers((prev) => [
      ...prev,
      { questionId: q.id, correct: i === q.answerIndex, chosen: i },
    ])
  }

  function next() {
    if (isLast) {
      onFinish([
        ...answers,
      ])
      return
    }
    setIndex((n) => n + 1)
    setChosen(null)
  }

  const correctSoFar = answers.filter((a) => a.correct).length

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-4">
        <div className="mb-1.5 flex items-center justify-between text-xs text-slate-400">
          <span>
            Question {index + 1} of {quiz.length}
          </span>
          <button onClick={onQuit} className="hover:text-rose-600">
            Quit
          </button>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all"
            style={{ width: `${((index + (answered ? 1 : 0)) / quiz.length) * 100}%` }}
          />
        </div>
      </div>

      <Card>
        <div className="flex flex-wrap items-center gap-1.5">
          <Chip color="indigo">{subjectName(q.subject)}</Chip>
          <Chip>{q.topic}</Chip>
        </div>
        <h2 className="mt-3 text-lg font-medium text-slate-900">{q.prompt}</h2>

        <div className="mt-4 space-y-2">
          {q.shuffled.map((opt, i) => {
            const isAnswer = i === q.answerIndex
            const isChosen = i === chosen
            let style = 'border-slate-200 hover:border-indigo-300'
            if (answered) {
              if (isAnswer) style = 'border-emerald-500 bg-emerald-50'
              else if (isChosen) style = 'border-rose-400 bg-rose-50'
              else style = 'border-slate-200 opacity-60'
            }
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                disabled={answered}
                className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors disabled:cursor-default ${style}`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium ${
                    answered && isAnswer
                      ? 'border-emerald-500 bg-emerald-500 text-white'
                      : answered && isChosen
                        ? 'border-rose-400 bg-rose-400 text-white'
                        : 'border-slate-300 text-slate-500'
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-slate-700">{opt}</span>
              </button>
            )
          })}
        </div>

        {answered && (
          <div
            className={`mt-4 rounded-lg p-3 ${
              chosen === q.answerIndex ? 'bg-emerald-50' : 'bg-amber-50'
            }`}
          >
            <p
              className={`text-sm font-semibold ${
                chosen === q.answerIndex ? 'text-emerald-800' : 'text-amber-800'
              }`}
            >
              {chosen === q.answerIndex
                ? 'Correct ✓'
                : `Not quite - the answer is ${String.fromCharCode(65 + q.answerIndex)}.`}
            </p>
            <p className="mt-1 text-sm text-slate-600">{q.explanation}</p>
          </div>
        )}
      </Card>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-slate-400">
          Score: {correctSoFar}/{answers.length}
        </span>
        <Button onClick={next} disabled={!answered}>
          {isLast ? 'See results' : 'Next question →'}
        </Button>
      </div>
    </div>
  )
}

/* ---------- Results ---------- */

function Results({ results, quiz, onRestart }) {
  const { answers, correct, total } = results
  const pct = Math.round((correct / total) * 100)
  const wrong = answers
    .map((a) => ({ ...a, q: quiz.find((x) => x.id === a.questionId) }))
    .filter((a) => !a.correct)

  const message =
    pct >= 80
      ? 'Excellent - you really know this.'
      : pct >= 50
        ? 'Good effort. Review the ones you missed below.'
        : 'Keep going - the explanations below are where the learning happens.'

  return (
    <div className="space-y-5">
      <Card className="text-center">
        <div
          className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full text-2xl font-bold ${
            pct >= 70
              ? 'bg-emerald-100 text-emerald-700'
              : pct >= 40
                ? 'bg-amber-100 text-amber-700'
                : 'bg-rose-100 text-rose-700'
          }`}
        >
          {pct}%
        </div>
        <p className="mt-3 text-lg font-semibold text-slate-900">
          {correct} out of {total} correct
        </p>
        <p className="mt-1 text-sm text-slate-500">{message}</p>
      </Card>

      {wrong.length > 0 ? (
        <section>
          <h2 className="mb-2 text-sm font-semibold text-slate-700">
            Review: {wrong.length} to revisit
          </h2>
          <div className="space-y-2">
            {wrong.map((a) => (
              <Card key={a.questionId} className="text-sm">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Chip color="indigo">{subjectName(a.q.subject)}</Chip>
                  <Chip>{a.q.topic}</Chip>
                </div>
                <p className="mt-2 font-medium text-slate-800">{a.q.prompt}</p>
                <p className="mt-1 text-rose-700">
                  You chose: {a.q.shuffled[a.chosen]}
                </p>
                <p className="text-emerald-700">
                  Answer: {a.q.shuffled[a.q.answerIndex]}
                </p>
                <p className="mt-1 text-slate-600">{a.q.explanation}</p>
              </Card>
            ))}
          </div>
        </section>
      ) : (
        <Card className="text-center text-sm text-emerald-700">
          Perfect score - nothing to review. 🎉
        </Card>
      )}

      <div className="flex gap-2">
        <Button onClick={onRestart} className="flex-1">
          New quiz
        </Button>
      </div>
    </div>
  )
}

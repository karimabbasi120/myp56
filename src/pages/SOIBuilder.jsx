import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../db'
import {
  KEY_CONCEPTS,
  RELATED_CONCEPTS,
  GLOBAL_CONTEXTS,
  SOI_EXAMPLES,
} from '../data/concepts'
import { SUBJECT_GROUPS } from '../data/subjectGroups'
import {
  PageHeader,
  Card,
  Chip,
  Button,
  EmptyState,
  inputClass,
  formatDate,
} from '../components/ui'

const STEPS = ['Key concept', 'Related concepts', 'Global context', 'Write it']

export default function SOIBuilder() {
  const [step, setStep] = useState(0)
  const [keyConcept, setKeyConcept] = useState(null)
  const [subjectGroup, setSubjectGroup] = useState('langlit')
  const [related, setRelated] = useState([])
  const [context, setContext] = useState(null)
  const [text, setText] = useState('')
  const [saved, setSaved] = useState(false)

  const drafts = useLiveQuery(
    () => db.soiDrafts.orderBy('createdAt').reverse().toArray(),
    [],
  )

  const canNext =
    (step === 0 && keyConcept) ||
    (step === 1 && related.length > 0) ||
    (step === 2 && context)

  function toggleRelated(rc) {
    setRelated((prev) =>
      prev.includes(rc)
        ? prev.filter((r) => r !== rc)
        : prev.length < 2
          ? [...prev, rc]
          : prev,
    )
  }

  async function saveDraft() {
    await db.soiDrafts.add({
      keyConcept,
      relatedConcepts: related,
      globalContext: context,
      resultText: text.trim(),
      createdAt: new Date().toISOString(),
    })
    setSaved(true)
  }

  function reset() {
    setStep(0)
    setKeyConcept(null)
    setRelated([])
    setContext(null)
    setText('')
    setSaved(false)
  }

  return (
    <div>
      <PageHeader
        title="Statement of Inquiry Builder"
        subtitle="Combine a key concept, related concept(s) and a global context into one clear, debatable statement."
      />

      {/* Step indicator */}
      <ol className="mb-6 flex items-center gap-1.5 text-xs font-medium">
        {STEPS.map((label, i) => (
          <li key={label} className="flex items-center gap-1.5">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full ${
                i < step
                  ? 'bg-indigo-600 text-white'
                  : i === step
                    ? 'border-2 border-indigo-600 text-indigo-700'
                    : 'border border-slate-300 text-slate-400'
              }`}
            >
              {i + 1}
            </span>
            <span
              className={`hidden sm:inline ${i === step ? 'text-indigo-700' : 'text-slate-400'}`}
            >
              {label}
            </span>
            {i < STEPS.length - 1 && <span className="text-slate-300">›</span>}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <Card>
          <StepTitle
            n={1}
            title="Pick your key concept"
            hint="The big, transferable idea your unit is really about. Your teacher usually names it on the unit plan."
          />
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {KEY_CONCEPTS.map((kc) => (
              <button
                key={kc.name}
                onClick={() => setKeyConcept(kc.name)}
                title={kc.hint}
                className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                  keyConcept === kc.name
                    ? 'border-indigo-600 bg-indigo-50 font-medium text-indigo-800'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                {kc.name}
                <span className="mt-0.5 block text-xs font-normal text-slate-400">
                  {kc.hint}
                </span>
              </button>
            ))}
          </div>
        </Card>
      )}

      {step === 1 && (
        <Card>
          <StepTitle
            n={2}
            title="Choose 1–2 related concepts"
            hint="Subject-specific ideas that ground the key concept. Pick your subject group to see its related concepts."
          />
          <select
            value={subjectGroup}
            onChange={(e) => {
              setSubjectGroup(e.target.value)
              setRelated([])
            }}
            className={`${inputClass} mt-4 sm:w-72`}
            aria-label="Subject group"
          >
            {SUBJECT_GROUPS.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
          <div className="mt-3 flex flex-wrap gap-2">
            {RELATED_CONCEPTS[subjectGroup].map((rc) => (
              <button
                key={rc}
                onClick={() => toggleRelated(rc)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                  related.includes(rc)
                    ? 'border-indigo-600 bg-indigo-50 font-medium text-indigo-800'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                {rc}
              </button>
            ))}
          </div>
          {related.length === 2 && (
            <p className="mt-3 text-xs text-slate-400">
              Two selected - that’s the maximum for a focused SOI.
            </p>
          )}
        </Card>
      )}

      {step === 2 && (
        <Card>
          <StepTitle
            n={3}
            title="Pick the global context"
            hint="The real-world lens: why does this learning matter beyond the classroom?"
          />
          <div className="mt-4 space-y-2">
            {GLOBAL_CONTEXTS.map((gc) => (
              <button
                key={gc.name}
                onClick={() => setContext(gc.name)}
                className={`block w-full rounded-lg border p-3 text-left transition-colors ${
                  context === gc.name
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <span className="flex items-baseline justify-between gap-2">
                  <span className="text-sm font-medium text-slate-800">
                    {gc.name}
                  </span>
                  <span className="text-xs italic text-slate-400">
                    {gc.focus}
                  </span>
                </span>
                <span className="mt-1 block text-xs text-slate-500">
                  {gc.strands}
                </span>
              </button>
            ))}
          </div>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <StepTitle
            n={4}
            title="Write your statement"
            hint="One sentence. No text titles, no “students will…”. It should be a claim someone could explore or debate."
          />
          <div className="mt-4 flex flex-wrap gap-1.5">
            <Chip color="indigo">{keyConcept}</Chip>
            {related.map((r) => (
              <Chip key={r} color="violet">
                {r}
              </Chip>
            ))}
            <Chip color="emerald">{context}</Chip>
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            placeholder="e.g. Understanding how energy transforms within systems allows people to design innovations that change how communities live."
            className={`${inputClass} mt-4`}
            aria-label="Statement of Inquiry"
          />

          <SOIChecklist text={text} parts={[keyConcept, ...related, context]} />

          <div className="mt-4 rounded-lg bg-slate-50 p-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              A recipe that works
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              <em>[Key concept idea]</em> + <em>[related concept in action]</em>{' '}
              + <em>[why it matters in the global context]</em> - joined into one
              natural sentence. Avoid “and” chains; make one part cause or shape
              the other.
            </p>
          </div>

          {saved ? (
            <div className="mt-4 flex items-center justify-between rounded-lg bg-emerald-50 p-3">
              <p className="text-sm font-medium text-emerald-800">
                Draft saved ✓
              </p>
              <Button variant="secondary" onClick={reset}>
                Start a new one
              </Button>
            </div>
          ) : (
            <Button
              className="mt-4"
              disabled={text.trim().length < 20}
              onClick={saveDraft}
            >
              Save draft
            </Button>
          )}
        </Card>
      )}

      {/* Wizard nav */}
      <div className="mt-4 flex justify-between">
        <Button
          variant="secondary"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
        >
          ← Back
        </Button>
        {step < 3 && (
          <Button onClick={() => setStep((s) => s + 1)} disabled={!canNext}>
            Next →
          </Button>
        )}
      </div>

      {/* Examples */}
      <section className="mt-8">
        <h2 className="mb-2 text-sm font-semibold text-slate-700">
          Worked examples
        </h2>
        <div className="space-y-2">
          {SOI_EXAMPLES.map((ex) => (
            <Card key={ex.soi} className="text-sm">
              <p className="italic text-slate-700">“{ex.soi}”</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <Chip color="indigo">{ex.keyConcept}</Chip>
                {ex.relatedConcepts.map((r) => (
                  <Chip key={r} color="violet">
                    {r}
                  </Chip>
                ))}
                <Chip color="emerald">{ex.globalContext}</Chip>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Saved drafts */}
      <section className="mt-8">
        <h2 className="mb-2 text-sm font-semibold text-slate-700">
          Your saved drafts
        </h2>
        {!drafts || drafts.length === 0 ? (
          <EmptyState
            title="No drafts yet"
            hint="Finish the wizard above and your statements will be saved here."
          />
        ) : (
          <div className="space-y-2">
            {drafts.map((d) => (
              <Card key={d.id} className="text-sm">
                <div className="flex items-start justify-between gap-3">
                  <p className="italic text-slate-700">“{d.resultText}”</p>
                  <button
                    onClick={() => db.soiDrafts.delete(d.id)}
                    className="text-xs text-slate-400 hover:text-rose-600"
                    aria-label="Delete draft"
                  >
                    Delete
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  <Chip color="indigo">{d.keyConcept}</Chip>
                  {d.relatedConcepts.map((r) => (
                    <Chip key={r} color="violet">
                      {r}
                    </Chip>
                  ))}
                  <Chip color="emerald">{d.globalContext}</Chip>
                  <span className="ml-auto text-xs text-slate-400">
                    {formatDate(d.createdAt)}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

function StepTitle({ n, title, hint }) {
  return (
    <div>
      <h2 className="font-semibold text-slate-900">
        Step {n}: {title}
      </h2>
      <p className="mt-1 text-sm text-slate-500">{hint}</p>
    </div>
  )
}

function SOIChecklist({ text, parts }) {
  const t = text.trim()
  const checks = [
    { label: 'It’s one complete sentence', pass: t.length >= 20 && !t.includes('\n') },
    {
      label: 'It doesn’t start with “Students will”',
      pass: t.length === 0 || !/^students\s+will/i.test(t),
    },
    {
      label: 'It’s general - no book titles, dates or named people',
      pass: t.length === 0 || !/["“”][A-Z]/.test(t),
    },
    {
      label: 'It sounds debatable, not a plain fact',
      pass: t.length >= 40,
    },
  ]
  if (!t) return null
  return (
    <ul className="mt-3 space-y-1">
      {checks.map((c) => (
        <li
          key={c.label}
          className={`flex items-center gap-2 text-xs ${c.pass ? 'text-emerald-700' : 'text-slate-400'}`}
        >
          <span>{c.pass ? '✓' : '○'}</span>
          {c.label}
        </li>
      ))}
      <li className="pt-1 text-xs text-slate-400">
        Concepts to weave in: {parts.filter(Boolean).join(' · ')}
      </li>
    </ul>
  )
}

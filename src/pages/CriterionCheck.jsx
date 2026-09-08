import { useState } from 'react'
import { CRITERIA } from '../data/criteria'
import { SUBJECT_GROUPS } from '../data/subjectGroups'
import { PageHeader, Card, inputClass } from '../components/ui'

export default function CriterionCheck() {
  const [group, setGroup] = useState('langlit')
  const [criterion, setCriterion] = useState('A')

  const groupCriteria = CRITERIA[group]
  const current = groupCriteria.find((c) => c.criterion === criterion)

  return (
    <div>
      <PageHeader
        title="Criterion Self-Check"
        subtitle="Pick your subject and criterion to see, in plain language, what separates a 3–4 from a 7–8."
      />

      <div className="mb-4 flex flex-col gap-2 sm:flex-row">
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className={`${inputClass} sm:w-72`}
          aria-label="Subject group"
        >
          {SUBJECT_GROUPS.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
        <div className="flex gap-1.5">
          {groupCriteria.map((c) => (
            <button
              key={c.criterion}
              onClick={() => setCriterion(c.criterion)}
              className={`flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition-colors sm:flex-none ${
                criterion === c.criterion
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              {c.criterion}
            </button>
          ))}
        </div>
      </div>

      <Card>
        <h2 className="font-semibold text-slate-900">
          Criterion {current.criterion}: {current.name}
        </h2>
        <p className="mt-1 text-sm text-slate-600">{current.what}</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-slate-400">3–4</span>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Adequate
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{current.level34}</p>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-emerald-600">
                7–8
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                Excellent
              </span>
            </div>
            <p className="mt-2 text-sm text-emerald-900">{current.level78}</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-slate-50 p-3">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            The gap, in one line
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            The jump from 3–4 to 7–8 is almost never about knowing more - it’s
            about <strong>depth and deliberateness</strong>: explaining{' '}
            <em>why</em>, supporting every claim, and doing consistently what a
            3–4 response does occasionally.
          </p>
        </div>
      </Card>

      <p className="mt-4 text-xs text-slate-400">
        Level descriptors here are plain-language summaries to help you
        self-assess - your teacher’s task-specific clarifications always take
        priority.
      </p>
    </div>
  )
}

import { useMemo, useState } from 'react'
import { COMMAND_TERMS } from '../data/commandTerms'
import { SUBJECT_GROUPS } from '../data/subjectGroups'
import { PageHeader, Card, Chip, EmptyState, inputClass } from '../components/ui'

export default function CommandTerms() {
  const [query, setQuery] = useState('')
  const [group, setGroup] = useState('all')
  const [openId, setOpenId] = useState(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return COMMAND_TERMS.filter((t) => {
      const inGroup =
        group === 'all' ||
        t.subjectGroups.includes('all') ||
        t.subjectGroups.includes(group)
      const matches =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.plainLanguage.toLowerCase().includes(q)
      return inGroup && matches
    })
  }, [query, group])

  return (
    <div>
      <PageHeader
        title="Command Term Decoder"
        subtitle="What examiners actually mean by “evaluate”, “justify” and “discuss”, and how to answer at the top levels."
      />

      <div className="mb-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a command term…"
          className={inputClass}
          aria-label="Search command terms"
        />
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className={`${inputClass} sm:w-64`}
          aria-label="Filter by subject group"
        >
          <option value="all">All subject groups</option>
          {SUBJECT_GROUPS.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
      </div>

      <p className="mb-3 text-xs text-slate-400">
        {results.length} term{results.length === 1 ? '' : 's'}
      </p>

      {results.length === 0 ? (
        <EmptyState
          title="No matching terms"
          hint="Try a different word, or clear the subject filter."
        />
      ) : (
        <div className="space-y-3">
          {results.map((t) => (
            <TermCard
              key={t.id}
              term={t}
              open={openId === t.id}
              onToggle={() => setOpenId(openId === t.id ? null : t.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function TermCard({ term, open, onToggle }) {
  return (
    <Card className="p-0">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-3 p-4 text-left"
        aria-expanded={open}
      >
        <div>
          <h2 className="font-semibold text-slate-900">{term.term}</h2>
          <p className="mt-0.5 text-sm text-slate-500">{term.plainLanguage}</p>
        </div>
        <span
          className={`mt-1 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="space-y-4 border-t border-slate-100 px-4 pb-4 pt-3">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              IB definition
            </h3>
            <p className="mt-1 text-sm text-slate-700">{term.definition}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-emerald-50 p-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                High-level response
              </h3>
              <p className="mt-1 text-sm text-emerald-900">{term.highLevel}</p>
            </div>
            <div className="rounded-lg bg-rose-50 p-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                Low-level response
              </h3>
              <p className="mt-1 text-sm text-rose-900">{term.lowLevel}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Sentence starters
            </h3>
            <ul className="mt-1 space-y-1">
              {term.starters.map((s) => (
                <li key={s} className="text-sm italic text-slate-600">
                  “{s}”
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {term.subjectGroups.includes('all') ? (
              <Chip color="indigo">All subject groups</Chip>
            ) : (
              term.subjectGroups.map((g) => (
                <Chip key={g}>
                  {SUBJECT_GROUPS.find((sg) => sg.id === g)?.name ?? g}
                </Chip>
              ))
            )}
          </div>
        </div>
      )}
    </Card>
  )
}

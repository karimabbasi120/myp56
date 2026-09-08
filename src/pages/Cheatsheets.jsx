import { useEffect, useMemo, useState } from 'react'
import { CHEATSHEETS } from '../data/cheatsheets'
import { QUIZ_SUBJECTS, subjectName } from '../data/quizzes'
import { getSetting, setSetting } from '../db'
import { PageHeader, Card, EmptyState, inputClass } from '../components/ui'

// Only subjects that actually have a cheatsheet.
const SUBJECTS = QUIZ_SUBJECTS.filter((s) => CHEATSHEETS[s.id])

export default function Cheatsheets() {
  const [subject, setSubject] = useState('biology')
  const [query, setQuery] = useState('')

  // Remember the last cheatsheet the student looked at.
  useEffect(() => {
    getSetting('cheatsheetSubject', 'biology').then((s) => {
      if (CHEATSHEETS[s]) setSubject(s)
    })
  }, [])

  function pick(id) {
    setSubject(id)
    setQuery('')
    setSetting('cheatsheetSubject', id)
  }

  const sections = useMemo(() => {
    const all = CHEATSHEETS[subject] ?? []
    const q = query.trim().toLowerCase()
    if (!q) return all
    return all
      .map((sec) => ({
        ...sec,
        points: sec.points.filter(
          (p) =>
            p.toLowerCase().includes(q) || sec.title.toLowerCase().includes(q),
        ),
      }))
      .filter((sec) => sec.points.length > 0)
  }, [subject, query])

  return (
    <div>
      <PageHeader
        title="Cheatsheets"
        subtitle="Revision notes pitched at MYP Years 4 and 5: the mechanisms, precise definitions and common exam traps that separate a 3-4 from a 7-8."
      />

      {/* Subject picker */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {SUBJECTS.map((s) => (
          <button
            key={s.id}
            onClick={() => pick(s.id)}
            className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
              subject === s.id
                ? 'border-indigo-600 bg-indigo-50 font-medium text-indigo-800'
                : 'border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`Search ${subjectName(subject)} notes…`}
        className={`${inputClass} mb-4`}
        aria-label="Search notes"
      />

      {sections.length === 0 ? (
        <EmptyState
          title="No matching notes"
          hint="Try a different word, or clear the search."
        />
      ) : (
        <div className="space-y-3">
          {sections.map((sec) => (
            <Card key={sec.title}>
              <h2 className="font-semibold text-slate-900">{sec.title}</h2>
              <ul className="mt-2 space-y-1.5">
                {sec.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      )}

      <p className="mt-4 text-xs text-slate-400">
        These notes are concise study aids for revision - always check against
        your class notes and the official IB subject guides.
      </p>
    </div>
  )
}

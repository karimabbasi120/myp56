import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../db'
import { ATL_CATEGORIES } from '../data/atl'
import {
  PageHeader,
  Card,
  Chip,
  Button,
  EmptyState,
  inputClass,
  formatDate,
} from '../components/ui'

export default function ATLTracker() {
  const [category, setCategory] = useState('selfMgmt')
  const [note, setNote] = useState('')
  const [view, setView] = useState('all')

  const entries = useLiveQuery(
    () => db.atlEntries.orderBy('date').reverse().toArray(),
    [],
  )

  const selected = ATL_CATEGORIES.find((c) => c.id === category)
  const shown =
    entries?.filter((e) => view === 'all' || e.category === view) ?? []

  const counts = Object.fromEntries(
    ATL_CATEGORIES.map((c) => [
      c.id,
      entries?.filter((e) => e.category === c.id).length ?? 0,
    ]),
  )

  async function addEntry() {
    if (!note.trim()) return
    await db.atlEntries.add({
      category,
      note: note.trim(),
      date: new Date().toISOString(),
    })
    setNote('')
  }

  return (
    <div>
      <PageHeader
        title="ATL Skills Tracker"
        subtitle="Log evidence of your Approaches to Learning skills in the moment. Ten seconds now saves an hour of remembering later."
      />

      <Card>
        <h2 className="text-sm font-semibold text-slate-700">Quick log</h2>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {ATL_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                category === c.id
                  ? 'border-indigo-600 bg-indigo-50 font-medium text-indigo-800'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-400">
          {selected.description}. E.g. {selected.examples}.
        </p>
        <form
          className="mt-3 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            addEntry()
          }}
        >
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What did you do? One sentence is plenty."
            className={inputClass}
            aria-label="Evidence note"
          />
          <Button type="submit" disabled={!note.trim()}>
            Log
          </Button>
        </form>
      </Card>

      {/* Category summary */}
      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-5">
        {ATL_CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setView(view === c.id ? 'all' : c.id)}
            className={`rounded-xl border p-3 text-left transition-colors ${
              view === c.id
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <p className="text-lg font-semibold text-slate-900">
              {counts[c.id]}
            </p>
            <p className="text-xs text-slate-500">{c.name}</p>
          </button>
        ))}
      </div>

      <section className="mt-6">
        <h2 className="mb-2 text-sm font-semibold text-slate-700">
          {view === 'all'
            ? 'All evidence'
            : `${ATL_CATEGORIES.find((c) => c.id === view)?.name} evidence`}
        </h2>
        {shown.length === 0 ? (
          <EmptyState
            title="Nothing logged yet"
            hint="Did you manage your time well today? Work well in a group? That’s evidence - log it."
          />
        ) : (
          <div className="space-y-2">
            {shown.map((e) => {
              const c = ATL_CATEGORIES.find((x) => x.id === e.category)
              return (
                <Card key={e.id} className="flex items-start gap-3 text-sm">
                  <Chip color={c?.color}>{c?.name}</Chip>
                  <p className="flex-1 text-slate-700">{e.note}</p>
                  <span className="whitespace-nowrap text-xs text-slate-400">
                    {formatDate(e.date)}
                  </span>
                  <button
                    onClick={() => db.atlEntries.delete(e.id)}
                    className="text-xs text-slate-400 hover:text-rose-600"
                  >
                    Delete
                  </button>
                </Card>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}

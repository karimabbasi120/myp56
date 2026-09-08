import { Link } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import { db, getSetting } from '../db'
import { Card, Chip, formatDate, todayISO } from '../components/ui'

const FEATURES = [
  {
    to: '/practice',
    title: 'Practice Centre',
    desc: 'Subject quizzes that explain every answer, so you learn by testing yourself.',
  },
  {
    to: '/cheatsheets',
    title: 'Cheatsheets',
    desc: 'Revision-ready notes for every subject: key facts and formulas.',
  },
  {
    to: '/command-terms',
    title: 'Command Term Decoder',
    desc: 'What “evaluate”, “justify” and “discuss” actually want from you.',
  },
  {
    to: '/soi-builder',
    title: 'SOI Builder',
    desc: 'Build a Statement of Inquiry step by step, with examples.',
  },
  {
    to: '/personal-project',
    title: 'Personal Project',
    desc: 'Process journal, milestones and one-click PDF export.',
  },
  {
    to: '/atl-tracker',
    title: 'ATL Skills Tracker',
    desc: 'Log evidence of your ATL skills in under ten seconds.',
  },
  {
    to: '/criterion-check',
    title: 'Criterion Self-Check',
    desc: 'What separates a 3–4 from a 7–8, per subject and criterion.',
  },
]

export default function Home() {
  const name = useLiveQuery(() => getSetting('name', ''), [])

  const upcoming = useLiveQuery(async () => {
    const all = await db.ppMilestones.orderBy('dueDate').toArray()
    return all.filter((m) => !m.done)
  }, [])

  const atlCount = useLiveQuery(() => db.atlEntries.count(), [])
  const ppCount = useLiveQuery(() => db.ppEntries.count(), [])
  const quizCount = useLiveQuery(() => db.quizAttempts.count(), [])

  const today = todayISO()
  const overdue = upcoming?.filter((m) => m.dueDate < today) ?? []
  const next = upcoming?.filter((m) => m.dueDate >= today).slice(0, 3) ?? []

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          {name ? `Hi ${name} 👋` : 'MYP 56'}
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Your MYP toolkit - criteria, concepts and the Personal Project, all in
          one calm place. Works offline.
        </p>
      </header>

      {(overdue.length > 0 || next.length > 0) && (
        <Card className="mb-5">
          <h2 className="text-sm font-semibold text-slate-700">
            Personal Project deadlines
          </h2>
          <ul className="mt-2 space-y-1.5">
            {overdue.map((m) => (
              <li key={m.id} className="flex items-center gap-2 text-sm">
                <Chip color="rose">Overdue</Chip>
                <span className="text-slate-700">{m.title}</span>
                <span className="ml-auto text-xs text-slate-400">
                  {formatDate(m.dueDate)}
                </span>
              </li>
            ))}
            {next.map((m) => (
              <li key={m.id} className="flex items-center gap-2 text-sm">
                <Chip color="amber">Upcoming</Chip>
                <span className="text-slate-700">{m.title}</span>
                <span className="ml-auto text-xs text-slate-400">
                  {formatDate(m.dueDate)}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {FEATURES.map((f) => (
          <Link
            key={f.to}
            to={f.to}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50/30"
          >
            <h2 className="font-semibold text-slate-900">{f.title}</h2>
            <p className="mt-1 text-sm text-slate-500">{f.desc}</p>
          </Link>
        ))}
        <div className="rounded-xl border border-dashed border-slate-300 p-4">
          <h2 className="font-semibold text-slate-700">Your activity</h2>
          <p className="mt-1 text-sm text-slate-500">
            {quizCount ?? 0} quiz{(quizCount ?? 0) === 1 ? '' : 'zes'} ·{' '}
            {ppCount ?? 0} journal entr{(ppCount ?? 0) === 1 ? 'y' : 'ies'} ·{' '}
            {atlCount ?? 0} ATL log{(atlCount ?? 0) === 1 ? '' : 's'}
          </p>
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { PageHeader } from '../components/ui'

const ITEMS = [
  {
    to: '/onboarding',
    title: 'My Subjects',
    desc: 'Change which MYP subjects and maths level you study.',
  },
  {
    to: '/soi-builder',
    title: 'SOI Builder',
    desc: 'Build a Statement of Inquiry step by step, with examples.',
  },
  {
    to: '/personal-project',
    title: 'Personal Project',
    desc: 'Process journal, milestones and one-tap PDF export.',
  },
  {
    to: '/atl-tracker',
    title: 'ATL Skills Tracker',
    desc: 'Log evidence of your ATL skills in seconds.',
  },
  {
    to: '/criterion-check',
    title: 'Criterion Self-Check',
    desc: 'What separates a 3–4 from a 7–8, per subject.',
  },
  {
    to: '/settings',
    title: 'Settings',
    desc: 'Your name, current year, and data.',
  },
]

export default function More() {
  return (
    <div>
      <PageHeader title="More" subtitle="Everything else in your MYP toolkit." />
      <div className="space-y-2">
        {ITEMS.map((i) => (
          <Link
            key={i.to}
            to={i.to}
            className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50/30"
          >
            <div>
              <h2 className="font-semibold text-slate-900">{i.title}</h2>
              <p className="mt-0.5 text-sm text-slate-500">{i.desc}</p>
            </div>
            <span className="text-slate-300">›</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

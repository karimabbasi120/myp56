import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db, getSetting, setSetting } from '../db'
import { PageHeader, Card, Button, Chip, inputClass } from '../components/ui'
import { subjectDisplayName } from '../data/subjects'

const YEARS = ['MYP 1', 'MYP 2', 'MYP 3', 'MYP 4', 'MYP 5']

export default function Settings() {
  const [name, setName] = useState('')
  const [year, setYear] = useState('MYP 4')
  const [savedFlash, setSavedFlash] = useState(false)
  const [mySubjects, setMySubjects] = useState([])
  const [mathsLevel, setMathsLevel] = useState(null)

  useEffect(() => {
    getSetting('name', '').then(setName)
    getSetting('year', 'MYP 4').then(setYear)
    getSetting('mySubjects', []).then(setMySubjects)
    getSetting('mathsLevel', null).then(setMathsLevel)
  }, [])

  async function save() {
    await setSetting('name', name.trim())
    await setSetting('year', year)
    setSavedFlash(true)
    setTimeout(() => setSavedFlash(false), 1500)
  }

  async function clearAll() {
    if (
      !window.confirm(
        'Delete ALL your data - journal entries, milestones, ATL logs and SOI drafts? This cannot be undone.',
      )
    )
      return
    await Promise.all([
      db.soiDrafts.clear(),
      db.ppEntries.clear(),
      db.ppMilestones.clear(),
      db.atlEntries.clear(),
    ])
  }

  return (
    <div>
      <PageHeader
        title="Settings"
        subtitle="Everything is stored only on this device. No account, no cloud."
      />

      <Card>
        <label className="block text-sm font-medium text-slate-700">
          Your name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Shown on the home screen and PDF exports"
            className={`${inputClass} mt-1 font-normal`}
          />
        </label>

        <label className="mt-4 block text-sm font-medium text-slate-700">
          Current year
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={`${inputClass} mt-1 font-normal sm:w-48`}
          >
            {YEARS.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </label>

        <div className="mt-4 flex items-center gap-3">
          <Button onClick={save}>Save</Button>
          {savedFlash && (
            <span className="text-sm font-medium text-emerald-600">Saved ✓</span>
          )}
        </div>
      </Card>

      <Card className="mt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-700">
              Your subjects
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Practice, cheatsheets and mock exams are all filtered to these.
            </p>
          </div>
          <Link to="/onboarding">
            <Button variant="secondary">Edit</Button>
          </Link>
        </div>
        {mySubjects.length === 0 ? (
          <p className="mt-3 text-sm text-slate-400">
            No subjects selected yet.
          </p>
        ) : (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {mySubjects.map((id) => (
              <Chip key={id} color="indigo">
                {subjectDisplayName(id)}
                {id === 'mathematics' && mathsLevel && (
                  <span className="ml-1 opacity-70">
                    ({mathsLevel === 'extended' ? 'Extended' : 'Standard'})
                  </span>
                )}
              </Chip>
            ))}
          </div>
        )}
      </Card>

      <Card className="mt-5">
        <h2 className="text-sm font-semibold text-slate-700">Data</h2>
        <p className="mt-1 text-sm text-slate-500">
          Your data lives in this browser’s local storage (IndexedDB). Clearing
          browser data will remove it - export your Personal Project PDF
          regularly as a backup.
        </p>
        <Button variant="danger" className="mt-3 -ml-3" onClick={clearAll}>
          Delete all my data
        </Button>
      </Card>
    </div>
  )
}

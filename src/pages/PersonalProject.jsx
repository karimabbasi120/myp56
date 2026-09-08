import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { Capacitor } from '@capacitor/core'
import { db } from '../db'
import { PP_CRITERIA } from '../data/criteria'
import {
  PageHeader,
  Card,
  Chip,
  Button,
  EmptyState,
  inputClass,
  formatDate,
  todayISO,
} from '../components/ui'

export default function PersonalProject() {
  const [tab, setTab] = useState('journal')

  return (
    <div>
      <PageHeader
        title="Personal Project Companion"
        subtitle="Build your process journal as you go, tagged to the four criteria, and export it when it’s time to submit."
      />

      <div className="mb-5 flex gap-1 rounded-lg bg-slate-100 p-1">
        {[
          ['journal', 'Journal'],
          ['milestones', 'Milestones'],
          ['export', 'Export'],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              tab === id
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'journal' && <Journal />}
      {tab === 'milestones' && <Milestones />}
      {tab === 'export' && <ExportTab />}
    </div>
  )
}

/* ---------- Journal ---------- */

function Journal() {
  const [criterion, setCriterion] = useState('A')
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all')

  const entries = useLiveQuery(
    () => db.ppEntries.orderBy('date').reverse().toArray(),
    [],
  )

  const selected = PP_CRITERIA.find((c) => c.id === criterion)
  const shown =
    entries?.filter((e) => filter === 'all' || e.criterion === filter) ?? []

  async function addEntry() {
    if (!text.trim()) return
    await db.ppEntries.add({
      criterion,
      text: text.trim(),
      date: new Date().toISOString(),
    })
    setText('')
  }

  return (
    <div className="space-y-5">
      <Card>
        <h2 className="text-sm font-semibold text-slate-700">New entry</h2>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {PP_CRITERIA.map((c) => (
            <button
              key={c.id}
              onClick={() => setCriterion(c.id)}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                criterion === c.id
                  ? 'border-indigo-600 bg-indigo-50 font-medium text-indigo-800'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {c.id} · {c.name}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-400">{selected.description}</p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          placeholder={selected.prompts[Math.floor(Date.now() / 86400000) % selected.prompts.length]}
          className={`${inputClass} mt-3`}
          aria-label="Journal entry"
        />
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            Stuck? Try: “{selected.prompts[0]}”
          </p>
          <Button onClick={addEntry} disabled={!text.trim()}>
            Add entry
          </Button>
        </div>
      </Card>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-700">
            Entries {entries ? `(${shown.length})` : ''}
          </h2>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs text-slate-600"
            aria-label="Filter entries by criterion"
          >
            <option value="all">All criteria</option>
            {PP_CRITERIA.map((c) => (
              <option key={c.id} value={c.id}>
                {c.id} · {c.name}
              </option>
            ))}
          </select>
        </div>

        {shown.length === 0 ? (
          <EmptyState
            title="No journal entries yet"
            hint="Little and often beats a panic the week before the deadline. Even two sentences counts."
          />
        ) : (
          <div className="space-y-2">
            {shown.map((e) => {
              const c = PP_CRITERIA.find((x) => x.id === e.criterion)
              return (
                <Card key={e.id} className="text-sm">
                  <div className="flex items-center justify-between gap-2">
                    <Chip color={c?.color}>
                      {e.criterion} · {c?.name}
                    </Chip>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400">
                        {formatDate(e.date)}
                      </span>
                      <button
                        onClick={() => db.ppEntries.delete(e.id)}
                        className="text-xs text-slate-400 hover:text-rose-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 whitespace-pre-wrap text-slate-700">
                    {e.text}
                  </p>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

/* ---------- Milestones ---------- */

function Milestones() {
  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState(todayISO())

  const milestones = useLiveQuery(
    () => db.ppMilestones.orderBy('dueDate').toArray(),
    [],
  )

  async function addMilestone() {
    if (!title.trim() || !dueDate) return
    await db.ppMilestones.add({ title: title.trim(), dueDate, done: 0 })
    setTitle('')
  }

  const today = todayISO()

  return (
    <div className="space-y-5">
      <Card>
        <h2 className="text-sm font-semibold text-slate-700">Add milestone</h2>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Finish product research"
            className={inputClass}
            aria-label="Milestone title"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className={`${inputClass} sm:w-44`}
            aria-label="Due date"
          />
          <Button onClick={addMilestone} disabled={!title.trim()}>
            Add
          </Button>
        </div>
      </Card>

      {!milestones || milestones.length === 0 ? (
        <EmptyState
          title="No milestones yet"
          hint="Break the project into 6–10 checkpoints - research done, plan approved, first prototype…"
        />
      ) : (
        <div className="space-y-2">
          {milestones.map((m) => {
            const overdue = !m.done && m.dueDate < today
            const dueSoon =
              !m.done &&
              !overdue &&
              (new Date(m.dueDate) - new Date(today)) / 86400000 <= 7
            return (
              <Card
                key={m.id}
                className={`flex items-center gap-3 text-sm ${overdue ? 'border-rose-200 bg-rose-50/50' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={!!m.done}
                  onChange={() =>
                    db.ppMilestones.update(m.id, { done: m.done ? 0 : 1 })
                  }
                  className="h-4 w-4 accent-indigo-600"
                  aria-label={`Mark ${m.title} as done`}
                />
                <span
                  className={`flex-1 ${m.done ? 'text-slate-400 line-through' : 'text-slate-700'}`}
                >
                  {m.title}
                </span>
                {overdue && <Chip color="rose">Overdue</Chip>}
                {dueSoon && <Chip color="amber">Due soon</Chip>}
                <span className="text-xs text-slate-400">
                  {formatDate(m.dueDate)}
                </span>
                <button
                  onClick={() => db.ppMilestones.delete(m.id)}
                  className="text-xs text-slate-400 hover:text-rose-600"
                >
                  Delete
                </button>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}

/* ---------- Export ---------- */

function ExportTab() {
  const entries = useLiveQuery(() => db.ppEntries.orderBy('date').toArray(), [])
  const milestones = useLiveQuery(
    () => db.ppMilestones.orderBy('dueDate').toArray(),
    [],
  )
  const [studentName, setStudentName] = useState('')

  async function exportPDF() {
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()
    const pageW = doc.internal.pageSize.getWidth()
    const pageH = doc.internal.pageSize.getHeight()
    const margin = 18
    const maxW = pageW - margin * 2
    let y = margin

    const ensureSpace = (needed) => {
      if (y + needed > pageH - margin) {
        doc.addPage()
        y = margin
      }
    }

    // Title page header
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(20)
    doc.text('Personal Project - Process Journal', margin, y)
    y += 9
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(11)
    if (studentName.trim()) {
      doc.text(studentName.trim(), margin, y)
      y += 6
    }
    doc.setTextColor(120)
    doc.text(
      `Exported ${new Date().toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })} · ${entries?.length ?? 0} entries`,
      margin,
      y,
    )
    doc.setTextColor(0)
    y += 12

    // Entries grouped by criterion
    for (const c of PP_CRITERIA) {
      const group = (entries ?? []).filter((e) => e.criterion === c.id)
      if (group.length === 0) continue

      ensureSpace(20)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(14)
      doc.text(`Criterion ${c.id}: ${c.name}`, margin, y)
      y += 7

      for (const e of group) {
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(10)
        ensureSpace(14)
        doc.text(formatDate(e.date), margin, y)
        y += 5
        doc.setFont('helvetica', 'normal')
        const lines = doc.splitTextToSize(e.text, maxW)
        for (const line of lines) {
          ensureSpace(6)
          doc.text(line, margin, y)
          y += 5
        }
        y += 4
      }
      y += 4
    }

    // Milestones appendix
    if ((milestones ?? []).length > 0) {
      ensureSpace(20)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(14)
      doc.text('Milestones', margin, y)
      y += 7
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(10)
      for (const m of milestones) {
        ensureSpace(6)
        doc.text(
          `${m.done ? '[x]' : '[ ]'}  ${m.title} - due ${formatDate(m.dueDate)}`,
          margin,
          y,
        )
        y += 5.5
      }
    }

    const fileName = 'personal-project-journal.pdf'
    if (Capacitor.isNativePlatform()) {
      // In the native app, jsPDF's browser download does nothing, so write the
      // file to disk and open the system share sheet (Save to Files, Print…).
      const dataUri = doc.output('datauristring')
      const base64 = dataUri.substring(dataUri.indexOf(',') + 1)
      const { Filesystem, Directory } = await import('@capacitor/filesystem')
      const { Share } = await import('@capacitor/share')
      await Filesystem.writeFile({
        path: fileName,
        data: base64,
        directory: Directory.Cache,
      })
      const { uri } = await Filesystem.getUri({
        path: fileName,
        directory: Directory.Cache,
      })
      await Share.share({
        title: 'Personal Project journal',
        url: uri,
        dialogTitle: 'Save or share your journal',
      })
    } else {
      doc.save(fileName)
    }
  }

  const count = entries?.length ?? 0

  return (
    <Card>
      <h2 className="text-sm font-semibold text-slate-700">
        Export process journal as PDF
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        Compiles all {count} journal entr{count === 1 ? 'y' : 'ies'}, grouped by
        criterion and in date order, plus your milestone list - ready to hand to
        your supervisor.
      </p>
      <input
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Your name (appears on the cover)"
        className={`${inputClass} mt-4 sm:w-80`}
        aria-label="Student name"
      />
      <div className="mt-4">
        <Button onClick={exportPDF} disabled={count === 0}>
          Download PDF
        </Button>
        {count === 0 && (
          <p className="mt-2 text-xs text-slate-400">
            Add at least one journal entry first.
          </p>
        )}
      </div>
    </Card>
  )
}

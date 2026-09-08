// Small shared UI primitives, kept in one file for simplicity.

export function PageHeader({ title, subtitle }) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h1>
      {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
    </header>
  )
}

export function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm ${className}`}
    >
      {children}
    </div>
  )
}

export function EmptyState({ title, hint }) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-white/50 p-8 text-center">
      <p className="font-medium text-slate-600">{title}</p>
      {hint && <p className="mt-1 text-sm text-slate-400">{hint}</p>}
    </div>
  )
}

// Tailwind can't see dynamically-built class names, so color variants are
// spelled out in full here.
const CHIP_COLORS = {
  slate: 'bg-slate-100 text-slate-700',
  sky: 'bg-sky-100 text-sky-800',
  violet: 'bg-violet-100 text-violet-800',
  amber: 'bg-amber-100 text-amber-800',
  emerald: 'bg-emerald-100 text-emerald-800',
  rose: 'bg-rose-100 text-rose-800',
  indigo: 'bg-indigo-100 text-indigo-800',
}

export function Chip({ color = 'slate', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${CHIP_COLORS[color]}`}
    >
      {children}
    </span>
  )
}

export function Button({ variant = 'primary', className = '', ...props }) {
  const styles = {
    primary:
      'bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-slate-300',
    secondary:
      'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50',
    danger: 'text-rose-600 hover:bg-rose-50',
  }
  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed ${styles[variant]} ${className}`}
      {...props}
    />
  )
}

export const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'

export function formatDate(iso) {
  if (!iso) return ''
  return new Date(iso + (iso.length === 10 ? 'T00:00:00' : '')).toLocaleDateString(
    undefined,
    { day: 'numeric', month: 'short', year: 'numeric' },
  )
}

export function todayISO() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

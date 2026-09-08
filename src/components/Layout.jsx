import { useCallback, useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { getSetting } from '../db'
import Onboarding from '../pages/Onboarding'

// Full list for the desktop sidebar.
const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/practice', label: 'Practice Centre', icon: TargetIcon },
  { to: '/mocks', label: 'Mock Exams', icon: ExamIcon },
  { to: '/cheatsheets', label: 'Cheatsheets', icon: NotesIcon },
  { to: '/command-terms', label: 'Command Terms', icon: BookIcon },
  { to: '/soi-builder', label: 'SOI Builder', icon: WandIcon },
  { to: '/personal-project', label: 'Personal Project', icon: FolderIcon },
  { to: '/atl-tracker', label: 'ATL Skills', icon: SparkIcon },
  { to: '/criterion-check', label: 'Criterion Check', icon: CheckIcon },
  { to: '/settings', label: 'Settings', icon: GearIcon },
]

// Curated set for the mobile bottom bar; everything else lives under "More".
// Mock Exams gets its own tab despite being iPad/Mac-only content, because the
// sidebar's lg breakpoint (1024pt) is wider than the smallest screen that can
// actually run mocks (744pt) - on an iPad in that gap (e.g. iPad A16 at 820pt),
// burying an already-available feature under "More" would be misleading.
const MOBILE_NAV = [
  { to: '/', short: 'Home', icon: HomeIcon },
  { to: '/practice', short: 'Quiz', icon: TargetIcon },
  { to: '/mocks', short: 'Mocks', icon: ExamIcon },
  { to: '/cheatsheets', short: 'Notes', icon: NotesIcon },
  { to: '/command-terms', short: 'Terms', icon: BookIcon },
  { to: '/more', short: 'More', icon: MenuIcon },
]

// Routes reached from the "More" menu - keep "More" highlighted while on them.
const MORE_PATHS = [
  '/more',
  '/soi-builder',
  '/personal-project',
  '/atl-tracker',
  '/criterion-check',
  '/settings',
]

export default function Layout() {
  const { pathname } = useLocation()
  const moreActive = MORE_PATHS.includes(pathname)

  // First run: the student must choose subjects before anything else, since
  // practice, cheatsheets and mocks all filter off those choices. This renders
  // the picker in place rather than redirecting, because a navigate() on mount
  // is not reliable inside the native WebView.
  const [needsSetup, setNeedsSetup] = useState(null) // null = still checking

  const checkSetup = useCallback(() => {
    let cancelled = false
    getSetting('onboarded', false)
      .then((done) => {
        if (!cancelled) setNeedsSetup(!done)
      })
      .catch(() => {
        // If settings can't be read, don't trap the student on the picker.
        if (!cancelled) setNeedsSetup(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => checkSetup(), [checkSetup])

  // Wait for the check so the app never flashes the wrong screen.
  if (needsSetup === null) return null

  if (needsSetup && pathname !== '/onboarding') {
    return (
      <main className="min-h-screen">
        <div className="mx-auto w-full max-w-3xl px-4 pb-6 pt-[max(1.5rem,env(safe-area-inset-top))] lg:max-w-4xl lg:px-8 lg:py-6">
          <Onboarding onComplete={checkSetup} hideChrome />
        </div>
      </main>
    )
  }

  return (
    <div className="min-h-screen lg:flex">
      {/* Sidebar. Only shown from lg upwards: on narrower iPads a permanent
          240px column leaves too little room for exam content, so those sizes
          use the bottom tab bar and get the full width instead. */}
      <aside className="hidden w-56 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
        <div className="px-5 py-5">
          <p className="text-lg font-semibold tracking-tight text-slate-900">
            MYP 56
          </p>
          <p className="text-xs text-slate-400">Aim for the full 56</p>
        </div>
        <nav className="flex-1 space-y-1 px-3">
          {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              <Icon className="h-4.5 w-4.5" />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content. min-w-0 is essential: without it this flex item refuses
          to shrink below its content's intrinsic width, so on narrower iPads
          the page overflows horizontally and the right edge gets cut off. */}
      <main className="min-w-0 flex-1 pb-24 lg:pb-8">
        <div className="mx-auto w-full max-w-3xl px-4 pb-6 pt-[max(1.5rem,env(safe-area-inset-top))] lg:max-w-4xl lg:px-8 lg:py-6">
          <Outlet />
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white/95 backdrop-blur lg:hidden">
        <div className="grid grid-cols-6">
          {MOBILE_NAV.map(({ to, short, icon: Icon }) => {
            const active =
              to === '/more' ? moreActive : pathname === to
            return (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={`flex flex-col items-center gap-0.5 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] text-[10px] font-medium ${
                  active ? 'text-indigo-600' : 'text-slate-400'
                }`}
              >
                <Icon className="h-5.5 w-5.5" />
                {short}
              </NavLink>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

function HomeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  )
}
function TargetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  )
}
function BookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z" />
      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
    </svg>
  )
}
function WandIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m5 19 10-10" />
      <path d="M15 5.5 16.5 4M18 9l1.5-1.5M12.5 4.5 13 3M19 13l1.5.5" />
    </svg>
  )
}
function FolderIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  )
}
function SparkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  )
}
function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </svg>
  )
}
function GearIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.5-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.5 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.5 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.5-2-1.5c.1-.4.1-.8.1-1.2z" />
    </svg>
  )
}
function NotesIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5" />
      <path d="M8.5 13h7M8.5 17h7" />
    </svg>
  )
}
function ExamIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 4h11l3 3v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
      <path d="M8 11h8M8 15h5" />
      <circle cx="17" cy="16.5" r="3.2" />
      <path d="m15.7 16.5 1 1 1.8-2" />
    </svg>
  )
}
function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

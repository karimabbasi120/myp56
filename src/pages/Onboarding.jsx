import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SUBJECT_MODEL } from '../data/subjects'
import { getSetting, setSetting } from '../db'
import { Button } from '../components/ui'

// Rendered both as a route (from More > My Subjects) and directly by Layout on
// first run. `onComplete` lets Layout re-check without a navigation.
export default function Onboarding({ onComplete, hideChrome = false }) {
  const navigate = useNavigate()
  const [selected, setSelected] = useState([])
  const [mathsLevel, setMathsLevel] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    Promise.all([
      getSetting('mySubjects', []),
      getSetting('mathsLevel', null),
    ]).then(([subs, lvl]) => {
      if (Array.isArray(subs)) setSelected(subs)
      setMathsLevel(lvl)
      setLoaded(true)
    })
  }, [])

  function toggle(id) {
    const group = SUBJECT_MODEL.find((g) => g.subjects.some((s) => s.id === id))
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((s) => s !== id)
      // In an exclusive group (Language Acquisition) only one subject may be
      // chosen, so selecting one deselects its siblings.
      if (group?.exclusive) {
        const siblings = group.subjects.map((s) => s.id)
        return [...prev.filter((s) => !siblings.includes(s)), id]
      }
      return [...prev, id]
    })
    // Picking Mathematics without a level yet defaults to Standard.
    if (id === 'mathematics' && !selected.includes(id) && !mathsLevel) {
      setMathsLevel('standard')
    }
  }

  async function complete() {
    await setSetting('mySubjects', selected)
    await setSetting('mathsLevel', selected.includes('mathematics') ? mathsLevel ?? 'standard' : null)
    await setSetting('onboarded', true)
    if (onComplete) onComplete()
    else navigate('/')
  }

  if (!loaded) return null

  const mathsChosen = selected.includes('mathematics')

  return (
    <div className="pb-40 md:pb-28">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Which MYP subjects are you taking?
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Tap a subject to add it. We’ll tailor your practice, cheatsheets and
          mocks to just these.
        </p>
      </header>

      <div className="space-y-6">
        {SUBJECT_MODEL.map((g) => (
          <section key={g.group}>
            <h2 className="text-sm font-semibold text-slate-700">
              {g.groupName}
            </h2>
            <p className="mb-2 text-xs text-slate-400">{g.blurb}</p>
            <div className="flex flex-wrap gap-2">
              {g.subjects.map((s) => {
                const on = selected.includes(s.id)
                return (
                  <button
                    key={s.id}
                    onClick={() => toggle(s.id)}
                    aria-pressed={on}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      on
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {s.name}
                    {s.id === 'mathematics' && on && mathsLevel && (
                      <span className="ml-2 text-xs font-normal text-slate-300">
                        {mathsLevel === 'extended' ? 'Extended' : 'Standard'}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Maths level picker appears once Mathematics is selected. */}
            {g.levelled && mathsChosen && (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500">Level:</span>
                {g.levels.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setMathsLevel(l.id)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                      mathsLevel === l.id
                        ? 'border-indigo-600 bg-indigo-50 font-medium text-indigo-800'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Sticky footer action. With the app chrome visible it must clear the
          bottom tab bar, otherwise the tab bar covers the button and swallows
          taps. On first run there is no chrome, so it sits flush. */}
      <div
        className={`fixed inset-x-0 border-t border-slate-200 bg-white/95 p-4 backdrop-blur ${
          hideChrome
            ? 'bottom-0 pb-[max(1rem,env(safe-area-inset-bottom))]'
            : 'bottom-[3.75rem] lg:bottom-0 lg:left-56 lg:pb-[max(1rem,env(safe-area-inset-bottom))]'
        }`}
      >
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <p className="flex-1 text-xs text-slate-500">
            {selected.length === 0
              ? 'Select at least one subject.'
              : `${selected.length} subject${selected.length === 1 ? '' : 's'} selected`}
          </p>
          <Button onClick={complete} disabled={selected.length === 0}>
            Complete setup
          </Button>
        </div>
      </div>
    </div>
  )
}

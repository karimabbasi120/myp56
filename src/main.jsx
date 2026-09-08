import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import CommandTerms from './pages/CommandTerms'
import SOIBuilder from './pages/SOIBuilder'
import PersonalProject from './pages/PersonalProject'
import ATLTracker from './pages/ATLTracker'
import CriterionCheck from './pages/CriterionCheck'
import Practice from './pages/Practice'
import Cheatsheets from './pages/Cheatsheets'
import Mocks from './pages/Mocks'
import More from './pages/More'
import Onboarding from './pages/Onboarding'
import Settings from './pages/Settings'

// Hash-based routing works everywhere: static hosting, subpaths, and inside
// the Capacitor native shell where the app loads from a local file scheme.
const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/practice', element: <Practice /> },
      { path: '/mocks', element: <Mocks /> },
      { path: '/cheatsheets', element: <Cheatsheets /> },
      { path: '/onboarding', element: <Onboarding /> },
      { path: '/command-terms', element: <CommandTerms /> },
      { path: '/soi-builder', element: <SOIBuilder /> },
      { path: '/personal-project', element: <PersonalProject /> },
      { path: '/atl-tracker', element: <ATLTracker /> },
      { path: '/criterion-check', element: <CriterionCheck /> },
      { path: '/more', element: <More /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'
import ProjectDetail from './pages/ProjectDetail'
import Hire from './pages/Hire'
import { useScrollReveal } from './lib/useScrollReveal'

export default function App() {
  const { pathname } = useLocation()
  useScrollReveal()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToHash />
      <Header />
      {/* Keyed by path so each page fades in on navigation (hash jumps don't re-trigger it) */}
      <main key={pathname} className="flex-1 animate-page-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<AllProjects />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/hire" element={<Hire />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

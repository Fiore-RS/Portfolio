import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'
import ProjectDetail from './pages/ProjectDetail'
import Hire from './pages/Hire'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToHash />
      <Header />
      <main className="flex-1">
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

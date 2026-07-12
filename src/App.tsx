import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<AllProjects />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Hours from './pages/Hours'
import SupportUs from './pages/SupportUs'
import HMO from './pages/HMO'
import Apply from './pages/Apply'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="page-enter">
      <Routes location={location}>
        <Route path="/"        element={<Home />} />
        <Route path="/about"   element={<About />} />
        <Route path="/hours"   element={<Hours />} />
        <Route path="/support" element={<SupportUs />} />
        <Route path="/hmo"     element={<HMO />} />
        <Route path="/apply"   element={<Apply />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Nav />
      <AnimatedRoutes />
      <Footer />
    </HashRouter>
  )
}

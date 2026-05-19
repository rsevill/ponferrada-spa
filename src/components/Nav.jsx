import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const links = [
  { to: '/',        label: 'Home',      end: true },
  { to: '/about',   label: 'About',     end: false },
  { to: '/hours',   label: 'Hours',     end: false },
  { to: '/support', label: 'Support Us',end: false },
  { to: '/hmo',     label: 'HMO',       end: false },
]

export default function Nav() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const close = e => { if (!e.target.closest('.nav-inner')) setOpen(false) }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav-inner">
          <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
            <img src="/pphi-logo.jpg" alt="PPHI Logo" className="nav-logo-img" />
            <div className="nav-logo-text">
              <strong>PONFERRADA POLYMEDIC</strong>
              <span>Hospital, Inc.</span>
            </div>
          </NavLink>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <ul>
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) => 'mob-link' + (isActive ? ' active' : '')}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

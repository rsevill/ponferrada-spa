import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useReveal } from '../hooks/useReveal'
import './Doctors.css'

const doctors = [
  {
    name: 'Dr. Socorro D. Ponferrada',
    specialization: 'Internal Medicine',
    schedule: 'M–F  8:00 AM – 5:00 PM',
    room: 'RM 1',
    contact: '09175117707',
    tin: '918-793-122',
    note: 'PCP Member',
    status: 'Available',
  },
  {
    name: 'Dr. Ida C. Lucero',
    specialization: 'Anesthesiologist',
    schedule: 'SAT  8:00 AM – 5:00 PM',
    room: 'RM 3',
    contact: '09177201891',
    tin: '178-331-018',
    note: '—',
    status: '—',
  },
  {
    name: 'Dr. Miguel Ian E. Gabrino',
    specialization: 'General Physician',
    schedule: 'M–S  8:00 AM – 5:00 AM',
    room: 'ER',
    contact: '09171609302',
    tin: '740-340-266',
    note: '—',
    status: '—',
  },
  // Add more doctors here when data is available
]

const GRADIENTS = [
  ['#0B4375', '#00A4A6'],
  ['#0d5a90', '#0a7a7c'],
  ['#00616c', '#0B4375'],
  ['#1565a0', '#00A4A6'],
  ['#0a3d62', '#0d5a90'],
  ['#006064', '#0B4375'],
  ['#00838f', '#1565a0'],
]

function getInitials(name) {
  const parts = name.replace(/^Dr\.\s*/, '').split(/\s+/)
  const first = parts[0]?.[0] || ''
  const last  = parts[parts.length - 1]?.[0] || ''
  return (first + last).toUpperCase()
}

export default function Doctors() {
  const ref = useReveal()
  const [search, setSearch]         = useState('')
  const [specFilter, setSpecFilter] = useState('')
  const [selected, setSelected]     = useState(null)

  const specializations = [...new Set(doctors.map(d => d.specialization))]

  const filtered = doctors.filter(d => {
    const matchName = d.name.toLowerCase().includes(search.toLowerCase())
    const matchSpec = !specFilter || d.specialization === specFilter
    return matchName && matchSpec
  })

  const close = () => setSelected(null)

  return (
    <main ref={ref} className="doctors">

      {/* ── HERO ── */}
      <div className="doc-hero">
        <div className="doc-hero-bg" />
        <div className="doc-hero-content reveal">
          <span className="section-tag section-tag--light">Medical Staff</span>
          <h1>Doctor <em>Directory</em></h1>
          <p>Find our physicians, their specializations, schedules, and contact information.</p>
        </div>
      </div>

      {/* ── DIRECTORY ── */}
      <section className="doc-section">
        <div className="doc-inner">

          <div className="doc-controls reveal">
            <input
              className="doc-search"
              type="search"
              placeholder="Search by name…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <select
              className="doc-filter"
              value={specFilter}
              onChange={e => setSpecFilter(e.target.value)}
            >
              <option value="">All Specializations</option>
              {specializations.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <p className="doc-count reveal">
            {filtered.length} doctor{filtered.length !== 1 ? 's' : ''}
          </p>

          <div className="doc-grid">
            {filtered.map((d, i) => {
              const [c1, c2] = GRADIENTS[i % GRADIENTS.length]
              return (
                <button
                  key={d.name}
                  className="doc-card reveal"
                  style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
                  onClick={() => setSelected({ ...d, gi: i })}
                >
                  <div
                    className="doc-avatar"
                    style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
                  >
                    {getInitials(d.name)}
                  </div>
                  <h3>{d.name}</h3>
                  <span className="doc-spec">{d.specialization}</span>
                  {d.status === 'Available' && (
                    <span className="doc-badge">Available</span>
                  )}
                </button>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── MODAL ── */}
      {selected && createPortal(
        <div className="doc-overlay" onClick={close}>
          <div className="doc-modal" onClick={e => e.stopPropagation()}>
            <button className="doc-modal-close" onClick={close} aria-label="Close">×</button>

            <div className="doc-modal-head">
              <div
                className="doc-modal-avatar"
                style={{ background: `linear-gradient(135deg, ${GRADIENTS[selected.gi % GRADIENTS.length][0]}, ${GRADIENTS[selected.gi % GRADIENTS.length][1]})` }}
              >
                {getInitials(selected.name)}
              </div>
              <div>
                <h2>{selected.name}</h2>
                <span className="doc-spec">{selected.specialization}</span>
              </div>
            </div>

            <div className="doc-modal-grid">
              {[
                ['Schedule', selected.schedule],
                ['Room',     selected.room],
                ['Contact',  selected.contact],
                ['TIN',      selected.tin],
                ['Note',     selected.note],
                ['Status',   selected.status],
              ].map(([label, value]) => (
                <div key={label} className="doc-modal-cell">
                  <span className="doc-modal-label">{label}</span>
                  <span className={`doc-modal-value${label === 'Status' && value === 'Available' ? ' doc-available' : ''}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}

    </main>
  )
}

import { useState, useMemo } from 'react'
import { useReveal } from '../hooks/useReveal'
import './HMO.css'

const hmoProviders = [
  { logo: '/hmo/intellicare.png', name: 'Intellicare',           tagline: 'Your Intelligent Health Choice'    },
  { logo: '/hmo/ims.png',         name: 'IMS Wellth Care, Inc.', tagline: 'Integrated Medical Solutions'      },
  { logo: '/hmo/avega.avif',      name: 'AVEGA',                 tagline: 'Leading Edge Healthcare Solutions' },
  { logo: '/hmo/kaiser.png',      name: 'Kaiser International',  tagline: 'International Health Coverage'     },
]

const doctors = [
  { id: 1,  name: 'Dr. Socorro D. Ponferrada',   spec: 'Internal Medicine',  schedule: 'Mon–Fri  8AM–5PM', room: 'Room 1', contact: '09175117707', note: 'PCP Member',   status: 'Available'       },
  { id: 2,  name: 'Dr. Gil E. Ponferrada',        spec: 'Pediatrician',       schedule: 'Mon–Fri  8AM–5PM', room: 'Room 2', contact: '09193223979', note: 'PPPS Member',  status: 'Available'       },
  { id: 3,  name: 'Dr. Jay Stephen C. Cantay',    spec: 'General Surgeon',    schedule: 'Mon–Sat  8AM–5PM', room: 'ER',     contact: '09208028062', note: '—',            status: 'On call'         },
  { id: 4,  name: 'Dr. Mary Antoinette D. Cui',   spec: 'OB/GYN',             schedule: 'Mon–Sat  8AM–5PM', room: 'Room 4', contact: '09176253330', note: '—',            status: 'Available'       },
  { id: 5,  name: 'Dr. Elvira C. Lanuevo',        spec: 'ENT',                schedule: 'Saturday 8AM–5PM', room: 'Room 4', contact: '09062269377', note: '—',            status: 'Saturday clinic' },
  { id: 6,  name: 'Dr. Ida C. Lucero',            spec: 'Anesthesiologist',   schedule: 'Saturday 8AM–5PM', room: 'Room 3', contact: '09177201891', note: '—',            status: 'Saturday clinic' },
  { id: 7,  name: 'Dr. Miguel Ian E. Gabrino',    spec: 'General Physician',  schedule: 'Mon–Sat  8AM–5PM', room: 'ER',     contact: '09171609302', note: '—',            status: 'Morning duty'    },
  { id: 8,  name: 'Dr. Kristine Jean E. Firmo',   spec: 'General Physician',  schedule: 'Mon–Sat  8AM–5PM', room: 'ER',     contact: '09778176801', note: '—',            status: 'Morning duty'    },
  { id: 9,  name: 'Dr. Audrey Rose L. Cenera',    spec: 'General Physician',  schedule: 'Mon–Sat  8AM–5PM', room: 'ER',     contact: '09954488994', note: '—',            status: 'Available'       },
]

function getInitials(name) {
  return name
    .replace(/^Dr\.\s*/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(p => p[0])
    .join('')
    .toUpperCase()
}

function statusClass(status) {
  if (status === 'Available')        return 'status-available'
  if (status === 'On call')          return 'status-oncall'
  if (status === 'Saturday clinic')  return 'status-saturday'
  return 'status-other'
}

export default function HMO() {
  const ref = useReveal()
  const [query,   setQuery]   = useState('')
  const [specFilter, setSpec] = useState('all')
  const [selected, setSelected] = useState(null)

  const specializations = useMemo(
    () => [...new Set(doctors.map(d => d.spec))].sort(),
    []
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return doctors.filter(d => {
      const matchSpec = specFilter === 'all' || d.spec === specFilter
      const matchQuery = !q || [d.name, d.spec, d.schedule, d.room, d.contact, d.note, d.status]
        .join(' ').toLowerCase().includes(q)
      return matchSpec && matchQuery
    })
  }, [query, specFilter])

  return (
    <main ref={ref} className="hmo">

      {/* ── PAGE HERO ── */}
      <div className="hmo-hero">
        <div className="hmo-hero-bg" />
        <div className="hmo-hero-content reveal">
          <span className="section-tag section-tag--light">Hospital Directory</span>
          <h1>Doctor <em>Directory</em></h1>
          <p>Find specialists, check schedules, and learn about the physicians serving our community.</p>
        </div>
      </div>

      {/* ── HMO PROVIDERS ── */}
      <section className="hmo-providers-section">
        <div className="hmo-providers-inner">
          <div className="hmo-providers-header reveal">
            <span className="section-tag">Insurance</span>
            <h2>Accepted <em>HMO Providers</em></h2>
            <p>We accept the following health maintenance organizations. Bring your HMO card on your visit.</p>
          </div>
          <div className="hmo-providers-grid">
            {hmoProviders.map((p, i) => (
              <div key={i} className="hmo-provider-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="hmo-provider-logo-wrap">
                  <img src={p.logo} alt={p.name} className="hmo-provider-logo" />
                </div>
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECTORY ── */}
      <section className="hmo-dir">
        <div className="hmo-dir-inner">

          {/* Toolbar */}
          <div className="hmo-toolbar reveal">
            <div className="hmo-search-box">
              <label htmlFor="hmo-search" className="hmo-search-label">Search Doctors</label>
              <div className="hmo-search-wrap">
                <span className="hmo-search-icon">🔍</span>
                <input
                  id="hmo-search"
                  type="text"
                  placeholder="Name, specialization, room, contact…"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="hmo-filter-box">
              <label htmlFor="hmo-spec" className="hmo-search-label">Specialization</label>
              <select id="hmo-spec" value={specFilter} onChange={e => setSpec(e.target.value)}>
                <option value="all">All Specializations</option>
                {specializations.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="hmo-table-wrap reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="hmo-table-header">
              <strong>{filtered.length} {filtered.length === 1 ? 'doctor' : 'doctors'}</strong>
            </div>
            <div className="hmo-table-scroll">
              <table className="hmo-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Specialization</th>
                    <th>Schedule / Room</th>
                    <th>Note</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="hmo-empty">No doctors match your search.</td>
                    </tr>
                  ) : (
                    filtered.map(d => (
                      <tr key={d.id}>
                        <td>
                          <button className="hmo-name-btn" onClick={() => setSelected(d)}>
                            {d.name}
                          </button>
                        </td>
                        <td>{d.spec}</td>
                        <td className="hmo-schedule">{d.schedule}&nbsp;&nbsp;{d.room}</td>
                        <td>
                          {d.note !== '—' ? <span className="hmo-badge">{d.note}</span> : <span className="hmo-dash">—</span>}
                        </td>
                        <td>
                          <span className={`hmo-status ${statusClass(d.status)}`}>{d.status}</span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {selected && (
        <div
          className="hmo-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`Doctor profile: ${selected.name}`}
          onClick={e => { if (e.target === e.currentTarget) setSelected(null) }}
        >
          <div className="hmo-modal">
            <button
              className="hmo-close"
              aria-label="Close"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <div className="hmo-modal-head">
              <div className="hmo-avatar">
                <span>{getInitials(selected.name)}</span>
              </div>
              <div>
                <h2>{selected.name}</h2>
                <p className="hmo-modal-spec">{selected.spec}</p>
                <span className={`hmo-status ${statusClass(selected.status)}`}>{selected.status}</span>
              </div>
            </div>

            <dl className="hmo-detail-grid">
              <div className="hmo-detail-item">
                <dt>Schedule</dt>
                <dd>{selected.schedule}</dd>
              </div>
              <div className="hmo-detail-item">
                <dt>Room</dt>
                <dd>{selected.room}</dd>
              </div>
              <div className="hmo-detail-item">
                <dt>Note</dt>
                <dd>{selected.note}</dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </main>
  )
}

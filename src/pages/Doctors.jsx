import { useState, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { useReveal } from '../hooks/useReveal'
import './Doctors.css'

const doctors = [
  { id: 1, name: 'Dr. Socorro D. Ponferrada',  spec: 'Internal Medicine', schedule: 'Mon–Fri  8AM–5PM', room: 'Room 1', contact: '09175117707', note: 'PCP Member',  status: 'Available'       },
  { id: 2, name: 'Dr. Gil E. Ponferrada',       spec: 'Pediatrician',      schedule: 'Mon–Fri  8AM–5PM', room: 'Room 2', contact: '09193223979', note: 'PPPS Member', status: 'Available'       },
  { id: 3, name: 'Dr. Jay Stephen C. Cantay',   spec: 'General Surgeon',   schedule: 'Mon–Sat  8AM–5PM', room: 'ER',     contact: '09208028062', note: '—',           status: 'On call'         },
  { id: 4, name: 'Dr. Mary Antoinette D. Cui',  spec: 'OB/GYN',            schedule: 'Mon–Sat  8AM–5PM', room: 'Room 4', contact: '09176253330', note: '—',           status: 'Available'       },
  { id: 5, name: 'Dr. Elvira C. Lanuevo',       spec: 'ENT',               schedule: 'Saturday 8AM–5PM', room: 'Room 4', contact: '09062269377', note: '—',           status: 'Saturday clinic' },
  { id: 6, name: 'Dr. Ida C. Lucero',           spec: 'Anesthesiologist',  schedule: 'Saturday 8AM–5PM', room: 'Room 3', contact: '09177201891', note: '—',           status: 'Saturday clinic' },
  { id: 7, name: 'Dr. Miguel Ian E. Gabrino',   spec: 'General Physician', schedule: 'Mon–Sat  8AM–5PM', room: 'ER',     contact: '09171609302', note: '—',           status: 'Morning duty'    },
  { id: 8, name: 'Dr. Kristine Jean E. Firmo',  spec: 'General Physician', schedule: 'Mon–Sat  8AM–5PM', room: 'ER',     contact: '09778176801', note: '—',           status: 'Morning duty'    },
  { id: 9, name: 'Dr. Audrey Rose L. Cenera',   spec: 'General Physician', schedule: 'Mon–Sat  8AM–5PM', room: 'ER',     contact: '09954488994', note: '—',           status: 'Available'       },
]

function getInitials(name) {
  return name.replace(/^Dr\.\s*/i, '').split(' ').filter(Boolean)
    .slice(0, 2).map(p => p[0]).join('').toUpperCase()
}

function statusClass(s) {
  if (s === 'Available')       return 'status-available'
  if (s === 'On call')         return 'status-oncall'
  if (s === 'Saturday clinic') return 'status-saturday'
  return 'status-other'
}

export default function Doctors() {
  const ref = useReveal()
  const [query, setQuery]       = useState('')
  const [specFilter, setSpec]   = useState('all')
  const [selected, setSelected] = useState(null)

  const specializations = useMemo(
    () => [...new Set(doctors.map(d => d.spec))].sort(),
    []
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return doctors.filter(d => {
      const matchSpec  = specFilter === 'all' || d.spec === specFilter
      const matchQuery = !q || [d.name, d.spec, d.schedule, d.room, d.contact, d.note, d.status]
        .join(' ').toLowerCase().includes(q)
      return matchSpec && matchQuery
    })
  }, [query, specFilter])

  return (
    <main ref={ref} className="doctors">

      {/* ── HERO ── */}
      <div className="doc-hero">
        <div className="doc-hero-bg" />
        <div className="doc-hero-content reveal">
          <span className="section-tag section-tag--light">Hospital Directory</span>
          <h1>Doctor <em>Directory</em></h1>
          <p>Find specialists, check schedules, and learn about the physicians serving our community.</p>
        </div>
      </div>

      {/* ── DIRECTORY ── */}
      <section className="doc-dir">
        <div className="doc-dir-inner">

          <div className="doc-toolbar reveal">
            <div className="doc-search-box">
              <label htmlFor="doc-search" className="doc-label">Search Doctors</label>
              <div className="doc-search-wrap">
                <span className="doc-search-icon">🔍</span>
                <input
                  id="doc-search" type="text"
                  placeholder="Name, specialization, room, contact…"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="doc-filter-box">
              <label htmlFor="doc-spec" className="doc-label">Specialization</label>
              <select id="doc-spec" value={specFilter} onChange={e => setSpec(e.target.value)}>
                <option value="all">All Specializations</option>
                {specializations.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="doc-table-wrap reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="doc-table-header">
              <strong>{filtered.length} {filtered.length === 1 ? 'doctor' : 'doctors'}</strong>
            </div>
            <div className="doc-table-scroll">
              <table className="doc-table">
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
                    <tr><td colSpan={5} className="doc-empty">No doctors match your search.</td></tr>
                  ) : filtered.map(d => (
                    <tr key={d.id}>
                      <td>
                        <button className="doc-name-btn" onClick={() => setSelected(d)}>
                          {d.name}
                        </button>
                      </td>
                      <td>{d.spec}</td>
                      <td className="doc-schedule">{d.schedule}&nbsp;&nbsp;{d.room}</td>
                      <td>
                        {d.note !== '—'
                          ? <span className="doc-badge">{d.note}</span>
                          : <span className="doc-dash">—</span>}
                      </td>
                      <td>
                        <span className={`doc-status ${statusClass(d.status)}`}>{d.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ── MODAL ── */}
      {selected && createPortal(
        <div
          className="doc-backdrop"
          role="dialog" aria-modal="true"
          onClick={e => { if (e.target === e.currentTarget) setSelected(null) }}
        >
          <div className="doc-modal">
            <button className="doc-close" aria-label="Close" onClick={() => setSelected(null)}>×</button>

            <div className="doc-modal-head">
              <div className="doc-avatar"><span>{getInitials(selected.name)}</span></div>
              <div>
                <h2>{selected.name}</h2>
                <p className="doc-modal-spec">{selected.spec}</p>
                <span className={`doc-status ${statusClass(selected.status)}`}>{selected.status}</span>
              </div>
            </div>

            <dl className="doc-detail-grid">
              <div className="doc-detail-item"><dt>Schedule</dt><dd>{selected.schedule}</dd></div>
              <div className="doc-detail-item"><dt>Room</dt><dd>{selected.room}</dd></div>
              <div className="doc-detail-item"><dt>Contact</dt><dd>{selected.contact}</dd></div>
              <div className="doc-detail-item"><dt>Note</dt><dd>{selected.note}</dd></div>
            </dl>
          </div>
        </div>,
        document.body
      )}

    </main>
  )
}

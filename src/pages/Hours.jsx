import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import './Hours.css'

const schedule = [
  {
    day: 'Monday – Friday',
    sub: 'Regular weekdays',
    time: '8:00 AM – 4:00 PM',
    badge: 'Open',
    badgeClass: 'badge-open',
    icon: '📅',
    iconClass: 'sch-weekday',
  },
  {
    day: 'Saturday – Sunday',
    sub: 'Weekend clinic',
    time: '8:00 AM – 4:00 PM',
    badge: 'Open',
    badgeClass: 'badge-open',
    icon: '🗓️',
    iconClass: 'sch-saturday',
  },
  
]

export default function Hours() {
  const ref = useReveal()

  return (
    <main ref={ref} className="hours">

      {/* ── PAGE HERO ── */}
      <div className="hr-hero">
        <div className="hr-hero-bg" />
        <div className="hr-hero-content reveal">
          <span className="section-tag section-tag--light">Visiting Us</span>
          <h1>Hours of <em>Operation</em></h1>
          <p>We're here when you need us. Check our clinic schedule and reach out to book your appointment today.</p>
        </div>
      </div>

      {/* ── OPD SCHEDULE ── */}
      <section className="hr-opd">
        <div className="hr-opd-inner">

          {/* Left: text + schedule card */}
          <div className="hr-left reveal">
            <span className="section-tag">OPD Schedule</span>
            <h2 className="hr-title">Clinic Hours</h2>
            <p className="hr-desc">
              Our outpatient department is open six days a week. Appointments are required for specialist consultations. Walk-ins welcome for general care during regular hours.
            </p>

            <div className="hr-card">
              <div className="hr-card-head">
                <div>
                  <h3>Ponferrada Polymedic Hospital, Inc.</h3>
                  <p>Outpatient Department (OPD)</p>
                </div>
              </div>

              <div className="hr-rows">
                {schedule.map((s, i) => (
                  <div key={i} className="hr-row">
                    <div className={`hr-row-icon ${s.iconClass}`}>{s.icon}</div>
                    <div className="hr-row-info">
                      <span className="hr-day">{s.day}</span>
                      <span className="hr-sub">{s.sub}</span>
                    </div>
                    <div className="hr-time">
                      <span className="hr-time-val">{s.time}</span>
                      <span className={`hr-badge ${s.badgeClass}`}>{s.badge}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hr-note">
                <strong>Please note:</strong> Appointments are required for all specialist consultations. Walk-ins are welcome for general consultations during regular hours.
              </div>
            </div>
          </div>

          {/* Right: photo */}
          <div className="hr-photo reveal" style={{ transitionDelay: '0.12s' }}>
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80"
              alt="Ponferrada Polymedic Hospital"
              loading="lazy"
              onError={e => { e.target.style.display = 'none' }}
            />
            <div className="hr-photo-overlay">
              <h4>Caring for Every Patient</h4>
              <p>Our dedicated team is ready to serve you with warmth and expertise.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── EMERGENCY CALLOUT ── */}
      <section className="hr-emergency reveal">
        <div className="hr-emer-inner">
          <div className="hr-emer-icon">🚨</div>
          <div>
            <h3>Emergency Services</h3>
            <p>Our Emergency Room is staffed 24 hours a day, 7 days a week. For life-threatening emergencies, please go directly to the ER or call us immediately.</p>
          </div>
          <a href="tel:+639617359927" className="btn btn-emergency">
            📞 &nbsp;(+63) 961-735-9927
          </a>
        </div>
      </section>

      {/* ── LABORATORY CONTACT ── */}
      <section className="hr-lab reveal">
        <div className="hr-lab-inner">
          <div className="hr-lab-icon">🔬</div>
          <div>
            <h3>Clinical Laboratory</h3>
            <p>For laboratory inquiries, schedules, and test results, please contact us directly.</p>
          </div>
          <a href="tel:+639617359927" className="btn btn-lab">
            📞 &nbsp;(+63) 961-735-9927
          </a>
        </div>
      </section>

      {/* ── DOCTOR DIRECTORY CTA ── */}
      <section className="hr-dir-cta reveal">
        <div className="hr-dir-inner">
          <div className="hr-dir-text">
            <h3>Looking for a specific doctor?</h3>
            <p>Browse our full doctor directory to find specialists, check their schedules, and view contact details.</p>
          </div>
          <Link to="/doctors" className="btn-dir">Doctor Directory →</Link>
        </div>
      </section>

    </main>
  )
}

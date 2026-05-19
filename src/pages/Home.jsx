import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import './Home.css'

const careCards = [
  {
    icon: '🏥',
    title: 'Family Medicine & Chronic Care',
    desc: 'Specialists serving patients of all ages with personalized treatment plans and compassionate attention.',
  },
  {
    icon: '🔬',
    title: 'Modern Diagnostic Technology',
    desc: 'Advanced facilities with accurate, timely results — so you and your doctor can act with confidence.',
  },
  {
    icon: '💚',
    title: 'Prevention, Wellness & Recovery',
    desc: 'A strong focus on keeping you healthy before, during, and after treatment — for a fuller life.',
  },
]

const whyCards = [
  { icon: '🛡️', title: 'DOH Licensed',    desc: 'Licensed and accredited by the Department of Health since 2016 as a Level 1 general hospital in Guiuan.' },
  { icon: '❤️', title: 'Patient-First',    desc: 'Every decision centers on the dignity, comfort, and well-being of each person in our care.' },
  { icon: '🏘️', title: 'Community Roots', desc: 'Family-owned and deeply rooted in Eastern Samar — serving our neighbors since 2005.' },
]

export default function Home() {
  const ref = useReveal()

  return (
    <main ref={ref} className="home">

      {/* ── HERO ── */}
      <section className="h-hero">
        <div className="h-hero-bg">
          <img src="/hero-bg.jpg" alt="" aria-hidden="true" onError={e => { e.target.style.display='none' }} />
        </div>
        <div className="h-hero-body">
          <div className="h-hero-content reveal">
            <span className="section-tag">Ponferrada Polymedic Hospital, Inc.</span>
            <h1 className="h-hero-title">
              Trusted care,<br />
              <em>close to home.</em>
            </h1>
            <p className="h-hero-sub">
              Compassionate, expert healthcare delivered with dignity and warmth —
              serving Eastern Samar since 2016.
            </p>
            <div className="h-hero-actions">
              <Link to="/hours" className="btn btn-primary">View Clinic Hours</Link>
              <Link to="/about" className="btn btn-outline-dark">Our Story →</Link>
            </div>
          </div>

          <div className="h-stats reveal">
            {[
              { num: '23',   label: 'Bed Capacity' },
              { num: '9+',   label: 'Specialists' },
              { num: '10+',  label: 'Years of Care' },
              { num: '24/7', label: 'Emergency' },
            ].map((s, i) => (
              <div key={i} className="h-stat glass">
                <span className="h-stat-num">{s.num}</span>
                <span className="h-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCTOR QUOTE ── */}
      <section className="h-doctor-section">

        {/* Left — photo panel */}
        <div className="h-doc-img-col reveal">
          <div className="h-doc-arch-bg" />
          <div className="h-doc-arch">
            <img
              src="/dr-socorro.png"
              alt="Dr. Socorro de Lira Ponferrada"
              className="h-doc-photo"
            />
          </div>
        </div>

        {/* Right — quote panel */}
        <div className="h-doc-content reveal" style={{ transitionDelay: '0.12s' }}>
          <div className="h-quote-box">
            <span className="h-quote-open">&ldquo;</span>
            <p className="h-quote-text">
              At PPHI, we're not just treating conditions —
              we're caring for people. Our mission is to make
              every patient feel seen, supported, and safe.
            </p>
            <span className="h-quote-close">&rdquo;</span>
          </div>

          <div className="h-quote-author">
            <div className="h-author-avatar">
              <img src="/dr-socorro.png" alt="" aria-hidden="true" />
            </div>
            <div>
              <strong>Dr. Socorro de Lira Ponferrada, M.D.</strong>
              <span>Medical Director · Internal Medicine</span>
            </div>
          </div>
        </div>

      </section>

      {/* ── HOW WE CARE ── */}
      <section className="h-bento-section">
        <div className="h-bento-inner">
          <div className="h-bento-header reveal">
            <span className="section-tag">Our Approach</span>
            <h2>How We <em>Care</em></h2>
            <p>At PPHI, we believe great healthcare starts with people — compassionate teams, advanced treatment, and a genuine commitment to every patient who walks through our doors.</p>
          </div>

          <div className="h-care-layout">
            {/* Left: Auto-playing video */}
            <div className="h-care-video-wrap reveal">
              <video
                className="h-care-video"
                src="/care-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
              <p className="h-care-caption">Our team of dedicated healthcare professionals brings warmth and expertise to every consultation and procedure at PPHI.</p>
            </div>

            {/* Right: Numbered care items */}
            <div className="h-care-list reveal" style={{ transitionDelay: '0.12s' }}>
              {careCards.map((c, i) => (
                <div key={i} className="h-care-item">
                  <div className="h-care-num">0{i + 1}</div>
                  <div className="h-care-info">
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                  <span className="h-care-item-icon">{c.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY PPHI ── */}
      <section className="h-why-section">
        <div className="h-why-inner">
          <div className="h-why-header reveal">
            <span className="section-tag">Why Choose Us</span>
            <h2>Healthcare built<br /><em>on trust</em></h2>
            <p>A Level 1 general hospital accredited by the Department of Health, rooted in the Eastern Samar community.</p>
          </div>
          <div className="h-why-cards">
            {whyCards.map((w, i) => (
              <div key={i} className="h-why-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="h-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="h-cta reveal">
        <div className="h-cta-inner">
          <div>
            <h2>Ready to <em>visit us?</em></h2>
            <p>Check our clinic hours or learn more about the care we offer.</p>
          </div>
          <div className="h-cta-actions">
            <Link to="/hours" className="btn btn-primary">Clinic Hours</Link>
            <Link to="/hmo"   className="btn btn-outline">Doctor Directory</Link>
          </div>
        </div>
      </section>

    </main>
  )
}

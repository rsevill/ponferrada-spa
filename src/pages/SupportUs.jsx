import { useReveal } from '../hooks/useReveal'
import './SupportUs.css'

const stats = [
  { num: '5,000+', label: 'Patients Served' },
  { num: '50+',   label: 'Community Outreaches' },
  { num: '200+',  label: 'Blood Units Collected' },
  { num: '9',     label: 'Specialist Doctors' },
]

const communityPhotos = [
  { src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80', alt: 'Doctor consulting with patient',  featured: true },
  { src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80', alt: 'Medical team meeting' },
  { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80', alt: 'Doctor with patient' },
  { src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80', alt: 'Nurses caring for patients' },
  { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80', alt: 'Community health program' },
]

const ways = [
  { icon: '🩸', title: 'Donate Blood', desc: 'Your blood donation can save the lives of up to three people. Healthy adults are encouraged to donate regularly.' },
  { icon: '💊', title: 'Donate Medicine', desc: 'Unused prescription drugs and medical supplies can be donated to our pharmacy for indigent patients.' },
  { icon: '🤝', title: 'Volunteer', desc: 'Join our volunteer programs and contribute your time and skills to outreach programs and community health events.' },
]

export default function SupportUs() {
  const ref = useReveal()

  return (
    <main ref={ref} className="support">

      {/* ── PAGE HERO ── */}
      <div className="su-hero">
        <div className="su-hero-bg" />
        <div className="su-hero-content reveal">
          <span className="section-tag section-tag--light">Get Involved</span>
          <h1>Support <em>Us</em></h1>
          <p>Together, we build a community where every person has access to dignity, health, and hope.</p>
        </div>
      </div>

      {/* ── OUTREACH INTRO ── */}
      <section className="su-outreach">
        <div className="su-outreach-inner">
          <div className="su-outreach-top">
            <div className="reveal">
              <span className="section-tag">Outreach</span>
              <h2>Care that reaches<br /><em>beyond our walls.</em></h2>
            </div>
            <p className="reveal" style={{ transitionDelay: '0.1s' }}>
              With the help of our staff, volunteers, and generous supporters, we provide outreach programs for those experiencing barriers to healthcare, food insecurity, and other community needs.
            </p>
          </div>
        </div>
        <div className="su-outreach-img reveal">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=85"
            alt="Healthcare worker holding patient's hand with compassion"
            loading="lazy"
            onError={e => { e.target.style.display='none' }}
          />
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="su-stats">
        {stats.map((s, i) => (
          <div key={i} className="su-stat reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <span className="su-stat-num">{s.num}</span>
            <span className="su-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── BLOOD DONOR ── */}
      <section className="su-donor reveal">
        <div className="su-donor-inner">
          <div className="su-donor-left">
            <span className="su-donor-tag">Become a Blood Donor</span>
            <p>Your donation helps us save thousands of indigent patients who cannot afford blood transfusions.</p>
            <div className="su-donor-photo">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=700&q=80"
                alt="Medical staff with patient"
                loading="lazy"
                onError={e => { e.target.style.display='none' }}
              />
            </div>
          </div>
          <div className="su-donor-right">
            <h2>Donate blood,<br /><em>save lives.</em></h2>
            <p>Healthy adults can donate whole blood every 3 months. It takes less than an hour but can mean everything to a patient in need.</p>
            <a href="tel:+639175117707" className="btn btn-donor">
              Contact Us to Donate
            </a>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY PHOTO GRID ── */}
      <section className="su-community">
        <div className="su-community-inner">
          <div className="su-comm-header">
            <div className="reveal">
              <span className="section-tag">Our Community</span>
              <h2>Building a community<br />of <em>care &amp; hope.</em></h2>
            </div>
            <p className="reveal" style={{ transitionDelay: '0.1s' }}>
              One patient, one volunteer, one donor at a time — together we create something greater than ourselves.
            </p>
          </div>

          <div className="su-photo-grid">
            {communityPhotos.map((p, i) => (
              <div
                key={i}
                className={`su-photo-item reveal${p.featured ? ' featured' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  onError={e => { e.target.style.background='var(--teal-light)'; e.target.style.display='none' }}
                />
              </div>
            ))}
          </div>

          <p className="su-photo-caption reveal">
            "Together, we're building a community where everyone has access to dignity, health, and hope."
          </p>
        </div>
      </section>

      {/* ── WAYS TO SUPPORT ── */}
      <section className="su-ways">
        <div className="su-ways-inner">
          <div className="su-ways-header reveal">
            <span className="section-tag section-tag--light">Ways to Help</span>
            <h2>How You Can<br /><em>Make a Difference</em></h2>
          </div>
          <div className="su-ways-grid">
            {ways.map((w, i) => (
              <div key={i} className="su-way-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="su-way-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
                <a href="tel:+639175117707" className="su-way-link">Get in touch →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

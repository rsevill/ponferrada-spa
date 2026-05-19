import { useReveal } from '../hooks/useReveal'
import './About.css'

const timeline = [
  { year: '2006', text: 'Dr. Gil & Dr. Socorro begin full-time private practice as clinicians at Agpalo Hospital Guiuan Polymedic in October 2006.' },
  { year: '2008', text: 'Business partner closes the hospital on December 8. The couple assumes full responsibility — from finance and administration to clinical operations.' },
  { year: '2010', text: 'The couple begins planning their own hospital and acquires a lot in Brgy. Cantahay along the National Highway.' },
  { year: '2011', text: 'Permit to Construct (PTC) granted by the DOH Central Office on August 23.' },
  { year: '2012', text: 'First cornerstone laid on August 12 with a ₱5M loan from Small Business Corporation (DTI).' },
  { year: '2013', text: 'Super Typhoon Yolanda devastates the site on November 8. DBP loan approved December 29 — construction resumes full-swing.' },
  { year: '2016', text: 'Hospital blessed on March 28. Outpatient services began April 1. First License to Operate as a Level 1, 23-bed general hospital granted by DOH on May 30.' },
  { year: '2024', text: 'PONFERRADA POLYMEDIC HOSPITAL, INC. incorporated as a 5-member family corporation, approved by SEC on July 10.' },
]

const credCards = [
  { icon: '🏛️', label: 'DOH License No.',       value: '08-028-26-HI-2',    sub: 'Valid Jan 1 – Dec 31, 2026'          },
  { icon: '🏥', label: 'Hospital Classification', value: 'Level 1 General',   sub: '23 Authorized Beds'                  },
  { icon: '🚑', label: 'Ambulance Service',       value: 'Type 1 Licensed',   sub: 'Emergency transport available'       },
  { icon: '👶', label: 'Newborn Screening',       value: 'Accredited Center', sub: 'DOH Certificate of Accreditation'    },
]

const licensed = [
  'Blood Service Facility (Blood Station)',
  'Pharmacy',
  'Clinical Laboratory (Secondary)',
  'Level 1 General Hospital',
  'Ambulance Provider (Type 1)',
  'Newborn Screening Center',
]

const services = [
  { num: '01', name: 'Emergency Care',          desc: '24/7 emergency room staffed by experienced general physicians and on-call specialists.' },
  { num: '02', name: 'Specialist Clinics',      desc: 'Internal medicine, pediatrics, OB/GYN, general surgery, ENT, and anesthesiology.' },
  { num: '03', name: 'Clinical Laboratory',     desc: 'Secondary-level laboratory including drug testing area and bacteriology (Genexpert).' },
  { num: '04', name: 'Blood Service Facility',  desc: 'DOH-licensed blood station for safe and timely transfusion services.' },
  { num: '05', name: 'Pharmacy',                desc: 'In-house licensed pharmacy serving prescriptions and over-the-counter medications.' },
  { num: '06', name: 'Newborn Screening',       desc: 'DOH-accredited center for early detection of metabolic and genetic disorders.' },
]

export default function About() {
  const ref = useReveal()

  return (
    <main ref={ref} className="about">

      {/* ── PAGE HERO ── */}
      <div className="a-hero">
        <div className="a-hero-bg" />
        <div className="a-hero-content reveal">
          <span className="section-tag section-tag--light">Who We Are</span>
          <h1>About <em>Us</em></h1>
          <p>A story of perseverance, compassion, and unwavering dedication to community healthcare.</p>
        </div>
      </div>

      {/* ── STORY ── */}
      <section className="a-story">
        <div className="a-story-inner">
          <div className="a-story-header reveal">
            <span className="section-tag">Our History</span>
            <h2>From humble beginnings<br />to <em>a beacon of care</em></h2>
          </div>

          <div className="a-cols">
            <div className="a-col reveal">
              <p>Dr. Gil Ponferrada and Dr. Socorro de Lira-Ponferrada are couple doctors trained in Pediatrics and Internal Medicine, respectively. In October 2006, they started their full-time private practice as clinicians at Agpalo Hospital Guiuan Polymedic. When their business partner decided to close the hospital on December 8, 2008, they assumed full responsibility of its operations.</p>
              <p>By 2010, the couple contemplated building their own hospital. From meager resources and hard-to-comply requirements, they managed to acquire a lot in Brgy. Cantahay — a hilly land with coconut trees along the National Highway.</p>
              <p>Years were spent raising a family, working as clinicians, and complying with requirements from government regulatory bodies and banks. The Permit to Construct from the DOH Central Office was finally granted on August 23, 2011.</p>
            </div>

            <div className="a-col reveal" style={{ transitionDelay: '0.1s' }}>
              <p>The first cornerstone was laid on August 12, 2012. Construction suffered from the devastating Super Typhoon Yolanda on November 8, 2013. With the grace of God, the DBP loan was approved on December 29 of the same year and construction resumed full-swing.</p>
              <p>On March 28, 2016, PONFERRADA POLYMEDIC HOSPITAL was blessed by Bishop Crispin B. Vasquez. Outpatient consultations began April 1, 2016. On May 30, 2016, the first License to Operate as a Level 1, 23-bed general hospital was granted by the DOH.</p>
              <p>After almost a decade of operation, the owners formed a family corporation. PONFERRADA POLYMEDIC HOSPITAL, INC. was approved by the SEC on July 10, 2024 — a 5-member corporation composed of the couple-doctors and their three adult children.</p>
              <div className="a-highlight reveal">
                <p>At PPHI, we put people before everything else. Our doctors, nurses, and care teams work side by side to provide safe, thoughtful, and modern healthcare for every stage of life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="a-timeline-section">
        <div className="a-timeline-inner">
          <div className="a-timeline-header reveal">
            <span className="section-tag">Milestones</span>
            <h2>Our Journey</h2>
          </div>
          <div className="a-timeline">
            {timeline.map((item, i) => (
              <div key={i} className="a-tl-item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="a-tl-year">{item.year}</div>
                <div className="a-tl-dot" />
                <div className="a-tl-card">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOH CREDENTIALS ── */}
      <section className="a-cred-section">
        <div className="a-cred-inner">
          <div className="a-cred-head reveal">
            <span className="section-tag">License &amp; Accreditation</span>
            <h2>DOH Licensed &amp; <em>Certified</em></h2>
            <p>Officially licensed by the Department of Health, Region VIII, and accredited for comprehensive Level 1 general hospital care in Eastern Samar.</p>
          </div>

          <div className="a-cred-grid">
            {credCards.map((c, i) => (
              <div key={i} className="a-cred-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="a-cred-icon">{c.icon}</div>
                <p className="a-cred-label">{c.label}</p>
                <p className="a-cred-value">{c.value}</p>
                <p className="a-cred-sub">{c.sub}</p>
              </div>
            ))}
          </div>

          <div className="a-lic-strip reveal">
            <p className="a-lic-title">Licensed to Operate</p>
            <div className="a-lic-pills">
              {licensed.map((s, i) => (
                <span key={i} className="a-lic-pill">✓ {s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="a-vm-section">
        <div className="a-vm-inner">
          <div className="a-vm-card a-vm-vision reveal">
            <div className="a-vm-icon">🎯</div>
            <h3>Vision</h3>
            <p>PPHI will be the healthcare provider of choice for physicians, patients, and employees — recognized for high quality of professional competence and care. We are committed to meet the needs of those we serve, the way we would want for our loved ones.</p>
          </div>
          <div className="a-vm-card a-vm-mission reveal" style={{ transitionDelay: '0.12s' }}>
            <div className="a-vm-icon">❤️</div>
            <h3>Mission</h3>
            <p>The mission of Ponferrada Polymedic Hospital, Inc. is to provide home and family for every sick person with excellence in healthcare and compassion.</p>
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="a-services">
        <div className="a-services-inner">
          <div className="a-services-header reveal">
            <span className="section-tag">Services</span>
            <h2>The Care We Provide</h2>
            <p>Comprehensive, DOH-licensed healthcare services for every patient who walks through our doors.</p>
          </div>
          <div className="a-services-list">
            {services.map((s, i) => (
              <div key={i} className="a-service-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="a-svc-num">{s.num}</span>
                <strong className="a-svc-name">{s.name}</strong>
                <p className="a-svc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

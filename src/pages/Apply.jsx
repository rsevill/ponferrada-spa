import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Apply.css'

const positions = [
  'Registered Nurse',
  'Medical Technologist',
  'Pharmacist',
  'Doctor / Physician',
  'Administrative Staff',
  'Utility / Support Staff',
  'Others',
]

const perks = [
  {
    icon: '💙',
    title: 'Meaningful Impact',
    desc: 'Every day, you make a real difference in the lives of patients and families in our community.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Team',
    desc: 'Work alongside dedicated physicians, nurses, and staff who share your passion for compassionate care.',
  },
  {
    icon: '🌱',
    title: 'Growth & Development',
    desc: 'PPHI is growing — be part of our expansion and build your healthcare career with us.',
  },
]

const empty = { name: '', email: '', contact: '', position: '', message: '' }

export default function Apply() {
  const ref = useReveal()
  const [form, setForm]     = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formsubmit.co/ajax/vincentlenardty@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `Job Application — ${form.position} | PPHI`,
          _captcha: 'false',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('success')
        setForm(empty)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main ref={ref} className="apply">

      {/* ── HERO ── */}
      <div className="ap-hero">
        <div className="ap-hero-bg" />
        <div className="ap-hero-content reveal">
          <span className="section-tag section-tag--light">Careers</span>
          <h1>Join Our <em>Team</em></h1>
          <p>Be part of a compassionate, dedicated healthcare family serving Guiuan, Eastern Samar. We are always looking for skilled and caring individuals to grow with us.</p>
        </div>
      </div>

      {/* ── WHY JOIN US ── */}
      <section className="ap-why">
        <div className="ap-why-inner">
          <div className="ap-why-header reveal">
            <span className="section-tag">Why PPHI</span>
            <h2>Why Work <em>With Us</em></h2>
          </div>
          <div className="ap-why-grid">
            {perks.map((p, i) => (
              <div key={i} className="ap-why-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="ap-why-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section className="ap-form-section">
        <div className="ap-form-inner">

          <div className="ap-form-header reveal">
            <span className="section-tag">Application</span>
            <h2>Send Your <em>Application</em></h2>
            <p>Fill out the form below and we will get back to you as soon as possible.</p>
          </div>

          {status === 'success' ? (
            <div className="ap-success reveal">
              <div className="ap-success-icon">✅</div>
              <h3>Application Received!</h3>
              <p>Thank you for your interest in joining PPHI. We will review your application and contact you soon.</p>
              <button className="btn btn-primary" onClick={() => setStatus('idle')}>Submit Another</button>
            </div>
          ) : (
            <form className="ap-form reveal" onSubmit={submit} style={{ transitionDelay: '0.1s' }}>

              <div className="ap-form-row">
                <div className="ap-field">
                  <label htmlFor="ap-name">Full Name <span>*</span></label>
                  <input
                    id="ap-name" name="name" type="text"
                    placeholder="e.g. Juan dela Cruz"
                    value={form.name} onChange={handle} required
                  />
                </div>
                <div className="ap-field">
                  <label htmlFor="ap-email">Email Address <span>*</span></label>
                  <input
                    id="ap-email" name="email" type="email"
                    placeholder="e.g. juan@email.com"
                    value={form.email} onChange={handle} required
                  />
                </div>
              </div>

              <div className="ap-form-row">
                <div className="ap-field">
                  <label htmlFor="ap-contact">Contact Number <span>*</span></label>
                  <input
                    id="ap-contact" name="contact" type="tel"
                    placeholder="e.g. 09XX XXX XXXX"
                    value={form.contact} onChange={handle} required
                  />
                </div>
                <div className="ap-field">
                  <label htmlFor="ap-position">Position Applying For <span>*</span></label>
                  <select
                    id="ap-position" name="position"
                    value={form.position} onChange={handle} required
                  >
                    <option value="">Select a position…</option>
                    {positions.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="ap-field">
                <label htmlFor="ap-message">Cover Letter / Message <span>*</span></label>
                <textarea
                  id="ap-message" name="message" rows={5}
                  placeholder="Tell us about yourself, your experience, and why you want to join PPHI…"
                  value={form.message} onChange={handle} required
                />
              </div>

              {status === 'error' && (
                <p className="ap-error">Something went wrong. Please try again or email us directly at <a href="mailto:socorro_ponferrada@yahoo.com">socorro_ponferrada@yahoo.com</a>.</p>
              )}

              <button type="submit" className="btn btn-primary ap-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit Application →'}
              </button>

            </form>
          )}

        </div>
      </section>

    </main>
  )
}

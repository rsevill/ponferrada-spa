import { useReveal } from '../hooks/useReveal'
import './HMO.css'

const hmoProviders = [
  { logo: '/hmo/intellicare.png', name: 'Intellicare',           tagline: 'Your Intelligent Health Choice'    },
  { logo: '/hmo/ims.png',         name: 'IMS Wellth Care, Inc.', tagline: 'Integrated Medical Solutions'      },
  { logo: '/hmo/avega.avif',      name: 'AVEGA',                 tagline: 'Leading Edge Healthcare Solutions' },
  { logo: '/hmo/kaiser.png',      name: 'Kaiser International',  tagline: 'International Health Coverage'     },
]

export default function HMO() {
  const ref = useReveal()
  return (
    <main ref={ref} className="hmo">

      {/* ── HERO ── */}
      <div className="hmo-hero">
        <div className="hmo-hero-bg" />
        <div className="hmo-hero-content reveal">
          <span className="section-tag section-tag--light">Insurance</span>
          <h1>Accepted <em>HMO Partners</em></h1>
          <p>We accept the following health maintenance organizations. Present your HMO card upon your visit.</p>
        </div>
      </div>

      {/* ── HMO PROVIDERS ── */}
      <section className="hmo-providers-section">
        <div className="hmo-providers-inner">
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

    </main>
  )
}

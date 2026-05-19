import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/pphi-logo.jpg" alt="PPHI Logo" className="footer-logo-img" />
          <div className="footer-brand-text">
            <strong>PONFERRADA POLYMEDIC<br />HOSPITAL, INC.</strong>
            <span>Est. 2016 · Guiuan, Eastern Samar</span>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/hours">Hours of Operation</Link></li>
              <li><Link to="/support">Support Us</Link></li>
              <li><Link to="/hmo">HMO / Doctors</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="fi">📍</span>
                <span>National Road, Brgy. Cantahay,<br />Guiuan, Eastern Samar, Region VIII</span>
              </li>
              <li>
                <span className="fi">📞</span>
                <a href="tel:+639175117707">(+63) 917-511-7707</a>
              </li>
              <li>
                <span className="fi">✉</span>
                <a href="mailto:socorro_ponferrada@yahoo.com">socorro_ponferrada@yahoo.com</a>
              </li>
              <li>
                <span className="fi">👍</span>
                <a
                  href="https://www.facebook.com/ponferradapolymedicalhospitalinc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <p>© {new Date().getFullYear()} Ponferrada Polymedic Hospital, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

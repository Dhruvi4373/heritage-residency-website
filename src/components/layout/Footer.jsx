import { Link } from 'react-router-dom';
import { contactData } from '@data/contactData';
import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Top band */}
      <div className={styles.topBand}>
        <div className={styles.topInner}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoMain}>Heritage</span>
              <span className={styles.logoDivider}>&amp;</span>
              <span className={styles.logoSub}>Residences</span>
            </Link>
            <p className={styles.brandDesc}>
              Two iconic heritage properties in Rajasthan — where timeless
              craftsmanship meets contemporary luxury.
            </p>
            <div className={styles.social}>
              {[
                { href: contactData.socialMedia.instagram, label: 'Instagram', icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.3" />
                    <circle cx="9" cy="9" r="2.8" stroke="currentColor" strokeWidth="1.3" />
                    <circle cx="13.5" cy="4.5" r="0.5" fill="currentColor" />
                  </svg>
                )},
                { href: contactData.socialMedia.facebook, label: 'Facebook', icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M16 9A7 7 0 1 0 9 16V11.5H7.5V9H9V7.5C9 6 9.9 5 11.5 5H13V7.5H12C11.4 7.5 11 7.9 11 8.5V9H13L12.7 11.5H11V16A7 7 0 0 0 16 9Z"
                      stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                )},
                { href: contactData.socialMedia.linkedin, label: 'LinkedIn', icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M6 8V13M6 6V6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    <path d="M9.5 13V10.5C9.5 9.4 10.4 8.5 11.5 8.5C12.6 8.5 13.5 9.4 13.5 10.5V13"
                      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                )},
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={styles.socialLink} aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Properties</h4>
              <ul className={styles.linkList}>
                <li><Link to="/property/pushp-residency">Pushp Residency</Link></li>
                <li><Link to="/property/karohi-villa">Karohi Villa</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Navigate</h4>
              <ul className={styles.linkList}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href={`mailto:${contactData.corporate.careers.email}`}>Careers</a></li>
                <li><a href={`mailto:${contactData.corporate.partnerships.email}`}>Partnerships</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Contact</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href={`tel:${contactData.corporate.centralReservations.phone}`}>
                    {contactData.corporate.centralReservations.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contactData.corporate.centralReservations.email}`}>
                    {contactData.corporate.centralReservations.email}
                  </a>
                </li>
                <li className={styles.addr}>
                  {contactData.corporate.headquarters.city},&nbsp;
                  {contactData.corporate.headquarters.state}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copy}>
            &copy; {year} Hotel Heritage &amp; Residences. All rights reserved.
          </p>
          <div className={styles.legal}>
            <a href="#privacy">Privacy Policy</a>
            <span className={styles.legalDot} />
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

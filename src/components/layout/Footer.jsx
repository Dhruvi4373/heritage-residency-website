import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { contactData } from '@data/contactData';
import styles from './Footer.module.css';

/* Live metrics that tick in real time */
const useLiveMetrics = () => {
  const [time, setTime]   = useState('');
  const [guests, setGuests] = useState(0);

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        timeZone: 'Asia/Kolkata', hour12: false
      });
      setTime(t);
      /* Simulate a live guest count that gently fluctuates */
      setGuests(prev => {
        const delta = Math.floor(Math.random() * 3) - 1;
        const next  = prev + delta;
        return Math.max(8, Math.min(24, next));
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return { time, guests };
};

const Footer = () => {
  const year = new Date().getFullYear();
  const { time, guests } = useLiveMetrics();

  const socialLinks = [
    {
      href: contactData.socialMedia.instagram,
      label: 'Instagram',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="9" cy="9" r="2.8" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="13.5" cy="4.5" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      href: contactData.socialMedia.facebook,
      label: 'Facebook',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M16 9A7 7 0 1 0 9 16V11.5H7.5V9H9V7.5C9 6 9.9 5 11.5 5H13V7.5H12C11.4 7.5 11 7.9 11 8.5V9H13L12.7 11.5H11V16A7 7 0 0 0 16 9Z"
            stroke="currentColor" strokeWidth="1.3"
          />
        </svg>
      ),
    },
    {
      href: contactData.socialMedia.linkedin,
      label: 'LinkedIn',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
          <path d="M6 8V13M6 6V6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path
            d="M9.5 13V10.5C9.5 9.4 10.4 8.5 11.5 8.5C12.6 8.5 13.5 9.4 13.5 10.5V13"
            stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className={styles.footer}>

      {/* ================================================
          MAIN BODY — brand + links
         ================================================ */}
      <div className={styles.body}>
        <div className={styles.bodyInner}>

          {/* Brand column */}
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
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className={styles.reservations}>
              <span className={styles.resLabel}>Central Reservations</span>
              <a
                href={`tel:${contactData.corporate.centralReservations.phone}`}
                className={styles.resPhone}
              >
                {contactData.corporate.centralReservations.phone}
              </a>
              <a
                href={`mailto:${contactData.corporate.centralReservations.email}`}
                className={styles.resEmail}
              >
                {contactData.corporate.centralReservations.email}
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className={styles.linksArea}>
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
                <li>
                  <a href={`mailto:${contactData.corporate.careers.email}`}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contactData.corporate.partnerships.email}`}>
                    Partnerships
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Locations</h4>
              <ul className={styles.linkList}>
                <li className={styles.locItem}>
                  <span className={styles.locName}>Pushp Residency</span>
                  <span className={styles.locCity}>Jaipur, Rajasthan</span>
                </li>
                <li className={styles.locItem}>
                  <span className={styles.locName}>Karohi Villa</span>
                  <span className={styles.locCity}>Udaipur, Rajasthan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================
          LIVE METRICS STRIP
         ================================================ */}
      <div className={styles.metrics}>
        <div className={styles.metricsInner}>
          <div className={styles.metric}>
            <span className={styles.metricDot} />
            <span className={styles.metricLabel}>Live IST</span>
            <span className={styles.metricValue}>{time}</span>
          </div>

          <div className={styles.metricDivider} />

          <div className={styles.metric}>
            <motion.span
              className={styles.metricPulse}
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className={styles.metricLabel}>Guests in residence</span>
            <motion.span
              className={styles.metricValue}
              key={guests}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {guests}
            </motion.span>
          </div>

          <div className={styles.metricDivider} />

          <div className={styles.metric}>
            <span className={styles.metricLabel}>Properties</span>
            <span className={styles.metricValue}>2 &mdash; Jaipur &amp; Udaipur</span>
          </div>

          <div className={styles.metricDivider} />

          <div className={styles.metric}>
            <span className={styles.metricLabel}>Reservations</span>
            <a
              href={`tel:${contactData.corporate.centralReservations.phone}`}
              className={`${styles.metricValue} ${styles.metricLink}`}
            >
              {contactData.corporate.centralReservations.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ================================================
          LEGAL BOTTOM BAR
         ================================================ */}
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

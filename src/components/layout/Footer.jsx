import { Link } from 'react-router-dom';
import { contactData } from '@data/contactData';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.footerBrand}>
            <Link to="/" className={styles.footerLogo}>
              <span className={styles.logoText}>Heritage</span>
              <span className={styles.logoSeparator}>/</span>
              <span className={styles.logoSubtext}>Residences</span>
            </Link>
            <p className={styles.footerTagline}>
              {contactData.corporate.tagline}
            </p>
            <div className={styles.footerSocial}>
              <a
                href={contactData.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="15" cy="5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href={contactData.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 13.9932 4.92547 17.3044 8.75 17.9028V12.5H7V10H8.75V8.25C8.75 6.5 9.75 5.5 11.5 5.5H13.25V8H12C11.3096 8 11 8.30964 11 9V10H13.25L12.875 12.5H11V17.9028C14.8245 17.3044 17.75 13.9932 17.75 10H18Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
              <a
                href={contactData.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6 8V14M6 6V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M10 14V11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Properties */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Properties</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/property/pushp-residency">Pushp Residency</Link>
              </li>
              <li>
                <Link to="/property/karohi-villa">Karohi Villa</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <a href={`mailto:${contactData.corporate.careers.email}`}>Careers</a>
              </li>
              <li>
                <a href={`mailto:${contactData.corporate.partnerships.email}`}>Partnerships</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <ul className={styles.footerLinks}>
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
              <li className={styles.footerAddress}>
                {contactData.corporate.headquarters.address}<br />
                {contactData.corporate.headquarters.city}, {contactData.corporate.headquarters.state}
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            © {currentYear} Hotel Heritage & Residences. All rights reserved.
          </p>
          <div className={styles.footerLegal}>
            <a href="#privacy">Privacy Policy</a>
            <span className={styles.footerDivider}>•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

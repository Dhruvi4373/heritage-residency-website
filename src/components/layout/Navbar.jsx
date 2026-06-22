import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '@hooks/useScrollProgress';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const { isScrolled } = useScrollProgress();
  const location = useLocation();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata',
        hour12: false
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/property/pushp-residency', label: 'Pushp Residency' },
    { path: '/property/karohi-villa', label: 'Karohi Villa' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>Heritage</span>
            <span className={styles.logoSeparator}>/</span>
            <span className={styles.logoSubtext}>Residences</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.navCenter}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${styles.navLink} ${
                  location.pathname === link.path ? styles.active : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className={styles.navRight}>
            <div className={styles.timeDisplay}>
              <span className={styles.timeLabel}>IST</span>
              <span className={styles.time}>{currentTime}</span>
            </div>

            <button
              className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={styles.menuLine}></span>
              <span className={styles.menuLine}></span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.mobileMenuContent}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.mobileMenuHeader}>
                <span className={styles.mobileMenuTitle}>Menu</span>
              </div>

              <nav className={styles.mobileNav}>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`${styles.mobileNavLink} ${
                        location.pathname === link.path ? styles.active : ''
                      }`}
                    >
                      <span className={styles.mobileNavNumber}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={styles.mobileNavLabel}>{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className={styles.mobileMenuFooter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className={styles.mobileContact}>
                  <p className={styles.mobileContactLabel}>Reservations</p>
                  <a href="tel:+911417100500" className={styles.mobileContactLink}>
                    +91 141 7100 5000
                  </a>
                </div>
                <div className={styles.mobileTime}>
                  <span className={styles.mobileTimeLabel}>Local Time</span>
                  <span className={styles.mobileTimeValue}>{currentTime} IST</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

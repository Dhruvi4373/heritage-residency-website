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
    const tick = () => {
      const t = new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit', minute: '2-digit',
        timeZone: 'Asia/Kolkata', hour12: false
      });
      setCurrentTime(t);
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => { setIsMenuOpen(false); }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/property/pushp-residency', label: 'Pushp Residency' },
    { path: '/property/karohi-villa', label: 'Karohi Villa' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.inner}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <span className={styles.logoMain}>Heritage</span>
            <span className={styles.logoDivider}>&amp;</span>
            <span className={styles.logoSub}>Residences</span>
          </Link>

          {/* Desktop links */}
          <nav className={styles.links}>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`${styles.link} ${location.pathname === link.path ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className={styles.right}>
            <div className={styles.clock}>
              <span className={styles.clockLabel}>IST</span>
              <span className={styles.clockTime}>{currentTime}</span>
            </div>

            <Link to="/contact" className={styles.bookBtn}>Book a Stay</Link>

            <button
              className={`${styles.burger} ${isMenuOpen ? styles.open : ''}`}
              onClick={() => setIsMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span /><span />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className={styles.drawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.drawerHead}>
                <span className={styles.drawerTitle}>Menu</span>
                <button
                  className={styles.closeBtn}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <span /><span />
                </button>
              </div>

              <nav className={styles.drawerNav}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.path}
                      className={`${styles.drawerLink} ${location.pathname === link.path ? styles.drawerActive : ''}`}
                    >
                      <span className={styles.drawerNum}>{String(i + 1).padStart(2, '0')}</span>
                      <span className={styles.drawerLabel}>{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className={styles.drawerFoot}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.38 }}
              >
                <p className={styles.drawerFootLabel}>Central Reservations</p>
                <a href="tel:+911417100500" className={styles.drawerPhone}>+91 141 7100 5000</a>
                <p className={styles.drawerTime}>{currentTime} IST</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

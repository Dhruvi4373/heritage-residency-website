import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAllProperties } from '@data/propertiesData';
import PropertySplitCard from '@components/common/PropertySplitCard';
import styles from './Home.module.css';

/* ---- tiny hook: fires once when element enters viewport ---- */
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

/* ---- stagger container variants ---- */
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const wordVariant = {
  hidden: { y: '105%', opacity: 0 },
  show:   { y: 0, opacity: 1, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const Home = () => {
  const properties = getAllProperties();

  /* hero parallax */
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  /* section refs */
  const [propRef, propVisible]   = useInView(0.08);
  const [expRef,  expVisible]    = useInView(0.15);
  const [statsRef, statsVisible] = useInView(0.2);

  const heroWords = ['Where', 'Heritage', 'Meets', 'Luxury'];

  const stats = [
    { value: '2', label: 'Iconic Properties' },
    { value: '30+', label: 'Years of Heritage' },
    { value: '18', label: 'Exclusive Suites' },
    { value: '4.9', label: 'Guest Rating' },
  ];

  return (
    <div className={styles.page}>

      {/* ======================================================
          HERO
         ====================================================== */}
      <section className={styles.hero} ref={heroRef}>

        {/* Cinematic image — expands from 82% → 100% on mount */}
        <motion.div
          className={styles.heroImgWrap}
          initial={{ width: '82%', borderRadius: '20px' }}
          animate={{ width: '100%', borderRadius: '0px' }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className={styles.heroImgInner}
            style={{ y: imgY }}
            initial={{ scale: 1.14 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
              alt="Heritage Hotel"
              className={styles.heroImg}
            />
            <div className={styles.heroImgOverlay} />
          </motion.div>
        </motion.div>

        {/* Text content floats over image */}
        <div className={styles.heroBody}>
          {/* Eyebrow */}
          <motion.span
            className={styles.heroEyebrow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            Hotel Heritage &amp; Residences
          </motion.span>

          {/* Split-word headline */}
          <motion.h1
            className={styles.heroTitle}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {heroWords.map((w, i) => (
              <span key={i} className={styles.heroWordClip}>
                <motion.span className={styles.heroWord} variants={wordVariant}
                  transition={{ duration: 0.85, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Sub-copy + CTA */}
          <motion.div
            className={styles.heroFooter}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.heroDesc}>
              Two iconic heritage properties in Rajasthan — each a living story
              of timeless craftsmanship and contemporary luxury.
            </p>
            <div className={styles.heroCtas}>
              <Link to="/contact" className={styles.ctaPrimary}>
                Reserve a Stay
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.5 9H14.5M14.5 9L9.5 4M14.5 9L9.5 14"
                    stroke="currentColor" strokeWidth="1.4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a href="tel:+911417100500" className={styles.ctaGhost}>
                +91 141 7100 5000
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <span className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll</span>
        </motion.div>
      </section>

      {/* ======================================================
          STATS STRIP
         ====================================================== */}
      <section className={styles.statsStrip} ref={statsRef}>
        <div className={styles.statsInner}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className={styles.statItem}
              initial={{ opacity: 0, y: 24 }}
              animate={statsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================================================
          PROPERTIES SPLIT
         ====================================================== */}
      <section className={styles.properties} ref={propRef}>
        <div className={styles.propertiesHead}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 18 }}
            animate={propVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Collection
          </motion.span>
          <motion.h2
            className={styles.propertiesTitle}
            initial={{ opacity: 0, y: 28 }}
            animate={propVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Discover Our Properties
          </motion.h2>
        </div>

        <div className={styles.propertiesGrid}>
          {properties.map((p, i) => (
            <PropertySplitCard key={p.id} property={p} index={i} isVisible={propVisible} />
          ))}
        </div>
      </section>

      {/* ======================================================
          EXPERIENCE EDITORIAL SPLIT
         ====================================================== */}
      <section className={styles.experience} ref={expRef}>
        <div className={styles.expInner}>
          {/* Left — text */}
          <motion.div
            className={styles.expText}
            variants={staggerContainer}
            initial="hidden"
            animate={expVisible ? 'show' : 'hidden'}
          >
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              The Heritage Experience
            </motion.span>
            <motion.h2 className={styles.expTitle} variants={fadeUp}>
              Crafted for the Discerning Traveler
            </motion.h2>
            <motion.p className={styles.expDesc} variants={fadeUp}>
              Every detail at our properties is thoughtfully curated to create moments
              of authentic connection with Rajasthan’s rich cultural heritage. From
              personalized butler service to bespoke cultural experiences, we ensure
              your stay transcends the ordinary.
            </motion.p>
            <motion.ul className={styles.expList} variants={fadeUp}>
              {[
                'Personalized concierge & butler services',
                'Curated heritage cultural experiences',
                'Fine dining with authentic local flavors',
                'Ayurvedic wellness & spa treatments',
              ].map(item => (
                <li key={item}>
                  <span className={styles.expDot} />
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Link to="/contact" className={styles.expCta}>
                Plan Your Visit
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — image stack */}
          <motion.div
            className={styles.expImages}
            initial={{ opacity: 0, x: 50 }}
            animate={expVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.expImgMain}>
              <img
                src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop"
                alt="Heritage Experience"
              />
            </div>
            <div className={styles.expImgAccent}>
              <img
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop"
                alt="Luxury Detail"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          MARQUEE STRIP
         ====================================================== */}
      <div className={styles.marqueeWrap} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className={styles.marqueeItem}>
              Heritage &amp; Residences
              <span className={styles.marqueeDot}>◆</span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;

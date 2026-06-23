import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { getPropertyById } from '@data/propertiesData';
import RoomCard from '@components/common/RoomCard';
import NearbyPlaces from '@components/common/NearbyPlaces';
import styles from './PropertyPage.module.css';

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

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const HERO_IMAGES = {
  'pushp-residency': 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
  'karohi-villa':    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop',
};

const PropertyPage = () => {
  const { propertyId } = useParams();
  const property = getPropertyById(propertyId);

  const [heroRef,    heroVisible]    = useInView(0.1);
  const [roomsRef,   roomsVisible]   = useInView(0.08);
  const [amenRef,    amenVisible]    = useInView(0.1);
  const [expRef,     expVisible]     = useInView(0.15);

  if (!property) {
    return (
      <div className={styles.notFound}>
        <h1>Property Not Found</h1>
        <Link to="/">Return Home</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>

      {/* ======================================================
          HERO
         ====================================================== */}
      <section className={styles.hero} ref={heroRef}>
        <motion.div
          className={styles.heroImgWrap}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={heroVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={HERO_IMAGES[property.id]} alt={property.name} className={styles.heroImg} />
          <div className={styles.heroOverlay} />
        </motion.div>

        <div className={styles.heroContent}>
          <motion.span
            className={styles.heroEyebrow}
            initial={{ opacity: 0, y: 24 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {property.type}
          </motion.span>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {property.name}
          </motion.h1>

          <motion.p
            className={styles.heroTagline}
            initial={{ opacity: 0, y: 28 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {property.tagline}
          </motion.p>

          <motion.div
            className={styles.heroMeta}
            initial={{ opacity: 0, y: 24 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.heroMetaItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 8.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
                  stroke="currentColor" strokeWidth="1.3" />
                <path d="M8 14C10.5 11 13.5 8.5 13.5 6a5.5 5.5 0 1 0-11 0C2.5 8.5 5.5 11 8 14Z"
                  stroke="currentColor" strokeWidth="1.3" />
              </svg>
              {property.location.city}, {property.location.state}
            </span>
            <span className={styles.heroMetaItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M5 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              {property.rooms.length} Room Categories
            </span>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          ABOUT STRIP
         ====================================================== */}
      <section className={styles.about}>
        <div className={styles.aboutInner}>
          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.eyebrow}>About</span>
            <h2 className={styles.aboutTitle}>{property.description}</h2>
            <p className={styles.aboutBody}>{property.longDescription}</p>
          </motion.div>

          <motion.div
            className={styles.aboutStats}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { v: property.rooms.length, l: 'Room Types' },
              { v: property.amenities.length, l: 'Amenity Categories' },
              { v: property.experiences.length, l: 'Experiences' },
            ].map(s => (
              <div key={s.l} className={styles.aboutStat}>
                <span className={styles.aboutStatVal}>{s.v}</span>
                <span className={styles.aboutStatLabel}>{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          ROOMS
         ====================================================== */}
      <section className={styles.rooms} ref={roomsRef}>
        <div className={styles.sectionHead}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 18 }}
            animate={roomsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Accommodations
          </motion.span>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 28 }}
            animate={roomsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Rooms &amp; Suites
          </motion.h2>
        </div>

        <div className={styles.roomsGrid}>
          {property.rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} isVisible={roomsVisible} />
          ))}
        </div>
      </section>

      {/* ======================================================
          AMENITIES
         ====================================================== */}
      <section className={styles.amenities} ref={amenRef}>
        <div className={styles.amenInner}>
          <div className={styles.sectionHead}>
            <motion.span
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 18 }}
              animate={amenVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Amenities
            </motion.span>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 28 }}
              animate={amenVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Exceptional Services
            </motion.h2>
          </div>

          <div className={styles.amenGrid}>
            {property.amenities.map((cat, i) => (
              <motion.div
                key={cat.category}
                className={styles.amenCat}
                initial={{ opacity: 0, y: 36 }}
                animate={amenVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className={styles.amenCatTitle}>{cat.category}</h3>
                <ul className={styles.amenList}>
                  {cat.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          EXPERIENCES
         ====================================================== */}
      <section className={styles.experiences} ref={expRef}>
        <div className={styles.expInner}>
          <motion.div
            className={styles.sectionHead}
            variants={stagger}
            initial="hidden"
            animate={expVisible ? 'show' : 'hidden'}
          >
            <motion.span className={styles.eyebrow} variants={fadeUp}>Experiences</motion.span>
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>
              Curated Moments
            </motion.h2>
          </motion.div>

          <div className={styles.expGrid}>
            {property.experiences.map((exp, i) => (
              <motion.div
                key={exp}
                className={styles.expItem}
                initial={{ opacity: 0, y: 28 }}
                animate={expVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className={styles.expNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.expText}>{exp}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          NEARBY PLACES
         ====================================================== */}
      {property.nearbyPlaces && property.nearbyPlaces.length > 0 && (
        <NearbyPlaces
          places={property.nearbyPlaces}
          city={property.location.city}
        />
      )}

      {/* ======================================================
          CTA BANNER
         ====================================================== */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.eyebrowLight}>Ready to visit?</span>
            <h2 className={styles.ctaTitle}>Experience {property.name}</h2>
            <p className={styles.ctaDesc}>
              Contact our reservations team to plan your perfect stay.
            </p>
            <div className={styles.ctaActions}>
              <Link to="/contact" className={styles.ctaBtnPrimary}>
                Make a Reservation
              </Link>
              <a href={`tel:${property.contact.phone}`} className={styles.ctaBtnGhost}>
                {property.contact.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default PropertyPage;

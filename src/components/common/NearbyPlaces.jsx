import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './NearbyPlaces.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 48 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const NearbyPlaces = ({ places, city }) => {
  const [activeIdx, setActiveIdx] = useState(null);
  const trackRef = useRef(null);

  return (
    <section className={styles.section}>
      {/* ---- Header ---- */}
      <div className={styles.header}>
        <motion.div
          className={styles.headerInner}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span className={styles.eyebrow} variants={fadeUp}>
            Explore the Region
          </motion.span>
          <motion.h2 className={styles.title} variants={fadeUp}>
            Places to Visit Near {city}
          </motion.h2>
          <motion.p className={styles.subtitle} variants={fadeUp}>
            Step beyond our doors and discover the living heritage, sacred
            monuments and vibrant culture that surround you.
          </motion.p>
        </motion.div>

        {/* Decorative rule */}
        <motion.div
          className={styles.rule}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* ---- Cards grid ---- */}
      <motion.div
        className={styles.grid}
        ref={trackRef}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.08 }}
      >
        {places.map((place, i) => (
          <motion.article
            key={place.id}
            className={styles.card}
            variants={cardVariant}
            onMouseEnter={() => setActiveIdx(i)}
            onMouseLeave={() => setActiveIdx(null)}
            data-dimmed={activeIdx !== null && activeIdx !== i}
          >
            {/* Image */}
            <div className={styles.imgWrap}>
              <motion.img
                src={place.image}
                alt={place.name}
                className={styles.img}
                animate={{ scale: activeIdx === i ? 1.07 : 1 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Distance badge */}
              <span className={styles.badge}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <circle cx="5.5" cy="4.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M5.5 10C7.5 7.5 9.5 6 9.5 4.5a4 4 0 1 0-8 0C1.5 6 3.5 7.5 5.5 10Z"
                    stroke="currentColor" strokeWidth="1.2" />
                </svg>
                {place.distance}
              </span>
            </div>

            {/* Body */}
            <div className={styles.body}>
              <span className={styles.category}>{place.category}</span>
              <h3 className={styles.name}>{place.name}</h3>
              <p className={styles.desc}>{place.description}</p>

              {/* Animated underline CTA */}
              <motion.span
                className={styles.cta}
                animate={{ x: activeIdx === i ? 4 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                    stroke="currentColor" strokeWidth="1.3"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default NearbyPlaces;

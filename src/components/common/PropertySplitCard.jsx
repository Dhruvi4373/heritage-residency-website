import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './PropertySplitCard.module.css';

const IMAGES = {
  'pushp-residency': {
    main: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
    hover: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
  },
  'karohi-villa': {
    main: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop',
    hover: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
  },
};

const PropertySplitCard = ({ property, index, isVisible }) => {
  const [hovered, setHovered] = useState(false);
  const imgs = IMAGES[property.id] || IMAGES['pushp-residency'];

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 48 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hovered={hovered}
    >
      <Link to={`/property/${property.id}`} className={styles.cardLink}>
        {/* Image layer */}
        <div className={styles.imgWrap}>
          {/* Main image */}
          <motion.img
            src={imgs.main}
            alt={property.name}
            className={styles.imgMain}
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Hover reveal image — clip-path expansion */}
          <motion.img
            src={imgs.hover}
            alt={`${property.name} interior`}
            className={styles.imgHover}
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: hovered ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className={styles.imgOverlay} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>{property.type}</span>

          <motion.h3
            className={styles.title}
            animate={{ y: hovered ? -6 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {property.name}
          </motion.h3>

          <p className={styles.tagline}>{property.tagline}</p>

          <div className={styles.meta}>
            <span className={styles.location}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 7.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z"
                  stroke="currentColor" strokeWidth="1.2" />
                <path d="M7 12.25C9.1 9.8 11.375 7.7 11.375 5.25a4.375 4.375 0 1 0-8.75 0C2.625 7.7 4.9 9.8 7 12.25Z"
                  stroke="currentColor" strokeWidth="1.2" />
              </svg>
              {property.location.city}, {property.location.state}
            </span>

            <motion.span
              className={styles.explore}
              animate={{ x: hovered ? 6 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Explore
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.5 9H14.5M14.5 9L9.5 4M14.5 9L9.5 14"
                  stroke="currentColor" strokeWidth="1.3"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default PropertySplitCard;

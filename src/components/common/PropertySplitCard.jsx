import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './PropertySplitCard.module.css';

const PropertySplitCard = ({ property, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getPropertyImage = (propertyId) => {
    const images = {
      'pushp-residency': 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
      'karohi-villa': 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop'
    };
    return images[propertyId] || images['pushp-residency'];
  };

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/property/${property.id}`} className={styles.cardLink}>
        <div className={styles.cardImageWrapper}>
          <motion.div
            className={styles.cardImageInner}
            animate={{
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={getPropertyImage(property.id)}
              alt={property.name}
              className={styles.cardImage}
            />
            <div className={styles.cardImageOverlay} />
          </motion.div>

          <motion.div
            className={styles.cardContent}
            animate={{
              y: isHovered ? -10 : 0
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.cardLabel}>{property.type}</span>
            <h3 className={styles.cardTitle}>{property.name}</h3>
            <p className={styles.cardTagline}>{property.tagline}</p>

            <div className={styles.cardMeta}>
              <span className={styles.cardLocation}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8.5C8.82843 8.5 9.5 7.82843 9.5 7C9.5 6.17157 8.82843 5.5 8 5.5C7.17157 5.5 6.5 6.17157 6.5 7C6.5 7.82843 7.17157 8.5 8 8.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14C10 11 13 8.5 13 6C13 3.23858 10.7614 1 8 1C5.23858 1 3 3.23858 3 6C3 8.5 6 11 8 14Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {property.location.city}, {property.location.state}
              </span>

              <motion.span
                className={styles.cardCta}
                animate={{
                  x: isHovered ? 5 : 0
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Explore
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 10H16M16 10L10 4M16 10L10 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.span>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertySplitCard;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@hooks/useScrollAnimation';
import { getAllProperties } from '@data/propertiesData';
import PropertySplitCard from '@components/common/PropertySplitCard';
import styles from './Home.module.css';

const Home = () => {
  const properties = getAllProperties();
  const [heroRef, heroVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [propertiesRef, propertiesVisible] = useScrollAnimation({ once: true, threshold: 0.1 });

  const heroWords = [
    { text: 'Where', delay: 0 },
    { text: 'Heritage', delay: 0.1 },
    { text: 'Meets', delay: 0.2 },
    { text: 'Luxury', delay: 0.3 }
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Hotel Heritage & Residences
            </motion.span>
          </div>

          <h1 className={styles.heroTitle}>
            {heroWords.map((word, index) => (
              <span key={index} className={styles.heroWordWrapper}>
                <motion.span
                  className={styles.heroWord}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={heroVisible ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + word.delay,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {word.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Experience the finest in boutique hospitality across our curated collection
            of heritage properties in Rajasthan. Each residence tells a unique story of
            timeless elegance and contemporary comfort.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/contact" className={styles.heroCta}>
              <span>Reserve Your Stay</span>
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
            </Link>
            <a href="tel:+911417100500" className={styles.heroCtaSecondary}>
              +91 141 7100 5000
            </a>
          </motion.div>
        </div>

        <motion.div
          className={styles.heroImageWrapper}
          initial={{ width: '80%', opacity: 0 }}
          animate={heroVisible ? { width: '100%', opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className={styles.heroImage}
            initial={{ scale: 1.15 }}
            animate={heroVisible ? { scale: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.heroImageOverlay} />
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
              alt="Heritage Hotel Exterior"
              className={styles.heroImg}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Properties Section */}
      <section className={styles.properties} ref={propertiesRef}>
        <div className={styles.propertiesHeader}>
          <motion.span
            className={styles.propertiesLabel}
            initial={{ opacity: 0, y: 20 }}
            animate={propertiesVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Collection
          </motion.span>
          <motion.h2
            className={styles.propertiesTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={propertiesVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Discover Our Properties
          </motion.h2>
        </div>

        <div className={styles.propertiesGrid}>
          {properties.map((property, index) => (
            <PropertySplitCard
              key={property.id}
              property={property}
              index={index}
              isVisible={propertiesVisible}
            />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className={`${styles.experience} bg-cream`}>
        <div className="container">
          <div className={styles.experienceContent}>
            <motion.div
              className={styles.experienceText}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.experienceLabel}>The Heritage Experience</span>
              <h2 className={styles.experienceTitle}>
                Crafted for the Discerning Traveler
              </h2>
              <p className={styles.experienceDescription}>
                Every detail at our properties is thoughtfully curated to create moments
                of authentic connection with Rajasthan's rich cultural heritage. From
                personalized butler service to bespoke cultural experiences, we ensure
                your stay transcends the ordinary.
              </p>
              <ul className={styles.experienceList}>
                <li>Personalized concierge services</li>
                <li>Curated cultural experiences</li>
                <li>Fine dining with local flavors</li>
                <li>Wellness and spa treatments</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.experienceImage}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop"
                alt="Heritage Experience"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

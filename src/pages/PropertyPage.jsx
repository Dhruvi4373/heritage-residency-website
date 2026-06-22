import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPropertyById } from '@data/propertiesData';
import { useScrollAnimation } from '@hooks/useScrollAnimation';
import RoomCard from '@components/common/RoomCard';
import styles from './PropertyPage.module.css';

const PropertyPage = () => {
  const { propertyId } = useParams();
  const property = getPropertyById(propertyId);
  const [heroRef, heroVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [roomsRef, roomsVisible] = useScrollAnimation({ once: true, threshold: 0.1 });

  if (!property) {
    return (
      <div className={styles.notFound}>
        <h1>Property Not Found</h1>
        <Link to="/">Return Home</Link>
      </div>
    );
  }

  const getPropertyHeroImage = (id) => {
    const images = {
      'pushp-residency': 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
      'karohi-villa': 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop'
    };
    return images[id];
  };

  return (
    <div className={styles.propertyPage}>
      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <motion.div
          className={styles.heroImage}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={heroVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={getPropertyHeroImage(property.id)} alt={property.name} />
          <div className={styles.heroOverlay} />
        </motion.div>

        <div className={styles.heroContent}>
          <motion.span
            className={styles.heroLabel}
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {property.type}
          </motion.span>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {property.name}
          </motion.h1>

          <motion.p
            className={styles.heroTagline}
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {property.tagline}
          </motion.p>

          <motion.div
            className={styles.heroMeta}
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.heroMetaItem}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 10.625C11.0355 10.625 11.875 9.78553 11.875 8.75C11.875 7.71447 11.0355 6.875 10 6.875C8.96447 6.875 8.125 7.71447 8.125 8.75C8.125 9.78553 8.96447 10.625 10 10.625Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 17.5C12.5 14.375 16.25 10.625 16.25 7.5C16.25 4.04822 13.4518 1.25 10 1.25C6.54822 1.25 3.75 4.04822 3.75 7.5C3.75 10.625 7.5 14.375 10 17.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <span>
                {property.location.city}, {property.location.state}
              </span>
            </div>

            <div className={styles.heroMetaItem}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M2.5 7.5L10 2.5L17.5 7.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V7.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M7.5 17.5V10H12.5V17.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span>{property.rooms.length} Room Categories</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className={`${styles.about} bg-cream`}>
        <div className="container">
          <div className={styles.aboutContent}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.sectionLabel}>About</span>
              <h2 className={styles.sectionTitle}>{property.description}</h2>
              <p className={styles.aboutText}>{property.longDescription}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className={styles.rooms} ref={roomsRef}>
        <div className="container">
          <div className={styles.roomsHeader}>
            <motion.span
              className={styles.sectionLabel}
              initial={{ opacity: 0, y: 20 }}
              animate={roomsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Accommodations
            </motion.span>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={roomsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Our Rooms & Suites
            </motion.h2>
          </div>

          <div className={styles.roomsGrid}>
            {property.rooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} isVisible={roomsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className={`${styles.amenities} bg-cream`}>
        <div className="container">
          <motion.div
            className={styles.amenitiesHeader}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.sectionLabel}>Amenities</span>
            <h2 className={styles.sectionTitle}>Exceptional Services</h2>
          </motion.div>

          <div className={styles.amenitiesGrid}>
            {property.amenities.map((category, index) => (
              <motion.div
                key={category.category}
                className={styles.amenityCategory}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <h3 className={styles.amenityCategoryTitle}>{category.category}</h3>
                <ul className={styles.amenityList}>
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.ctaTitle}>Ready to Experience {property.name}?</h2>
            <p className={styles.ctaText}>
              Contact our reservations team to plan your perfect stay
            </p>
            <div className={styles.ctaActions}>
              <Link to="/contact" className={styles.ctaButton}>
                Make a Reservation
              </Link>
              <a href={`tel:${property.contact.phone}`} className={styles.ctaButtonSecondary}>
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

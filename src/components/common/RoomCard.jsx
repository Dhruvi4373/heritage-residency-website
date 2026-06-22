import { motion } from 'framer-motion';
import styles from './RoomCard.module.css';

const RoomCard = ({ room, index, isVisible }) => {
  const getRoomImage = (roomId) => {
    const images = {
      'executive-suite': 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
      'heritage-room': 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop',
      'premium-deluxe': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
      'royal-lake-view-suite': 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
      'heritage-courtyard-suite': 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop',
      'maharaja-villa-suite': 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop'
    };
    return images[roomId] || images['executive-suite'];
  };

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <div className={styles.cardImage}>
        <img src={getRoomImage(room.id)} alt={room.name} />
        <div className={styles.cardImageOverlay} />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{room.name}</h3>
        
        <div className={styles.cardMeta}>
          <span className={styles.cardMetaItem}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="4" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5 4V3C5 2.44772 5.44772 2 6 2H10C10.5523 2 11 2.44772 11 3V4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {room.size}
          </span>
          <span className={styles.cardMetaItem}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 14C3 11.2386 5.23858 9 8 9C10.7614 9 13 11.2386 13 14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {room.capacity}
          </span>
        </div>

        <p className={styles.cardDescription}>{room.description}</p>

        <div className={styles.cardAmenities}>
          <span className={styles.cardAmenitiesLabel}>Key Amenities</span>
          <ul className={styles.cardAmenitiesList}>
            {room.amenities.slice(0, 4).map((amenity, i) => (
              <li key={i}>{amenity}</li>
            ))}
          </ul>
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.cardPrice}>
            <span className={styles.cardPriceLabel}>Starting from</span>
            <span className={styles.cardPriceValue}>{room.priceRange.split(' - ')[0]}</span>
            <span className={styles.cardPriceUnit}>per night</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;

import { motion } from 'framer-motion';
import styles from './RoomCard.module.css';

const ROOM_IMAGES = {
  'executive-suite':         'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop',
  'heritage-room':           'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
  'premium-deluxe':          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
  'royal-lake-view-suite':   'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
  'heritage-courtyard-suite':'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
  'maharaja-villa-suite':    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop',
};

const RoomCard = ({ room, index, isVisible }) => {
  const img = ROOM_IMAGES[room.id] || ROOM_IMAGES['executive-suite'];

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 48 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image */}
      <div className={styles.imgWrap}>
        <img src={img} alt={room.name} className={styles.img} />
        <div className={styles.imgBadge}>
          <span>{room.size}</span>
          <span className={styles.badgeDot} />
          <span>{room.capacity}</span>
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <h3 className={styles.title}>{room.name}</h3>
        <p className={styles.desc}>{room.description}</p>

        {/* Key amenities */}
        <div className={styles.amenities}>
          <span className={styles.amenLabel}>Key Amenities</span>
          <ul className={styles.amenList}>
            {room.amenities.slice(0, 4).map((a, i) => (
              <li key={i}>
                <span className={styles.amenDot} />
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={styles.priceLabel}>From</span>
            <span className={styles.priceValue}>{room.priceRange.split(' - ')[0]}</span>
            <span className={styles.priceUnit}>&nbsp;/ night</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default RoomCard;

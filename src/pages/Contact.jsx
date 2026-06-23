import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { contactData } from '@data/contactData';
import styles from './Contact.module.css';

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

const Contact = () => {
  const [heroRef, heroVisible] = useInView(0.1);
  const [formRef, formVisible] = useInView(0.08);
  const [mapRef,  mapVisible]  = useInView(0.08);

  const [form, setForm] = useState({
    name: '', email: '', phone: '', property: '', inquiryType: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className={styles.page}>

      {/* ======================================================
          HERO
         ====================================================== */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroInner}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Get in Touch
          </motion.span>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 36 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Plan Your Perfect Stay
          </motion.h1>

          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 28 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            Our dedicated reservations team is here to craft a bespoke experience
            at either of our heritage properties in Rajasthan.
          </motion.p>

          {/* Quick contact pills */}
          <motion.div
            className={styles.heroPills}
            initial={{ opacity: 0, y: 24 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href={`tel:${contactData.corporate.centralReservations.phone}`} className={styles.pill}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.5 10.5c-.8-.8-1.7-1.3-2.5-1.3-.7 0-1.4.4-2 1l-.5.5c-1-.5-2-1.4-2.8-2.2C4.9 7.7 4 6.7 3.5 5.7l.5-.5c.6-.6 1-1.3 1-2 0-.8-.5-1.7-1.3-2.5C3 .1 2.3 0 1.7 0 .8 0 .1.5 0 1.3c-.1.7 0 1.5.3 2.3.7 2 2.2 4 4.2 5.9 2 2 4 3.5 5.9 4.2.8.3 1.6.4 2.3.3.8-.1 1.3-.8 1.3-1.7 0-.6-.1-1.3-.5-1.8Z"
                  fill="currentColor" />
              </svg>
              {contactData.corporate.centralReservations.phone}
            </a>
            <a href={`mailto:${contactData.corporate.centralReservations.email}`} className={styles.pill}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M1 4.5L8 9.5L15 4.5" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              {contactData.corporate.centralReservations.email}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          CONTACT GRID: Info + Form
         ====================================================== */}
      <section className={styles.contactSection} ref={formRef}>
        <div className={styles.contactInner}>

          {/* Left — property info cards */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -40 }}
            animate={formVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {Object.values(contactData.properties).map((prop, i) => (
              <div key={prop.name} className={styles.propCard}>
                <span className={styles.propCardEyebrow}>Property {i + 1}</span>
                <h3 className={styles.propCardName}>{prop.name}</h3>
                <address className={styles.propCardAddr}>
                  {prop.address}<br />
                  {prop.city}, {prop.state} {prop.pincode}
                </address>
                <div className={styles.propCardContacts}>
                  <div className={styles.propContact}>
                    <span className={styles.propContactLabel}>Front Desk</span>
                    <a href={`tel:${prop.contact.frontDesk}`} className={styles.propContactVal}>
                      {prop.contact.frontDesk}
                    </a>
                  </div>
                  <div className={styles.propContact}>
                    <span className={styles.propContactLabel}>Reservations</span>
                    <a href={`tel:${prop.contact.reservations}`} className={styles.propContactVal}>
                      {prop.contact.reservations}
                    </a>
                  </div>
                  <div className={styles.propContact}>
                    <span className={styles.propContactLabel}>Email</span>
                    <a href={`mailto:${prop.contact.email}`} className={styles.propContactVal}>
                      {prop.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.div
            className={styles.formCol}
            initial={{ opacity: 0, x: 40 }}
            animate={formVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Send an Inquiry</h2>

              {submitted ? (
                <div className={styles.successMsg}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" stroke="var(--color-accent)" strokeWidth="1.5" />
                    <path d="M10 16.5L14 20.5L22 12" stroke="var(--color-accent)" strokeWidth="1.8"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p>Thank you! We’ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label htmlFor="name" className={styles.label}>Full Name *</label>
                      <input id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        className={styles.input} placeholder="Your full name" />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="email" className={styles.label}>Email *</label>
                      <input id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        className={styles.input} placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label htmlFor="phone" className={styles.label}>Phone</label>
                      <input id="phone" name="phone" type="tel"
                        value={form.phone} onChange={handleChange}
                        className={styles.input} placeholder="+91 00000 00000" />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="property" className={styles.label}>Property</label>
                      <select id="property" name="property"
                        value={form.property} onChange={handleChange}
                        className={styles.select}>
                        <option value="">Select property</option>
                        <option value="pushp-residency">Pushp Residency</option>
                        <option value="karohi-villa">Karohi Villa</option>
                        <option value="both">Both Properties</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="inquiryType" className={styles.label}>Inquiry Type</label>
                    <select id="inquiryType" name="inquiryType"
                      value={form.inquiryType} onChange={handleChange}
                      className={styles.select}>
                      <option value="">Select type</option>
                      {contactData.inquiryTypes.map(t => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>Message *</label>
                    <textarea id="message" name="message" required rows={5}
                      value={form.message} onChange={handleChange}
                      className={styles.textarea}
                      placeholder="Tell us about your ideal stay, dates, special requests…" />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Send Inquiry
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3.5 9H14.5M14.5 9L9.5 4M14.5 9L9.5 14"
                        stroke="currentColor" strokeWidth="1.4"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          MAPS
         ====================================================== */}
      <section className={styles.maps} ref={mapRef}>
        <div className={styles.mapsInner}>
          <div className={styles.mapsHead}>
            <motion.span
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 18 }}
              animate={mapVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Find Us
            </motion.span>
            <motion.h2
              className={styles.mapsTitle}
              initial={{ opacity: 0, y: 28 }}
              animate={mapVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Our Locations
            </motion.h2>
          </div>

          <div className={styles.mapsGrid}>
            {Object.values(contactData.properties).map((prop, i) => (
              <motion.div
                key={prop.name}
                className={styles.mapCard}
                initial={{ opacity: 0, y: 40 }}
                animate={mapVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.mapCardHead}>
                  <h3 className={styles.mapCardName}>{prop.name}</h3>
                  <p className={styles.mapCardCity}>{prop.city}, {prop.state}</p>
                </div>
                <div className={styles.mapFrame}>
                  <iframe
                    src={prop.mapEmbedUrl}
                    width="100%" height="100%"
                    style={{ border: 0 }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${prop.name} Location`}
                  />
                </div>
                <div className={styles.mapCardAddr}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 7.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z"
                      stroke="currentColor" strokeWidth="1.2" />
                    <path d="M7 12.25C9.1 9.8 11.375 7.7 11.375 5.25a4.375 4.375 0 1 0-8.75 0C2.625 7.7 4.9 9.8 7 12.25Z"
                      stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  {prop.address}, {prop.city} {prop.pincode}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;

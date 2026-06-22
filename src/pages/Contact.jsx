import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@hooks/useScrollAnimation';
import { contactData } from '@data/contactData';
import styles from './Contact.module.css';

const Contact = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    inquiryType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className={styles.contact}>
      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <div className="container">
          <motion.span
            className={styles.heroLabel}
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Get in Touch
          </motion.span>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Plan Your Perfect Stay
          </motion.h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Our dedicated team is here to assist you with reservations, inquiries, and
            personalized experiences at our heritage properties.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className={`${styles.contactSection} bg-cream`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <motion.div
              className={styles.contactInfo}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Central Reservations</h3>
                <div className={styles.infoContent}>
                  <a href={`tel:${contactData.corporate.centralReservations.phone}`} className={styles.infoLink}>
                    {contactData.corporate.centralReservations.phone}
                  </a>
                  <a href={`mailto:${contactData.corporate.centralReservations.email}`} className={styles.infoLink}>
                    {contactData.corporate.centralReservations.email}
                  </a>
                  <p className={styles.infoText}>{contactData.corporate.centralReservations.hours}</p>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Pushp Residency</h3>
                <div className={styles.infoContent}>
                  <p className={styles.infoText}>
                    {contactData.properties.pushpResidency.address}<br />
                    {contactData.properties.pushpResidency.city}, {contactData.properties.pushpResidency.state} {contactData.properties.pushpResidency.pincode}
                  </p>
                  <a href={`tel:${contactData.properties.pushpResidency.contact.frontDesk}`} className={styles.infoLink}>
                    {contactData.properties.pushpResidency.contact.frontDesk}
                  </a>
                  <a href={`mailto:${contactData.properties.pushpResidency.contact.email}`} className={styles.infoLink}>
                    {contactData.properties.pushpResidency.contact.email}
                  </a>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Karohi Villa</h3>
                <div className={styles.infoContent}>
                  <p className={styles.infoText}>
                    {contactData.properties.karohiVilla.address}<br />
                    {contactData.properties.karohiVilla.city}, {contactData.properties.karohiVilla.state} {contactData.properties.karohiVilla.pincode}
                  </p>
                  <a href={`tel:${contactData.properties.karohiVilla.contact.frontDesk}`} className={styles.infoLink}>
                    {contactData.properties.karohiVilla.contact.frontDesk}
                  </a>
                  <a href={`mailto:${contactData.properties.karohiVilla.contact.email}`} className={styles.infoLink}>
                    {contactData.properties.karohiVilla.contact.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="property" className={styles.formLabel}>Property</label>
                    <select
                      id="property"
                      name="property"
                      value={formData.property}
                      onChange={handleChange}
                      className={styles.formSelect}
                    >
                      <option value="">Select a property</option>
                      <option value="pushp-residency">Pushp Residency</option>
                      <option value="karohi-villa">Karohi Villa</option>
                      <option value="both">Both Properties</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="inquiryType" className={styles.formLabel}>Inquiry Type</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={styles.formSelect}
                    >
                      <option value="">Select inquiry type</option>
                      {contactData.inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={styles.formTextarea}
                  />
                </div>

                <button type="submit" className={styles.formSubmit}>
                  Send Inquiry
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10H16M16 10L10 4M16 10L10 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className={styles.maps}>
        <div className={styles.mapsGrid}>
          <motion.div
            className={styles.mapCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.mapHeader}>
              <h3 className={styles.mapTitle}>Pushp Residency</h3>
              <p className={styles.mapAddress}>
                {contactData.properties.pushpResidency.city}, {contactData.properties.pushpResidency.state}
              </p>
            </div>
            <div className={styles.mapFrame}>
              <iframe
                src={contactData.properties.pushpResidency.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pushp Residency Location"
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.mapCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.mapHeader}>
              <h3 className={styles.mapTitle}>Karohi Villa</h3>
              <p className={styles.mapAddress}>
                {contactData.properties.karohiVilla.city}, {contactData.properties.karohiVilla.state}
              </p>
            </div>
            <div className={styles.mapFrame}>
              <iframe
                src={contactData.properties.karohiVilla.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karohi Villa Location"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

export const contactData = {
  corporate: {
    name: 'Hotel Heritage & Residences',
    tagline: 'Luxury Boutique Properties',
    description: 'Experience the finest in heritage hospitality across our curated collection of boutique properties in Rajasthan.',

    headquarters: {
      address: 'Heritage House, 23 Residency Road',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302001',
      country: 'India'
    },

    centralReservations: {
      phone: '+91 141 7100 5000',
      email: 'reservations@heritageresidences.com',
      whatsapp: '+91 98290 00000',
      hours: '24/7 Reservations Support'
    },

    generalInquiries: {
      email: 'info@heritageresidences.com',
      phone: '+91 141 7100 5001',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM IST'
    },

    careers: {
      email: 'careers@heritageresidences.com',
      description: 'Join our team of hospitality professionals'
    },

    partnerships: {
      email: 'partnerships@heritageresidences.com',
      description: 'Corporate bookings, events, and collaborations'
    }
  },

  properties: {
    pushpResidency: {
      name: 'Pushp Residency',
      address: '47-B, Heritage Quarter, Ashok Marg',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302001',
      country: 'India',

      contact: {
        frontDesk: '+91 141 4056 7890',
        reservations: '+91 141 4056 7891',
        email: 'reservations@pushpresidency.com',
        whatsapp: '+91 98290 12345'
      },

      coordinates: {
        lat: 26.9124,
        lng: 75.7873
      },

      /* ── Embed shows Jaipur city centre (Hawa Mahal area) ── */
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0!2d75.82658!3d26.92473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b1d2d3b3b3%3A0x0!2sHawa+Mahal%2C+Jaipur!5e0!3m2!1sen!2sin!4v1700000000001',

      /* ── Direct Google Maps link for the property coordinates ── */
      mapsDirectUrl:
        'https://www.google.com/maps/search/?api=1&query=26.9124,75.7873'
    },

    karohiVilla: {
      name: 'Karohi Villa',
      address: 'Village Karohi, Lake Road',
      city: 'Udaipur',
      state: 'Rajasthan',
      pincode: '313001',
      country: 'India',

      contact: {
        frontDesk: '+91 294 3078 9012',
        reservations: '+91 294 3078 9013',
        email: 'reservations@karohivilla.com',
        whatsapp: '+91 98291 67890'
      },

      coordinates: {
        lat: 24.5854,
        lng: 73.7125
      },

      /* ── Embed shows Udaipur / Lake Pichola area ── */
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.5!2d73.68258!3d24.57880!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56b5e5e5e5f%3A0x0!2sLake+Pichola%2C+Udaipur!5e0!3m2!1sen!2sin!4v1700000000002',

      /* ── Direct Google Maps link for the property coordinates ── */
      mapsDirectUrl:
        'https://www.google.com/maps/search/?api=1&query=24.5854,73.7125'
    }
  },

  socialMedia: {
    instagram: 'https://instagram.com/heritageresidences',
    facebook:  'https://facebook.com/heritageresidences',
    twitter:   'https://twitter.com/heritage_res',
    linkedin:  'https://linkedin.com/company/heritage-residences'
  },

  inquiryTypes: [
    { value: 'reservation', label: 'Room Reservation' },
    { value: 'event',       label: 'Events & Celebrations' },
    { value: 'corporate',   label: 'Corporate Bookings' },
    { value: 'general',     label: 'General Inquiry' },
    { value: 'feedback',    label: 'Feedback & Suggestions' },
    { value: 'careers',     label: 'Career Opportunities' }
  ]
};

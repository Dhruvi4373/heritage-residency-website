export const propertiesData = {
  pushpResidency: {
    id: 'pushp-residency',
    name: 'Pushp Residency',
    tagline: 'Urban Heritage Reimagined',
    type: 'Boutique Hotel & Residences',
    description: 'A contemporary interpretation of heritage luxury in the heart of the city. Pushp Residency seamlessly blends traditional architectural elements with modern sophistication, offering discerning travelers an intimate urban sanctuary.',
    longDescription: 'Nestled in the vibrant cultural district, Pushp Residency stands as a testament to refined urban living. Each space is meticulously crafted to honor traditional design principles while embracing contemporary comfort. From the moment you enter our heritage-inspired lobby to the tranquil privacy of your suite, every detail reflects our commitment to exceptional hospitality.',
    
    location: {
      address: '47-B, Heritage Quarter, Ashok Marg',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302001',
      country: 'India',
      coordinates: {
        lat: 26.9124,
        lng: 75.7873
      },
      landmarks: [
        'City Palace - 2.3 km',
        'Hawa Mahal - 1.8 km',
        'Jantar Mantar - 2.1 km',
        'Albert Hall Museum - 3.5 km'
      ]
    },
    
    contact: {
      phone: '+91 141 4056 7890',
      reservations: '+91 141 4056 7891',
      email: 'reservations@pushpresidency.com',
      whatsapp: '+91 98290 12345'
    },
    
    rooms: [
      {
        id: 'executive-suite',
        name: 'Executive Suite',
        size: '450 sq ft',
        capacity: '2 Adults',
        description: 'Sophisticated urban retreat featuring contemporary design with heritage accents. Floor-to-ceiling windows frame city views while handcrafted furnishings create an atmosphere of refined comfort.',
        amenities: [
          'King-size bed with premium linens',
          'Marble bathroom with rain shower',
          'Work desk with ergonomic seating',
          'Smart TV with streaming services',
          'Minibar and Nespresso machine',
          'Climate control',
          'Complimentary high-speed WiFi'
        ],
        priceRange: '₹8,500 - ₹12,000',
        images: [
          '/images/pushp/executive-suite-1.jpg',
          '/images/pushp/executive-suite-2.jpg'
        ]
      },
      {
        id: 'heritage-room',
        name: 'Heritage Room',
        size: '380 sq ft',
        capacity: '2 Adults',
        description: 'Intimate spaces adorned with traditional Rajasthani artwork and handwoven textiles. Each room tells a story through carefully curated design elements that celebrate local craftsmanship.',
        amenities: [
          'Queen-size heritage-style bed',
          'Traditional jharokha seating nook',
          'Handcrafted wooden furniture',
          'Marble bathroom with premium toiletries',
          'Smart TV and WiFi',
          'Tea/coffee making facilities',
          'City or courtyard views'
        ],
        priceRange: '₹6,500 - ₹9,000',
        images: [
          '/images/pushp/heritage-room-1.jpg',
          '/images/pushp/heritage-room-2.jpg'
        ]
      },
      {
        id: 'premium-deluxe',
        name: 'Premium Deluxe',
        size: '550 sq ft',
        capacity: '2 Adults + 1 Child',
        description: 'Spacious accommodations designed for extended stays and families. Modern amenities complement traditional design, creating a perfect balance of comfort and cultural authenticity.',
        amenities: [
          'King-size bed with sitting area',
          'Separate living space',
          'Large marble bathroom with bathtub',
          'Walk-in wardrobe',
          'Work station',
          'Premium entertainment system',
          'Private balcony',
          'Butler service available'
        ],
        priceRange: '₹12,000 - ₹16,000',
        images: [
          '/images/pushp/premium-deluxe-1.jpg',
          '/images/pushp/premium-deluxe-2.jpg'
        ]
      }
    ],
    
    amenities: [
      {
        category: 'Dining',
        items: [
          'Rooftop restaurant with city views',
          'All-day dining café',
          'Private dining experiences',
          'In-room dining 24/7',
          'Curated wine and spirits collection'
        ]
      },
      {
        category: 'Wellness',
        items: [
          'Fitness center with modern equipment',
          'Yoga and meditation sessions',
          'Spa treatment rooms',
          'Steam and sauna facilities'
        ]
      },
      {
        category: 'Business',
        items: [
          'Business center',
          'Meeting rooms',
          'High-speed WiFi throughout',
          'Secretarial services'
        ]
      },
      {
        category: 'Services',
        items: [
          '24-hour concierge',
          'Valet parking',
          'Airport transfers',
          'Laundry and dry cleaning',
          'Tour and travel desk',
          'Currency exchange'
        ]
      }
    ],
    
    experiences: [
      'Heritage walking tours',
      'Cooking classes with local chefs',
      'Rooftop sunset cocktails',
      'Art gallery visits',
      'Traditional craft workshops'
    ],
    
    heroImage: '/images/pushp/hero.jpg',
    galleryImages: [
      '/images/pushp/exterior.jpg',
      '/images/pushp/lobby.jpg',
      '/images/pushp/restaurant.jpg',
      '/images/pushp/rooftop.jpg',
      '/images/pushp/courtyard.jpg'
    ],

    nearbyPlaces: [
      {
        id: 'hawa-mahal',
        name: 'Hawa Mahal',
        distance: '1.8 km',
        category: 'Heritage Monument',
        description: 'The iconic Palace of Winds — a five-storey sandstone façade of 953 latticed windows, built in 1799 for royal ladies to observe street life unseen.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 'city-palace-jaipur',
        name: 'City Palace',
        distance: '2.3 km',
        category: 'Royal Palace',
        description: 'A magnificent complex of courtyards, gardens and buildings blending Rajput, Mughal and European architectural styles at the heart of the Pink City.',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 'jantar-mantar',
        name: 'Jantar Mantar',
        distance: '2.1 km',
        category: 'UNESCO World Heritage',
        description: 'An 18th-century astronomical observatory housing the world\'s largest stone sundial — a UNESCO World Heritage Site of extraordinary scientific precision.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 'albert-hall',
        name: 'Albert Hall Museum',
        distance: '3.5 km',
        category: 'Museum',
        description: 'Rajasthan\'s oldest museum, housed in a stunning Indo-Saracenic building, displaying a rich collection of artifacts, paintings, carpets and crystal works.',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 'nahargarh-fort',
        name: 'Nahargarh Fort',
        distance: '6 km',
        category: 'Hill Fort',
        description: 'Perched on the Aravalli ridge, this 18th-century fort offers sweeping panoramic views of Jaipur city — especially breathtaking at sunset.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 'johari-bazaar',
        name: 'Johari Bazaar',
        distance: '2.8 km',
        category: 'Heritage Market',
        description: 'Jaipur\'s legendary jewellery market — a vibrant street of gem traders, goldsmiths and textile merchants that has thrived for over three centuries.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop'
      }
    ]
  },
  
  karohiVilla: {
    id: 'karohi-villa',
    name: 'Karohi Villa',
    tagline: 'Lakeside Heritage Sanctuary',
    type: 'Luxury Heritage Villa',
    description: 'An exclusive lakeside retreat where centuries-old architectural grandeur meets contemporary luxury. Karohi Villa offers an immersive experience in traditional Rajasthani hospitality, set against the serene backdrop of pristine waters and rolling hills.',
    longDescription: 'Perched on the tranquil shores of Lake Karohi, this meticulously restored heritage villa embodies the romance and splendor of royal Rajasthan. Every stone, every archway, and every courtyard whispers tales of a bygone era. With just twelve exclusive suites, Karohi Villa ensures an intimate and personalized experience, where modern comforts are seamlessly woven into the fabric of authentic heritage architecture.',
    
    location: {
      address: 'Village Karohi, Lake Road',
      city: 'Udaipur',
      state: 'Rajasthan',
      pincode: '313001',
      country: 'India',
      coordinates: {
        lat: 24.5854,
        lng: 73.7125
      },
      landmarks: [
        'Lake Pichola - 8 km',
        'City Palace Udaipur - 9 km',
        'Jag Mandir - 10 km',
        'Sajjangarh Fort - 12 km'
      ]
    },
    
    contact: {
      phone: '+91 294 3078 9012',
      reservations: '+91 294 3078 9013',
      email: 'reservations@karohivilla.com',
      whatsapp: '+91 98291 67890'
    },
    
    rooms: [
      {
        id: 'royal-lake-view-suite',
        name: 'Royal Lake View Suite',
        size: '750 sq ft',
        capacity: '2 Adults',
        description: 'Palatial suites with panoramic lake vistas through traditional jharokha windows. Ornate frescoes, antique furnishings, and silk drapery create an atmosphere of regal elegance.',
        amenities: [
          'Four-poster king bed with canopy',
          'Private lakeside balcony with jharokha seating',
          'Marble bathroom with copper bathtub',
          'Separate dressing area',
          'Antique writing desk',
          'Traditional swing (jhula)',
          'Premium entertainment system',
          'Personal butler service'
        ],
        priceRange: '₹18,000 - ₹25,000',
        images: [
          '/images/karohi/royal-suite-1.jpg',
          '/images/karohi/royal-suite-2.jpg'
        ]
      },
      {
        id: 'heritage-courtyard-suite',
        name: 'Heritage Courtyard Suite',
        size: '650 sq ft',
        capacity: '2 Adults',
        description: 'Suites opening onto private courtyards adorned with fountains and traditional gardens. Hand-painted walls and carved wooden ceilings showcase authentic Rajasthani artistry.',
        amenities: [
          'King-size heritage bed',
          'Private courtyard with fountain',
          'Traditional seating area with cushions',
          'Marble bathroom with rain shower',
          'Handcrafted furniture',
          'Minibar with curated selections',
          'WiFi and entertainment system',
          'Complimentary evening tea service'
        ],
        priceRange: '₹14,000 - ₹19,000',
        images: [
          '/images/karohi/courtyard-suite-1.jpg',
          '/images/karohi/courtyard-suite-2.jpg'
        ]
      },
      {
        id: 'maharaja-villa-suite',
        name: 'Maharaja Villa Suite',
        size: '1200 sq ft',
        capacity: '2 Adults + 2 Children',
        description: 'The crown jewel of Karohi Villa. This two-bedroom suite features a private plunge pool, expansive terraces, and interiors adorned with museum-quality artifacts and textiles.',
        amenities: [
          'Two king bedrooms with ensuite bathrooms',
          'Private plunge pool',
          'Expansive lake-view terrace',
          'Separate living and dining areas',
          'Copper bathtub and rain shower',
          'Walk-in wardrobes',
          'Kitchenette',
          'Dedicated butler and chef service',
          'Private dining arrangements'
        ],
        priceRange: '₹35,000 - ₹50,000',
        images: [
          '/images/karohi/maharaja-suite-1.jpg',
          '/images/karohi/maharaja-suite-2.jpg'
        ]
      }
    ],
    
    amenities: [
      {
        category: 'Dining',
        items: [
          'Lakeside fine dining restaurant',
          'Traditional Rajasthani thali experiences',
          'Rooftop barbecue dinners',
          'Private candlelit dinners by the lake',
          'Organic farm-to-table cuisine',
          'Curated wine cellar'
        ]
      },
      {
        category: 'Wellness',
        items: [
          'Full-service spa with Ayurvedic treatments',
          'Yoga pavilion overlooking the lake',
          'Meditation gardens',
          'Infinity pool',
          'Traditional hammam',
          'Fitness center'
        ]
      },
      {
        category: 'Recreation',
        items: [
          'Private boat rides on the lake',
          'Vintage car collection tours',
          'Library with rare books',
          'Billiards room',
          'Traditional games courtyard'
        ]
      },
      {
        category: 'Services',
        items: [
          '24-hour butler service',
          'Personalized concierge',
          'Helicopter transfers',
          'Private chauffeur services',
          'Event planning and coordination',
          'Photography services'
        ]
      }
    ],
    
    experiences: [
      'Sunset boat rides with champagne',
      'Traditional puppet shows',
      'Folk music and dance performances',
      'Heritage village tours',
      'Cooking masterclasses with royal recipes',
      'Vintage car excursions',
      'Stargazing sessions',
      'Private yoga and meditation retreats'
    ],
    
    heroImage: '/images/karohi/hero.jpg',
    galleryImages: [
      '/images/karohi/exterior-lake.jpg',
      '/images/karohi/courtyard.jpg',
      '/images/karohi/pool.jpg',
      '/images/karohi/dining.jpg',
      '/images/karohi/terrace.jpg'
    ],

    nearbyPlaces: [
      {
        id: 'lake-pichola',
        name: 'Lake Pichola',
        distance: '8 km',
        category: 'Scenic Lake',
        description: 'An artificial freshwater lake created in 1362 AD, framed by palaces, temples and ghats — the shimmering soul of Udaipur\'s romantic landscape.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 'city-palace-udaipur',
        name: 'City Palace Udaipur',
        distance: '9 km',
        category: 'Royal Palace',
        description: 'The largest palace complex in Rajasthan, rising majestically above Lake Pichola — a layered tapestry of Rajput and Mughal architecture spanning four centuries.',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 'jag-mandir',
        name: 'Jag Mandir',
        distance: '10 km',
        category: 'Island Palace',
        description: 'A 17th-century palace built on an island in Lake Pichola, once sheltering the Mughal prince Shah Jahan — accessible only by a serene boat ride.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 'sajjangarh-fort',
        name: 'Sajjangarh Fort',
        distance: '12 km',
        category: 'Monsoon Palace',
        description: 'The ethereal Monsoon Palace crowning the Aravalli hills — built to watch monsoon clouds roll in, now offering unrivalled sunset views over Udaipur.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 'bagore-ki-haveli',
        name: 'Bagore Ki Haveli',
        distance: '9.5 km',
        category: 'Heritage Haveli',
        description: 'An 18th-century lakeside haveli with 138 rooms, housing a museum of royal costumes and hosting nightly Rajasthani folk dance performances.',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 'shilpgram',
        name: 'Shilpgram',
        distance: '5 km',
        category: 'Craft Village',
        description: 'A living rural arts and crafts complex celebrating the folk traditions of western India — with artisan demonstrations, tribal huts and open-air performances.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop'
      }
    ]
  }
};

export const getPropertyById = (id) => {
  return Object.values(propertiesData).find(property => property.id === id);
};

export const getAllProperties = () => {
  return Object.values(propertiesData);
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "I was hesitant about switching to electric, but after my first week with the Model S, I'm never going back. The acceleration is incredible, and the convenience of charging at home has changed my daily routine completely.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The range anxiety I had before purchasing was completely unfounded. I easily get 300+ miles on a single charge, and the navigation system automatically plans charging stops on longer trips. It's been a game-changer for our family road trips.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Environmental Lawyer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    content: "As someone passionate about sustainability, switching to electric was a no-brainer. What surprised me was how much better the driving experience is compared to any gas car I've owned. Smooth, quiet, and incredibly responsive.",
    rating: 5
  }
];

export const buyingProcess = [
  {
    id: 1,
    title: "Explore Models",
    description: "Compare our range of electric vehicles to find the perfect match for your lifestyle and driving needs.",
    icon: "Search"
  },
  {
    id: 2,
    title: "Customize & Configure",
    description: "Select colors, interior options, and additional features to personalize your electric vehicle.",
    icon: "Settings"
  },
  {
    id: 3,
    title: "Test Drive",
    description: "Schedule a test drive to experience the electric performance and cutting-edge technology firsthand.",
    icon: "Car"
  },
  {
    id: 4,
    title: "Finance & Delivery",
    description: "Work with our specialists to arrange financing and delivery options that work for you.",
    icon: "CheckCircle"
  }
];

export const evModels = [
  {
    id: 'model-s',
    name: 'Model S',
    tagline: 'The Original Electric Sedan',
    price: 74999,
    range: 405,
    acceleration: '0-60 in 3.1s',
    topSpeed: 155,
    power: 670,
    seats: 5,
    image: 'https://images.unsplash.com/photo-1617655491082-2f2e8c9a0c6c?w=800&h=600&fit=crop',
    features: ['Autopilot', 'Premium Audio', 'Heated Seats', 'Panoramic Roof'],
    availableColors: ['Pearl White', 'Solid Black', 'Midnight Silver', 'Deep Blue', 'Red Multi-Coat']
  },
  {
    id: 'model-x',
    name: 'Model X',
    tagline: 'Family SUV, Reimagined',
    price: 89999,
    range: 348,
    acceleration: '0-60 in 2.5s',
    topSpeed: 155,
    power: 670,
    seats: 7,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bac6851feb?w=800&h=600&fit=crop',
    features: ['Falcon Wing Doors', 'Autopilot', 'Premium Audio', 'Heated Seats'],
    availableColors: ['Pearl White', 'Solid Black', 'Midnight Silver', 'Deep Blue', 'Red Multi-Coat']
  },
  {
    id: 'model-y',
    name: 'Model Y',
    tagline: 'Compact SUV, Maximum Versatility',
    price: 62999,
    range: 330,
    acceleration: '0-60 in 3.5s',
    topSpeed: 135,
    power: 384,
    seats: 7,
    image: 'https://images.unsplash.com/photo-1617655491082-2f2e8c9a0c6c?w=800&h=600&fit=crop',
    features: ['Autopilot', 'Premium Audio', 'Heated Seats', 'All-Wheel Drive'],
    availableColors: ['Pearl White', 'Solid Black', 'Midnight Silver', 'Deep Blue', 'Red Multi-Coat']
  }
];

export const chargingNetwork = {
  totalStations: 50000,
  superchargers: 25000,
  destinationChargers: 15000,
  partnerLocations: 10000,
  averagePower: 150,
  features: [
    'Find stations along your route',
    'Monitor charging progress',
    'Precondition battery',
    'Pay automatically'
  ]
};

export const technologyFeatures = [
  {
    id: 1,
    title: "Autopilot",
    description: "Advanced driver assistance system for stress-free driving on highways and in city traffic.",
    icon: "Zap"
  },
  {
    id: 2,
    title: "Full Self-Driving",
    description: "Navigate on Autopilot, Auto Lane Change, Autopark, Summon, and Smart Summon capabilities.",
    icon: "Navigation"
  },
  {
    id: 3,
    title: "Over-the-Air Updates",
    description: "Your vehicle gets better over time with regular software updates that add new features.",
    icon: "Download"
  },
  {
    id: 4,
    title: "Mobile App Control",
    description: "Lock/unlock, monitor charging, precondition climate, and locate your vehicle from anywhere.",
    icon: "Smartphone"
  },
  {
    id: 5,
    title: "Premium Audio",
    description: "Immersive sound system with 14 speakers, 1 subwoofer, and 2 amplifiers for concert-quality audio.",
    icon: "Volume2"
  },
  {
    id: 6,
    title: "Glass Roof",
    description: " panoramic glass roof with UV and infrared protection for an expansive view and spacious feel.",
    icon: "Sun"
  }
];

export const pricingPlans = [
  {
    id: 'standard',
    name: 'Standard',
    price: 49999,
    features: [
      '250+ mile range',
      'Interior premium materials',
      '15" touchscreen display',
      'Mobile app access',
      'Basic Autopilot'
    ],
    recommended: false
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 62999,
    features: [
      '330+ mile range',
      'Premium interior materials',
      '15" touchscreen display',
      'Mobile app access',
      'Enhanced Autopilot',
      'Premium audio system',
      'Heated seats'
    ],
    recommended: true
  },
  {
    id: 'performance',
    name: 'Performance',
    price: 89999,
    features: [
      '350+ mile range',
      'Performance interior materials',
      '17" touchscreen display',
      'Mobile app access',
      'Full Self-Driving',
      'Premium audio system',
      'Heated & ventilated seats',
      'Performance acceleration',
      'Track mode'
    ],
    recommended: false
  }
];
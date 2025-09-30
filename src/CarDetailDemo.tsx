import React from 'react'
import { CarDetailGallery } from '../ui/components/automotive'
import type { 
  Vehicle, 
  VehicleImage, 
  VehicleSpecification, 
  VehicleFeature, 
  PriceBreakdownItem, 
  FinancingOption, 
  DealerInfo,
  ContactFormData
} from '../ui/components/automotive'

// Sample data for demo
const sampleVehicle: Vehicle = {
  id: 'demo-tesla-model-s-2024',
  make: 'Tesla',
  model: 'Model S',
  year: 2024,
  trim: 'Plaid',
  price: 89990,
  msrp: 94990,
  availability: 'available',
  mileage: 12,
  condition: 'new',
  vin: '5YJ3E1EA4PF123456',
  stockNumber: 'TS24001'
}

const sampleImages: VehicleImage[] = [
  {
    id: 'img-1',
    url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    alt: 'Tesla Model S Plaid - Front View',
    category: 'exterior',
    isPrimary: true,
    thumbnailUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=200&q=80',
    highResUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80'
  },
  {
    id: 'img-2',
    url: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
    alt: 'Tesla Model S Plaid - Side Profile',
    category: 'exterior',
    isPrimary: false,
    thumbnailUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&q=80',
    highResUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80'
  },
  {
    id: 'img-3',
    url: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80',
    alt: 'Tesla Model S Plaid - Interior Dashboard',
    category: 'interior',
    isPrimary: false,
    thumbnailUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&q=80',
    highResUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&q=80'
  },
  {
    id: 'img-4',
    url: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80',
    alt: 'Tesla Model S Plaid - Rear View',
    category: 'exterior',
    isPrimary: false,
    thumbnailUrl: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=200&q=80',
    highResUrl: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=1200&q=80'
  },
  {
    id: 'img-5',
    url: 'https://images.unsplash.com/photo-1619976215465-76c62f9d9c71?w=800&q=80',
    alt: 'Tesla Model S Plaid - Interior Seats',
    category: 'interior',
    isPrimary: false,
    thumbnailUrl: 'https://images.unsplash.com/photo-1619976215465-76c62f9d9c71?w=200&q=80',
    highResUrl: 'https://images.unsplash.com/photo-1619976215465-76c62f9d9c71?w=1200&q=80'
  },
  {
    id: 'img-6',
    url: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&q=80',
    alt: 'Tesla Model S Plaid - Charging Port',
    category: 'features',
    isPrimary: false,
    thumbnailUrl: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=200&q=80',
    highResUrl: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=1200&q=80'
  }
]

const sampleSpecifications: VehicleSpecification[] = [
  {
    category: 'Performance',
    specs: [
      { label: 'Acceleration (0-60 mph)', value: '1.99 sec' },
      { label: 'Top Speed', value: '200 mph' },
      { label: 'Quarter Mile', value: '9.23 sec' },
      { label: 'Peak Power', value: '1,020 hp' },
      { label: 'Peak Torque', value: '1,050 lb-ft' }
    ]
  },
  {
    category: 'Range & Charging',
    specs: [
      { label: 'Range (EPA est.)', value: '396 miles' },
      { label: 'Supercharging Max', value: '250 kW' },
      { label: 'Onboard Charger', value: '11.5 kW' },
      { label: 'Charge Port', value: 'NACS' },
      { label: 'Cold Weather Range', value: '315 miles' }
    ]
  },
  {
    category: 'Dimensions',
    specs: [
      { label: 'Length', value: '196.0 in' },
      { label: 'Width', value: '77.3 in' },
      { label: 'Height', value: '56.9 in' },
      { label: 'Wheelbase', value: '116.5 in' },
      { label: 'Ground Clearance', value: '5.7 in' }
    ]
  },
  {
    category: 'Cargo & Seating',
    specs: [
      { label: 'Seating', value: '5 adults' },
      { label: 'Front Trunk', value: '5.3 cu ft' },
      { label: 'Rear Trunk', value: '28.0 cu ft' },
      { label: 'Total Storage', value: '33.3 cu ft' },
      { label: 'Towing Capacity', value: '2,500 lbs' }
    ]
  }
]

const sampleFeatures: VehicleFeature[] = [
  {
    id: 'autopilot',
    name: 'Enhanced Autopilot',
    description: 'Navigate on Autopilot, Auto Lane Change, Autopark',
    included: true,
    category: 'standard'
  },
  {
    id: 'glass-roof',
    name: 'Glass Roof',
    description: 'Panoramic all-glass roof with UV protection',
    included: true,
    category: 'standard'
  },
  {
    id: 'premium-audio',
    name: 'Premium Audio System',
    description: '22-speaker, 960-watt premium sound system',
    included: true,
    category: 'standard'
  },
  {
    id: 'heated-seats',
    name: 'Heated & Ventilated Seats',
    description: 'Front and rear heated seats with ventilation',
    included: true,
    category: 'standard'
  },
  {
    id: 'air-suspension',
    name: 'Adaptive Air Suspension',
    description: 'Automatically adjusts ride height and comfort',
    included: true,
    category: 'standard'
  },
  {
    id: 'carbon-fiber',
    name: 'Carbon Fiber Interior',
    description: 'Carbon fiber dashboard and door panels',
    included: true,
    category: 'standard'
  },
  {
    id: 'fsd',
    name: 'Full Self-Driving Capability',
    description: 'Complete autonomous driving when regulations permit',
    included: false,
    category: 'optional'
  },
  {
    id: 'premium-paint',
    name: 'Multi-Coat Premium Paint',
    description: 'Pearl White, Solid Black, Midnight Silver, Deep Blue, or Pearl Red',
    included: false,
    category: 'optional'
  }
]

const samplePriceBreakdown: PriceBreakdownItem[] = [
  {
    label: 'Tesla Model S Plaid',
    amount: 89990,
    type: 'base',
    description: 'Base vehicle price'
  },
  {
    label: 'Destination & Doc Fee',
    amount: 1390,
    type: 'fee',
    description: 'Delivery and documentation charges'
  },
  {
    label: 'Federal Tax Credit',
    amount: -7500,
    type: 'discount',
    description: 'Federal EV tax incentive'
  },
  {
    label: 'State Sales Tax (8.25%)',
    amount: 6824,
    type: 'tax',
    description: 'Estimated state sales tax'
  }
]

const sampleFinancingOptions: FinancingOption[] = [
  {
    type: 'finance',
    monthlyPayment: 1499,
    downPayment: 10000,
    termMonths: 60,
    apr: 3.9,
    description: 'Excellent credit financing with competitive rates'
  },
  {
    type: 'lease',
    monthlyPayment: 899,
    downPayment: 5000,
    termMonths: 36,
    apr: 0,
    description: '10,000 miles/year, $0.25/mile thereafter'
  },
  {
    type: 'cash',
    monthlyPayment: 0,
    downPayment: 90704,
    termMonths: 0,
    apr: 0,
    description: 'Full cash payment with no financing needed'
  }
]

const sampleDealer: DealerInfo = {
  id: 'tesla-sf',
  name: 'Tesla San Francisco',
  address: '851 Cherry Ave, San Bruno, CA 94066',
  phone: '(650) 681-5100',
  email: 'sanfrancisco@tesla.com',
  website: 'https://tesla.com',
  hours: 'Mon-Sat 10am-9pm, Sun 10am-7pm',
  rating: 4.5,
  distance: 12.3
}

export const CarDetailDemo: React.FC = () => {
  const handleContactSubmit = async (formData: ContactFormData) => {
    // Simulate API call
    console.log('Contact form submitted:', formData)
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In a real app, this would make an API call to submit the form
    // For demo purposes, we'll just log the data and simulate success
    return Promise.resolve()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <CarDetailGallery
          vehicle={sampleVehicle}
          images={sampleImages}
          specifications={sampleSpecifications}
          features={sampleFeatures}
          priceBreakdown={samplePriceBreakdown}
          financingOptions={sampleFinancingOptions}
          dealer={sampleDealer}
          onContactSubmit={handleContactSubmit}
        />
      </div>
    </div>
  )
}
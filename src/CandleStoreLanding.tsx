import React from 'react';
import { 
  RestaurantHero, 
  MenuShowcase, 
  FeatureGrid, 
  RestaurantFooter 
} from '@/ui/components/restaurant';
import { Star } from 'lucide-react';
import type { 
  DishCardProps,
  FeatureCardProps,
  BadgeItem,
  NavLink,
  ReservationData
} from '@/ui/components/types/restaurant.types';

// Candle product data adapted for DishCard
const candleProducts: DishCardProps[] = [
  {
    name: 'Lavender Dreams',
    category: 'Relaxation',
    subcategory: 'Floral',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    onClick: () => console.log('View Lavender Dreams')
  },
  {
    name: 'Vanilla Bean',
    category: 'Comfort',
    subcategory: 'Sweet',
    image: 'https://images.unsplash.com/photo-1606932506561-32b62bee5af5?w=400&h=400&fit=crop',
    onClick: () => console.log('View Vanilla Bean')
  },
  {
    name: 'Sandalwood Sanctuary',
    category: 'Meditation',
    subcategory: 'Woody',
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=400&fit=crop',
    onClick: () => console.log('View Sandalwood Sanctuary')
  },
  {
    name: 'Citrus Burst',
    category: 'Energy',
    subcategory: 'Citrus',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
    onClick: () => console.log('View Citrus Burst')
  },
  {
    name: 'Ocean Mist',
    category: 'Fresh',
    subcategory: 'Aquatic',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
    onClick: () => console.log('View Ocean Mist')
  },
  {
    name: 'Spiced Autumn',
    category: 'Seasonal',
    subcategory: 'Spicy',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    onClick: () => console.log('View Spiced Autumn')
  }
];

// Feature items for the feature grid
const features: FeatureCardProps[] = [
  {
    title: 'Handcrafted Excellence',
    description: 'Each candle is meticulously hand-poured using premium soy wax and lead-free cotton wicks for a clean, even burn.',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&h=400&fit=crop',
    badge: 'Artisan Made',
    badgeColor: 'amber',
    size: 'large',
    ctas: [
      { label: 'Learn More', href: '#craftsmanship' },
      { label: 'Shop Now', href: '#products' }
    ]
  },
  {
    title: 'Natural Ingredients',
    description: 'We use only the finest essential oils and natural fragrances, free from parabens and harsh chemicals.',
    image: 'https://images.unsplash.com/photo-1606932506561-32b62bee5af5?w=600&h=400&fit=crop',
    badge: 'Eco-Friendly',
    badgeColor: 'green',
    size: 'small'
  },
  {
    title: 'Long-Lasting Fragrance',
    description: 'Our proprietary scent blend technology ensures your candle delivers consistent fragrance from first light to last.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=400&fit=crop',
    badge: 'Premium Quality',
    badgeColor: 'purple',
    size: 'small'
  },
  {
    title: 'Ethical Sourcing',
    description: 'We partner with sustainable farms and ethical suppliers to ensure our ingredients are both high-quality and responsibly sourced.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    badge: 'Conscious',
    badgeColor: 'blue',
    size: 'small'
  }
];

// Hero badges
const badges: BadgeItem[] = [
  { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>', label: 'Handcrafted' },
  { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>', label: 'Made with Love' },
  { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>', label: 'Premium Quality' }
];

// Navigation links
const navLinks: NavLink[] = [
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Craftsmanship', href: '#craftsmanship' },
  { label: 'Contact', href: '#contact' }
];

// Hero images
const heroImages = [
  { 
    src: 'https://images.unsplash.com/photo-1596178065887-11982b9577af?w=100&h=100&fit=crop', 
    alt: 'Lavender candle',
    className: "inline-block align-middle h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 ring-1 ring-neutral-200 object-cover rounded-xl mr-2 ml-2"
  },
  { 
    src: 'https://images.unsplash.com/photo-1606932506561-32b62bee5af5?w=100&h=100&fit=crop', 
    alt: 'Vanilla candle',
    className: "inline-block align-middle h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 ring-1 ring-neutral-200 object-cover rounded-xl mr-2 ml-2"
  }
];

// Stats Section Component
const StatsSection: React.FC = () => {
  return (
    <section className="w-full sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
      <div className="bg-white rounded-3xl ring-1 ring-neutral-200 p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">50K+</div>
            <div className="text-sm text-neutral-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">100+</div>
            <div className="text-sm text-neutral-600">Scent Varieties</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">4.9★</div>
            <div className="text-sm text-neutral-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">100%</div>
            <div className="text-sm text-neutral-600">Natural Ingredients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "These candles transformed my home into a peaceful sanctuary. The quality is outstanding and the scents are absolutely divine!",
      author: "Sarah Mitchell",
      role: "Yoga Instructor",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
    },
    {
      quote: "I've tried many candle brands, but none compare to the craftsmanship and attention to detail. Worth every penny!",
      author: "Michael Chen",
      role: "Interior Designer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      quote: "The burn time is incredible and the scents last long after the candle is extinguished. Simply magical!",
      author: "Emma Rodriguez",
      role: "Wellness Coach",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <section className="w-full sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-playfair mb-4">
          What Our Customers Say
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Join thousands of happy customers who've transformed their spaces with our candles.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-3xl ring-1 ring-neutral-200 p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.author}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-semibold text-neutral-900">{testimonial.author}</h4>
                <p className="text-sm text-neutral-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-neutral-700 italic">"{testimonial.quote}"</p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const CandleStoreLanding: React.FC = () => {
  const handleReservationSubmit = (data: ReservationData) => {
    console.log('Contact form submitted:', data);
    // Here you would handle the form submission
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <RestaurantHero
        brandName="Lumière Candles"
        headline="Illuminate Your Space with [IMG:0] Premium [IMG:1] Handcrafted Candles"
        description="Discover our collection of premium handcrafted candles, designed to transform your home into a sanctuary of peace and tranquility. Each candle is meticulously crafted with the finest ingredients."
        badges={badges}
        primaryCTA={{ label: 'Shop Collection', href: '#products' }}
        secondaryCTA={{ label: 'Our Story', href: '#about' }}
        navLinks={navLinks}
        heroImages={heroImages}
      />

      {/* Stats Section */}
      <StatsSection />

      {/* Products Section */}
      <MenuShowcase
        title="Our Signature Collection"
        subtitle="(01) Candles"
        description="Each candle is a masterpiece, crafted with care to bring warmth and fragrance to your space."
        dishes={candleProducts}
        ctaText="View All Products"
        ctaHref="#products"
      />

      {/* Features Section */}
      <FeatureGrid
        title="Crafted with Care, Sourced with Purpose"
        subtitle="Why Choose Us"
        description="Every candle tells a story of quality, sustainability, and artisanal excellence."
        features={features}
      />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <RestaurantFooter
        brandName="Lumière Candles"
        description="Handcrafted candles that illuminate your life with warmth and fragrance. Each candle is meticulously poured using premium soy wax and the finest essential oils."
        address="123 Candle Lane, Fragrance City, FC 12345"
        hours="Mon-Fri: 9AM-6PM, Sat-Sun: 10AM-4PM"
        phoneNumber="+1 (555) 123-4567"
        reservationFeatures={[
          'Free shipping on orders over $50',
          'Handcrafted with 100% natural ingredients',
          '30-day satisfaction guarantee',
          'Gift wrapping available for special occasions'
        ]}
        onReservationSubmit={handleReservationSubmit}
      />
    </div>
  );
};

export default CandleStoreLanding;

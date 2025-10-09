import React, { useState } from 'react';
import { FeatureGrid } from '@/ui/components/feature-grid';
import { TestimonialCard } from '@/ui/components/testimonials';
import { 
  Sparkles, 
  Flame, 
  Heart, 
  Leaf, 
  Star,
  ShoppingBag,
  Clock
} from 'lucide-react';

interface CandleProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  scent: string;
  burnTime: string;
}

const candleProducts: CandleProduct[] = [
  {
    id: '1',
    name: 'Lavender Dreams',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    description: 'Calming lavender with hints of chamomile',
    category: 'Relaxation',
    scent: 'Floral',
    burnTime: '50 hours'
  },
  {
    id: '2', 
    name: 'Vanilla Bean',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1606932506561-32b62bee5af5?w=400&h=400&fit=crop',
    description: 'Rich vanilla with warm undertones',
    category: 'Comfort',
    scent: 'Sweet',
    burnTime: '45 hours'
  },
  {
    id: '3',
    name: 'Sandalwood Sanctuary',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=400&fit=crop',
    description: 'Earthy sandalwood with cedar notes',
    category: 'Meditation',
    scent: 'Woody',
    burnTime: '60 hours'
  },
  {
    id: '4',
    name: 'Citrus Burst',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
    description: 'Energizing lemon and grapefruit blend',
    category: 'Energy',
    scent: 'Citrus',
    burnTime: '40 hours'
  },
  {
    id: '5',
    name: 'Ocean Mist',
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
    description: 'Fresh sea salt with marine notes',
    category: 'Fresh',
    scent: 'Aquatic',
    burnTime: '55 hours'
  },
  {
    id: '6',
    name: 'Spiced Autumn',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    description: 'Cinnamon, nutmeg, and clove blend',
    category: 'Seasonal',
    scent: 'Spicy',
    burnTime: '50 hours'
  }
];

const testimonials = [
  {
    id: '1',
    quote: "These candles transformed my home into a peaceful sanctuary. The quality is outstanding and the scents are absolutely divine!",
    author: {
      name: "Sarah Mitchell",
      role: "Yoga Instructor",
      company: "Zen Studio",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
    }
  },
  {
    id: '2',
    quote: "I've tried many candle brands, but none compare to the craftsmanship and attention to detail. Worth every penny!",
    author: {
      name: "Michael Chen",
      role: "Interior Designer",
      company: "Chen Interiors",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    }
  },
  {
    id: '3',
    quote: "The burn time is incredible and the scents last long after the candle is extinguished. Simply magical!",
    author: {
      name: "Emma Rodriguez",
      role: "Wellness Coach",
      company: "Holistic Living",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  }
];

const features = [
  {
    id: '1',
    title: 'Handcrafted Excellence',
    description: 'Each candle is meticulously hand-poured using premium soy wax and lead-free cotton wicks for a clean, even burn.',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&h=400&fit=crop',
    imageAlt: 'Handcrafted candle making process',
    badge: { label: 'Artisan Made', variant: 'featured' as const },
    icon: Sparkles,
    size: 'standard' as const
  },
  {
    id: '2',
    title: 'Natural Ingredients',
    description: 'We use only the finest essential oils and natural fragrances, free from parabens and harsh chemicals.',
    image: 'https://images.unsplash.com/photo-1606932506561-32b62bee5af5?w=600&h=400&fit=crop',
    imageAlt: 'Natural candle ingredients',
    badge: { label: 'Eco-Friendly', variant: 'new' as const },
    icon: Leaf,
    size: 'standard' as const
  },
  {
    id: '3',
    title: 'Long-Lasting Fragrance',
    description: 'Our proprietary scent blend technology ensures your candle delivers consistent fragrance from first light to last.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=400&fit=crop',
    imageAlt: 'Fragrance testing',
    badge: { label: 'Premium Quality', variant: 'popular' as const },
    icon: Flame,
    size: 'standard' as const
  },
  {
    id: '4',
    title: 'Ethical Sourcing',
    description: 'We partner with sustainable farms and ethical suppliers to ensure our ingredients are both high-quality and responsibly sourced.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    imageAlt: 'Sustainable sourcing',
    badge: { label: 'Conscious', variant: 'featured' as const },
    icon: Heart,
    size: 'standard' as const
  }
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ 
        background: 'linear-gradient(to bottom right, var(--background), var(--muted), var(--accent))',
        opacity: 0.1 
      }} />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full blur-3xl opacity-30 animate-pulse" style={{ backgroundColor: 'var(--accent)' }} />
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" style={{ backgroundColor: 'var(--primary)' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full blur-3xl opacity-30 animate-pulse delay-500" style={{ backgroundColor: 'var(--secondary)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 backdrop-blur-sm border rounded-full px-4 py-2 text-sm font-medium" style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            color: 'var(--foreground)'
          }}>
            <Flame className="w-4 h-4" style={{ color: 'var(--accent)' }} />
            Handcrafted with Love Since 2020
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6" style={{ 
          background: 'linear-gradient(to right, var(--primary), var(--accent))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Illuminate Your Space
        </h1>

        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
          Discover our collection of premium handcrafted candles, designed to transform your home into a sanctuary of peace and tranquility.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg" style={{
            background: 'linear-gradient(to right, var(--primary), var(--accent))',
            color: 'var(--primary-foreground)'
          }}>
            <ShoppingBag className="w-5 h-5 inline-block mr-2" />
            Shop Collection
          </button>
          <button className="w-full sm:w-auto backdrop-blur-sm border px-8 py-4 rounded-full font-semibold text-lg transition-all" style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            color: 'var(--foreground)'
          }}>
            View Our Story
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>50K+</div>
            <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>100+</div>
            <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Scent Varieties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: 'var(--secondary)' }}>4.9★</div>
            <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>100%</div>
            <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Natural</div>
          </div>
        </div>
      </div>

      {/* Floating candle illustrations */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex gap-2">
          <div className="w-2 h-8 bg-amber-400 rounded-full" />
          <div className="w-2 h-6 bg-orange-400 rounded-full" />
          <div className="w-2 h-10 bg-yellow-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Relaxation', 'Comfort', 'Meditation', 'Energy', 'Fresh', 'Seasonal'];
  
  const filteredProducts = selectedCategory === 'All' 
    ? candleProducts 
    : candleProducts.filter(product => product.category === selectedCategory);

  return (
    <section style={{ backgroundColor: 'var(--background)', padding: '5rem 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ 
            background: 'linear-gradient(to right, var(--primary), var(--accent))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Our Signature Collection
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            Each candle is a masterpiece, crafted with care to bring warmth and fragrance to your space.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="px-6 py-2 rounded-full font-medium transition-all"
              style={{
                background: selectedCategory === category 
                  ? 'linear-gradient(to right, var(--primary), var(--accent))'
                  : 'var(--muted)',
                color: selectedCategory === category 
                  ? 'var(--primary-foreground)'
                  : 'var(--foreground)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden" style={{
              backgroundColor: 'var(--card)'
            }}>
              {/* Product image */}
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium" style={{
                  backgroundColor: 'var(--card)',
                  color: 'var(--foreground)'
                }}>
                  {product.category}
                </div>
              </div>

              {/* Product info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors" style={{ color: 'var(--foreground)' }}>
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1" style={{ color: 'var(--accent)' }}>
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>4.8</span>
                  </div>
                </div>
                
                <p className="mb-4 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  {product.description}
                </p>

                <div className="flex items-center gap-4 text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>
                  <div className="flex items-center gap-1">
                    <Flame className="w-4 h-4" />
                    <span>{product.scent}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{product.burnTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
                    ${product.price}
                  </div>
                  <button className="px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105" style={{
                    background: 'linear-gradient(to right, var(--primary), var(--accent))',
                    color: 'var(--primary-foreground)'
                  }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CandleStoreLanding: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <HeroSection />
      <ProductGrid />
      
      {/* Feature Section with proper background */}
      <section style={{ backgroundColor: 'var(--muted)', padding: '5rem 0' }}>
        <FeatureGrid
          sectionLabel="Why Choose Us"
          title="Crafted with Care, Sourced with Purpose"
          description="Every candle tells a story of quality, sustainability, and artisanal excellence."
          features={features}
          columns={2}
        />
      </section>
      
      {/* Testimonials Section with proper styling */}
      <section style={{ backgroundColor: 'var(--card)', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ 
              background: 'linear-gradient(to right, var(--primary), var(--accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              What Our Customers Say
            </h2>
            <p className="text-xl" style={{ color: 'var(--muted-foreground)', maxWidth: '42rem', margin: '0 auto' }}>
              Join thousands of happy customers who've transformed their spaces with our candles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                hasMeteor={true}
                meteorDelay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Footer with proper design system */}
      <footer className="w-full">
        <div className="relative overflow-hidden rounded-3xl" style={{ 
          backgroundColor: 'var(--card)',
          margin: '3rem 1rem'
        }}>
          <div className="relative z-10 p-8 sm:p-12">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                Lumière Candles
              </h3>
              <p className="text-lg" style={{ color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
                Handcrafted candles that illuminate your life with warmth and fragrance.
              </p>
            </div>

            {/* Contact Information */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-6" style={{ color: 'var(--foreground)' }}>
                <a href="mailto:hello@lumierecandles.com" className="hover:opacity-80 transition">
                  hello@lumierecandles.com
                </a>
                <span style={{ color: 'var(--muted-foreground)' }}>•</span>
                <a href="tel:1-800-CANDLE" className="hover:opacity-80 transition">
                  1-800-CANDLE
                </a>
              </div>
              
              <div className="flex justify-center gap-4 mt-6">
                {["Handcrafted Quality", "Natural Ingredients", "Eco-Friendly", "Long-Lasting"].map((feature, index) => (
                  <span key={index} className="px-3 py-1 rounded-full text-sm" style={{
                    backgroundColor: 'var(--muted)',
                    color: 'var(--foreground)'
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  title: "Products",
                  links: ["All Candles", "New Arrivals", "Best Sellers", "Gift Sets"]
                },
                {
                  title: "About", 
                  links: ["Our Story", "Craftsmanship", "Sustainability", "Blog"]
                },
                {
                  title: "Support",
                  links: ["Contact", "Shipping", "Returns", "FAQ"]
                }
              ].map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h4 className="font-medium mb-4" style={{ color: 'var(--foreground)' }}>
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-sm hover:opacity-80 transition"
                          style={{ color: 'var(--muted-foreground)' }}
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Newsletter Section */}
              <div>
                <h4 className="font-medium mb-4" style={{ color: 'var(--foreground)' }}>
                  Stay in touch
                </h4>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-sm"
                    style={{
                      backgroundColor: 'var(--muted)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)'
                    }}
                  />
                  <button className="w-full px-4 py-2 rounded-lg text-sm font-medium transition hover:opacity-90" style={{
                    background: 'linear-gradient(to right, var(--primary), var(--accent))',
                    color: 'var(--primary-foreground)'
                  }}>
                    Subscribe
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-4">
                  {[
                    { name: "Instagram", url: "https://instagram.com/lumierecandles" },
                    { name: "Facebook", url: "https://facebook.com/lumierecandles" },
                    { name: "Twitter", url: "https://twitter.com/lumierecandles" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={`Follow us on ${social.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full flex items-center justify-center transition hover:opacity-80"
                      style={{
                        backgroundColor: 'var(--muted)',
                        color: 'var(--foreground)'
                      }}
                    >
                      <span className="text-xs font-bold">{social.name[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Bar */}
            <div className="pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  © {new Date().getFullYear()} Lumière Candles. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  {["Privacy Policy", "Terms of Service"].map((link, index) => (
                    <a
                      key={index}
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:opacity-80 transition"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div
            className="pointer-events-none absolute -top-16 -right-10 h-72 w-72 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: 'var(--accent)' }}
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-10 h-80 w-80 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: 'var(--primary)' }}
          />
        </div>
      </footer>
    </div>
  );
};

export default CandleStoreLanding;

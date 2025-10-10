import { useState } from 'react';
import { Footer } from '@/ui/components/footer';
import { TestimonialsGrid } from '@/ui/components/testimonials';
import { ProcessSteps } from '@/ui/components/creative-studio';
import { featuredListings, testimonials, buyingProcess } from './LandInvestmentData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServiceSelection } from './components/ServiceSelection';
import { FeaturedListings } from './components/FeaturedListings';
import { FinancingOptions } from './components/FinancingOptions';

const LandInvestmentLanding: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [acreage, setAcreage] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', { searchLocation, priceRange, acreage });
    // Implement search functionality
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header & Value Proposition */}
      <Header />

      {/* Hero Section with Search */}
      <HeroSection 
        searchLocation={searchLocation}
        priceRange={priceRange}
        acreage={acreage}
        setSearchLocation={setSearchLocation}
        setPriceRange={setPriceRange}
        setAcreage={setAcreage}
        handleSearch={handleSearch}
      />

      {/* Core Service Selection */}
      <ServiceSelection />

      {/* Featured Listings */}
      <FeaturedListings listings={featuredListings} />

      {/* How It Works - Buying Process */}
      <section id="process" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessSteps
            title="How to Buy Land"
            subtitle="Our streamlined process makes purchasing land simple and transparent."
            steps={buyingProcess}
            image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=800&fit=crop"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsGrid
            sectionLabel="TESTIMONIALS"
            title="What Our Clients Say"
            description="Don't just take our word for it. Hear from people who have successfully bought or sold land with us."
            testimonials={testimonials}
            columns={3}
          />
        </div>
      </section>

      {/* Specialized Financing */}
      <FinancingOptions />

      {/* Footer */}
      <Footer
        companyName="LandInvest Pro"
        tagline="Your trusted partner for buying and selling land with flexible financing options."
        contactInfo={{
          email: 'info@landinvestpro.com',
          phone: '1-800-LANDPRO',
          features: [
            'Expert land valuation',
            'Flexible financing options',
            'Fast closing process',
            'No hidden fees'
          ]
        }}
        navigationSections={[
          {
            title: 'Buy Land',
            links: [
              { label: 'All Listings', href: '#listings' },
              { label: 'Residential Land', href: '#residential' },
              { label: 'Commercial Land', href: '#commercial' },
              { label: 'Recreational Land', href: '#recreational' }
            ]
          },
          {
            title: 'Sell Land',
            links: [
              { label: 'Get Cash Offer', href: '#cash-offer' },
              { label: 'Owner Financing', href: '#owner-financing' },
              { label: 'Selling Process', href: '#selling-process' },
              { label: 'FAQ', href: '#faq' }
            ]
          },
          {
            title: 'Resources',
            links: [
              { label: 'Land Buying Guide', href: '#guide' },
              { label: 'Financing Options', href: '#financing' },
              { label: 'Blog', href: '#blog' },
              { label: 'Calculators', href: '#calculators' }
            ]
          }
        ]}
        socialLinks={[
          { platform: 'facebook', url: 'https://facebook.com/landinvestpro', ariaLabel: 'Facebook' },
          { platform: 'twitter', url: 'https://twitter.com/landinvestpro', ariaLabel: 'Twitter' },
          { platform: 'linkedin', url: 'https://linkedin.com/company/landinvestpro', ariaLabel: 'LinkedIn' },
          { platform: 'instagram', url: 'https://instagram.com/landinvestpro', ariaLabel: 'Instagram' }
        ]}
        legalLinks={[
          { label: 'Privacy Policy', href: '#privacy' },
          { label: 'Terms of Service', href: '#terms' },
          { label: 'Cookie Policy', href: '#cookies' }
        ]}
        onContactSubmit={async (data) => {
          console.log('Contact form submitted:', data);
          return Promise.resolve();
        }}
        onSubscribe={async (email) => {
          console.log('Newsletter subscription:', email);
          return Promise.resolve();
        }}
      />
    </div>
  );
};

export default LandInvestmentLanding;

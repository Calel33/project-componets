import { useMemo, useState } from 'react';
import { Footer } from '@/ui/components/footer';
import { TestimonialsGrid } from '@/ui/components/testimonials';
import { ProcessSteps } from '@/ui/components/creative-studio';
import Header from './components/ev/Header';
import PreHeaderBar from './components/ev/PreHeaderBar';
import HeroSection from './components/ev/HeroSection';
import MiniSpecsBar from './components/ev/MiniSpecsBar';
import ModelShowcase from './components/ev/ModelShowcase';
import EnhancedChargingNetwork from './components/ev/EnhancedChargingNetwork';
import EnhancedTechnologyFeatures from './components/ev/EnhancedTechnologyFeatures';
import EnhancedPricingPlans from './components/ev/EnhancedPricingPlans';
import DrivingExperience from './components/ev/DrivingExperience';
import Sustainability from './components/ev/Sustainability';
import FinalCTA from './components/ev/FinalCTA';
import { testimonials as rawTestimonials, buyingProcess } from './EVCarData';
import type { ProcessStep } from '@/ui/components/creative-studio/types';
import type { Testimonial as UITestimonial } from '@/ui/components/testimonials/types';

const EVCarLanding: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('model-s');
  const handleModelChange = (modelId: string) => {
    setSelectedModel(modelId);
  };

  const processSteps: ProcessStep[] = useMemo(
    () => buyingProcess.map((s, idx) => ({ number: String(idx + 1).padStart(2, '0'), title: s.title, description: s.description })),
    []
  );

  const uiTestimonials: UITestimonial[] = useMemo(
    () => rawTestimonials.map((t, i) => ({
      id: String(t.id),
      quote: t.content,
      author: { name: t.name, role: t.role, avatar: t.avatar },
      rating: t.rating,
      hasMeteor: i % 2 === 0,
    })),
    []
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Pre-Header Offer Bar */}
      <PreHeaderBar />
      {/* Header & Navigation */}
      <Header />

      {/* Hero Section with EV Showcase */}
      <HeroSection 
        selectedModel={selectedModel}
        onModelChange={handleModelChange}
      />

      {/* Mini Specs Bar */}
      <MiniSpecsBar />

      {/* Model Showcase */}
      <ModelShowcase 
        selectedModel={selectedModel}
        onModelChange={handleModelChange}
      />

      {/* Technology & Innovation */}
      <EnhancedTechnologyFeatures />

      {/* Charging Network */}
      <EnhancedChargingNetwork />

      {/* Pricing Plans */}
      <EnhancedPricingPlans />

      {/* Driving Experience */}
      <DrivingExperience />

      {/* How It Works - Buying Process */}
      <section id="process" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessSteps
            title="Your Journey to Electric"
            subtitle="From browsing to driving, we make the transition to electric seamless and exciting."
            steps={processSteps}
            image="https://images.unsplash.com/photo-1617655491082-2f2e8c9a0c6c?w=800&h=800&fit=crop"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsGrid
            sectionLabel="TESTIMONIALS"
            title="What Our Drivers Say"
            description="Hear from people who have made the switch to electric and never looked back."
            testimonials={uiTestimonials}
            columns={3}
          />
        </div>
      </section>

      {/* Sustainability Mission */}
      <Sustainability />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer
        companyName="ElectraDrive"
        tagline="Driving the future, today. Experience electric mobility like never before."
        contactInfo={{
          email: 'info@electradrive.com',
          phone: '1-800-ELECTRA',
          features: [
            '0-60 mph in under 3 seconds',
            '300+ mile range on single charge',
            'Access to 50,000+ charging stations',
            '24/7 roadside assistance'
          ]
        }}
        navigationSections={[
          {
            title: 'Vehicles',
            links: [
              { label: 'Model S', href: '#model-s' },
              { label: 'Model X', href: '#model-x' },
              { label: 'Model Y', href: '#model-y' },
              { label: 'Compare Models', href: '#compare' }
            ]
          },
          {
            title: 'Ownership',
            links: [
              { label: 'Charging', href: '#charging' },
              { label: 'Maintenance', href: '#maintenance' },
              { label: 'Insurance', href: '#insurance' },
              { label: 'Warranty', href: '#warranty' }
            ]
          },
          {
            title: 'Company',
            links: [
              { label: 'About Us', href: '#about' },
              { label: 'Careers', href: '#careers' },
              { label: 'Press', href: '#press' },
              { label: 'Investors', href: '#investors' }
            ]
          }
        ]}
        socialLinks={[
          { platform: 'facebook', url: 'https://facebook.com/electradrive', ariaLabel: 'Facebook' },
          { platform: 'twitter', url: 'https://twitter.com/electradrive', ariaLabel: 'Twitter' },
          { platform: 'linkedin', url: 'https://linkedin.com/company/electradrive', ariaLabel: 'LinkedIn' },
          { platform: 'instagram', url: 'https://instagram.com/electradrive', ariaLabel: 'Instagram' }
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

export default EVCarLanding;
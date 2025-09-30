import React from 'react';
import { TestimonialsMasonry } from '../ui/components/testimonials/TestimonialsMasonry';
import { Testimonial } from '../ui/components/types/testimonials.types';

const sampleTestimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'The dashboard they delivered is lightning-fast and visually stunning.',
    author: {
      name: 'Hiroki Tanaka',
      role: 'Product Lead',
      company: 'Nexus Robotics',
      location: 'Tokyo, Japan'
    },
    rating: 4.9,
    variant: 'default',
    cardHeight: 'short'
  }
];

export const TestimonialsMasonryDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950">
      <TestimonialsMasonry
        title="Loved by teams worldwide"
        subtitle="We partner with forward-thinking companies to craft digital products."
        testimonials={sampleTestimonials}
        showParticles={true}
        showCTA={true}
        staggerAnimation={true}
      />
    </div>
  );
};

export default TestimonialsMasonryDemo;

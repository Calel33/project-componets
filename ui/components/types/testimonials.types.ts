/**
 * Type definitions for Testimonials components
 * @module testimonials.types
 */

export interface TestimonialAuthor {
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  avatarAlt?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: TestimonialAuthor;
  hasMeteor?: boolean;
  meteorDelay?: number;
}

export interface TestimonialsGridProps {
  sectionLabel?: string;
  title: string;
  description?: string;
  testimonials: Testimonial[];
  columns?: 1 | 2 | 3 | 4;
  showMeteors?: boolean;
  className?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  hasMeteor?: boolean;
  meteorDelay?: number;
  className?: string;
}

export interface MeteorBackgroundProps {
  delay?: number;
  className?: string;
}
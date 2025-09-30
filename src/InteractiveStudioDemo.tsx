import React from 'react';
import {
  InteractiveStudioHero,
  FloatingNavbar,
  SplineBackground,
} from '../ui/components/interactive-studio';

export const InteractiveStudioDemo: React.FC = () => {
  const logo = (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="white" />
    </svg>
  );

  const navbarProps = {
    logo,
    brandName: 'InteractiveLab',
    links: [
      { label: 'Portfolio', href: '#portfolio' },
      { label: '3D Design', href: '#design' },
      { label: 'Animation', href: '#animation' },
      { label: 'Lab', href: '#lab' },
      { label: 'Connect', href: '#connect' },
    ],
    authLinks: [
      { label: 'Login', href: '#login', variant: 'text' as const },
    ],
    ctaButton: {
      label: 'Start Project',
      href: '#start',
    },
  };

  const heroProps = {
    badge: 'Interactive Design Studio',
    title: 'Reactive',
    highlightedTitle: 'Dimensional Experiences',
    description:
      'We create immersive digital worlds that respond to user interaction. Every gesture, every movement becomes part of the experience.',
    primaryCTA: {
      label: 'Explore Interactive Demo',
      href: '#demo',
    },
    secondaryCTA: {
      label: 'View Portfolio',
      href: '#portfolio',
    },
    technologies: ['WebGL', 'Three.js', 'Spline', 'GSAP'],
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <SplineBackground splineUrl="https://my.spline.design/reactiveorb-s0GzgSco0uSVSXvwMHuJvPQs/" />
      <FloatingNavbar {...navbarProps} />
      <InteractiveStudioHero {...heroProps} />
    </div>
  );
};

export default InteractiveStudioDemo;

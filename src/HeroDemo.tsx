import { FullScreenHero } from '@/ui/components/hero';

const bg = 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=2400&auto=format&fit=crop';

export default function HeroDemo() {
  return (
    <FullScreenHero
      backgroundImage={bg}
      navigation={{
        logo: 'Veilhaven',
        navItems: [
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'About', href: '#about' },
        ],
        ctaButton: { label: 'Get Started', href: '#get-started' },
      }}
      content={{
        badge: { icon: '✨', text: 'Now Available' },
        title: 'Atmospheric UI for Modern Apps',
        subtitle:
          'Build immersive layouts with speed and fidelity using our React + Tailwind components.',
        primaryCta: { label: 'Explore', href: '#explore' },
        secondaryCta: { label: 'Watch Demo', icon: '▶️' },
      }}
      enableAnimations
    />
  );
}

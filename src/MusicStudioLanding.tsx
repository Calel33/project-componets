import { FullScreenHero } from '../ui/components/hero/FullScreenHero';
import { FeaturesGridLayout } from '../ui/components/feature-grid/FeaturesGridLayout';
import { TestimonialsGrid } from '../ui/components/testimonials/TestimonialsGrid';
import type { FeatureCardProps } from '../ui/components/types/feature-grid.types';
import type { Testimonial } from '../ui/components/types/testimonials.types';
import { Music, Mic2, Waves, Headphones, Library, PlaySquare, SlidersHorizontal, AudioLines } from 'lucide-react';

// Derived from ideas/ templates:
// - Full-Screen Hero with Navigation.html (hero layout, centered content, floating nav)
// - Features Grid Layout.html (bento first row + uniform rows)
// - Client Testimonials Grid Layout.html (section header + responsive grid)
export default function MusicStudioLanding() {
  const navigation = {
    logo: (
      <div className="flex items-center gap-2 text-foreground">
        <Music className="h-5 w-5 text-primary" aria-hidden />
        <span className="font-semibold">Aurora Studio</span>
      </div>
    ),
    navItems: [
      { label: 'Studio', href: '#studio' },
      { label: 'Services', href: '#services' },
      { label: 'Work', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
    ctaButton: { label: 'Book Session', href: '#contact' },
  };

  const heroContent = {
    badge: { icon: <Waves className="h-3.5 w-3.5" />, text: 'Modern Music Production' },
    title: (
      <div className="text-center">
        <span className="block text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
          Record. Mix. Master.
        </span>
        <span className="mt-2 block text-lg sm:text-xl text-foreground/80">
          World‑class sound crafted with clarity and precision.
        </span>
      </div>
    ),
    subtitle: 'Premium studio sessions with seasoned engineers and a focus on artist flow and comfort.',
    primaryCta: { label: 'Book a Session', href: '#contact' },
    secondaryCta: { label: 'Hear Our Work', icon: <PlaySquare className="h-4 w-4" /> },
  };

  const features: FeatureCardProps[] = [
    {
      icon: <Mic2 />, title: 'Vocal Tracking', description: 'Isolated booth, premium preamps, and transparent A/D for pristine takes.', badge: 'Pro', iconColor: 'text-primary'
    },
    {
      icon: <SlidersHorizontal />, title: 'Analog + Digital Mix', description: 'Hybrid chain blends warmth and precision with recallable sessions.', variant: 'highlight'
    },
    {
      icon: <Headphones />, title: 'Artist Comfort', description: 'Mood lighting, lounge space, and tailored monitoring for long sessions.'
    },
    {
      icon: <Library />, title: 'Plugin Library', description: 'Deep suite of pro instruments, effects, and mastering tools.'
    },
    {
      icon: <AudioLines />, title: 'Mastering', description: 'Final polish with calibrated monitoring and metering.'
    },
    {
      icon: <Waves />, title: 'Acoustic Design', description: 'Balanced room response for accurate decisions.'
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 't1',
      quote: 'Best vocal chain I have recorded on. The mix translated perfectly to streaming.',
      author: { name: 'Maya R.', role: 'Artist' },
      rating: 5,
      badges: [{ label: 'Featured', variant: 'primary' }],
    },
    {
      id: 't2',
      quote: 'Engineer understood my reference and delivered fast. Zero back‑and‑forth.',
      author: { name: 'Dre K.', role: 'Producer' },
      rating: 5,
    },
    {
      id: 't3',
      quote: 'Clean, comfortable space. Workflow was smooth from tracking to master.',
      author: { name: 'Selim A.', role: 'Composer' },
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FullScreenHero
        backgroundImage="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop"
        navigation={navigation}
        content={heroContent}
        enableAnimations
      />

      <section id="services" className="relative py-16 sm:py-20 bg-background">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <p className="text-xs tracking-widest text-foreground/60">SERVICES</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">Everything you need for a release‑ready record</h2>
          </div>
          <FeaturesGridLayout features={features} gridStyle="bento" />
        </div>
      </section>

      <section id="work" className="relative py-16 sm:py-20 bg-card/5">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 right-10 h-48 w-48 rounded-full bg-accent/10 blur-2xl" />
        </div>
        <TestimonialsGrid
          title="What artists are saying"
          description="Collaborations that feel effortless and sound exceptional."
          testimonials={testimonials}
          columns={3}
          showMeteors={false}
          className="bg-transparent text-foreground"
        />
      </section>

      <section id="contact" className="py-16 sm:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold">Book a session</h3>
          <p className="mt-2 text-foreground/70">Tell us about your project—genre, references, and timeline. We’ll confirm availability and rates.</p>
          <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input className="col-span-1 rounded-md border border-border bg-background/40 px-3 py-2" placeholder="Name" />
            <input className="col-span-1 rounded-md border border-border bg-background/40 px-3 py-2" placeholder="Email" />
            <input className="col-span-1 sm:col-span-2 rounded-md border border-border bg-background/40 px-3 py-2" placeholder="Project / Genre" />
            <textarea className="col-span-1 sm:col-span-2 rounded-md border border-border bg-background/40 px-3 py-2" rows={4} placeholder="Goals, references, dates" />
            <button type="button" className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground font-medium">
              Request Availability
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

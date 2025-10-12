import React from 'react';
import { FormaNav, FormaHero, ServicesGrid, ProcessTimeline, PortfolioGrid, TestimonialsGrid } from '@/ui/components/interior-design';
import type { ServiceCardProps, TimelinePhaseProps, PortfolioProjectProps, TestimonialProps } from '@/ui/components/types/interior-design.types';

const services: ServiceCardProps[] = [
  { icon: <span>💡</span>, title: 'Concept Development', description: 'Strategic planning and concept narrative.', features: ['Consultation', 'Mood boards', '3D visualization'], link: '#contact' },
  { icon: <span>🎨</span>, title: 'Complete Transformation', description: 'Full-service interior design from concept to install.', features: ['Space planning', 'Custom furniture', 'Project management', 'Installation'], featured: true, badge: 'Most Popular', link: '#portfolio' },
  { icon: <span>🏠</span>, title: 'Luxury Staging', description: 'Showcase properties at their best.', features: ['Assessment', 'Furniture rental', 'Photography'], link: '#contact' },
  { icon: <span>🖌️</span>, title: 'Color Consultation', description: 'Create the perfect ambiance with expert palettes.', features: [], link: '#contact' },
  { icon: <span>🛠️</span>, title: 'Renovation Support', description: 'Guidance from planning through execution.', features: [], link: '#contact' },
  { icon: <span>❤️</span>, title: 'Lifestyle Design', description: 'Personalized solutions matching your style.', features: [], link: '#contact' },
];

const phases: TimelinePhaseProps[] = [
  { phase: 1, title: 'Discovery & Consultation', description: 'Understand vision, lifestyle, and constraints.', features: ['Consultation', 'Measurement', 'Budget & timeline'], image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4c3cdb9e-6cac-4dce-ac9a-d914b04c3458_1600w.jpg', icon: <span>💡</span> },
  { phase: 2, title: 'Design & Development', description: 'Concepts, 3D visuals, and specs with iterations.', features: ['Concept & boards', '3D renderings', 'Material selection'], image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79bb5936-f88f-4e8c-95b8-80fa335fc9bc_1600w.jpg', icon: <span>🎨</span> },
  { phase: 3, title: 'Flawless Execution', description: 'Installation and styling with coordination.', features: ['PM & coordination', 'Installation', 'Final styling'], image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e4572439-a6ca-445c-9a06-4bf65269dd10_800w.jpg', icon: <span>✅</span> },
];

const projects: PortfolioProjectProps[] = [
  { image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/68d1afcf-0796-4422-8718-9e98b2a6dfb0_1600w.jpg', title: 'Manhattan Penthouse', description: 'Minimalist luxury with curated art.', location: 'New York, NY', size: '4,200 sq ft', category: 'Residential', featured: true },
  { image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/704e1fb3-a82b-42a1-ad5f-f30d6c0fb05c_800w.jpg', title: 'Beverly Hills Residence', description: 'Modern kitchen with custom cabinetry.', location: 'Beverly Hills, CA', size: '3,000 sq ft', category: 'Residential' },
  { image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fad8f488-a92f-419e-a506-95dab967d5f0_800w.jpg', title: 'Malibu Beach House', description: 'Serene master suite with ocean views.', location: 'Malibu, CA', size: '2,500 sq ft', category: 'Residential' },
];

const testimonials: TestimonialProps[] = [
  { content: 'Forma transformed our apartment into a stunning masterpiece.', author: 'Sarah Johnson', role: 'Manhattan Penthouse', avatar: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7f6feef-fd3e-4901-bce6-7271aa74dc87_320w.jpg', rating: 5 },
  { content: 'Exceeded every expectation — perfect blend of luxury and comfort.', author: 'Michael Chen', role: 'Beverly Hills Residence', avatar: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f52b9e1e-c3e8-4844-b3c5-28aacdc6b434_320w.jpg', rating: 5 },
  { content: 'Professional, creative, and incredibly organized.', author: 'Emma Rodriguez', role: 'Malibu Beach House', avatar: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3b6e4af7-ac86-4163-b303-578671458c76_320w.jpg', rating: 5 },
];

export const FormaLandingDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FormaNav />
      <main>
        <FormaHero />
        <section id="about" className="relative py-24 bg-white">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl font-light tracking-tighter mb-6">Crafting Dreams into <span className="font-semibold text-indigo-600">Living Reality</span></h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">We transform spaces through exceptional interior design.</p>
              <a href="#portfolio" className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg">Explore Our Work</a>
            </div>
            <div>
              <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/211d2508-6de8-4442-bc3e-3e8bea65298f_800w.jpg" alt="Interior design team" className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl" />
            </div>
          </div>
        </section>
        <ServicesGrid services={services} />
        <ProcessTimeline phases={phases} />
        <PortfolioGrid projects={projects} />
        <TestimonialsGrid testimonials={testimonials} />
        <section id="contact" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl font-light tracking-tighter mb-6">Let's Create Your <span className="font-semibold text-green-600">Dream Space</span></h2>
              <p className="text-xl text-muted-foreground leading-relaxed">Schedule a consultation with our design experts.</p>
            </div>
            <form className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input className="px-4 py-3 rounded-xl border" placeholder="First Name" />
                <input className="px-4 py-3 rounded-xl border" placeholder="Last Name" />
              </div>
              <input className="px-4 py-3 rounded-xl border w-full" placeholder="Email" />
              <textarea className="px-4 py-3 rounded-xl border w-full resize-none" rows={4} placeholder="Project Details" />
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg">Schedule Free Consultation</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FormaLandingDemo;

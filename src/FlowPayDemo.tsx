import { ArrowRight, Play, Sparkles, Zap, Shield, Globe, TrendingUp, Users } from 'lucide-react';
import {
  FlowPayHero,
  PaymentFeatureGrid,
  PaymentTestimonials,
} from '../ui/components/payment';

export const FlowPayDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#1a1a2e] text-white">
      {/* Hero Section */}
      <FlowPayHero
        badge={{
          icon: <Sparkles className="w-4 h-4" />,
          text: 'New: Instant crypto payments now available',
        }}
        headline="Digital payments"
        highlightedText="reimagined"
        description="Experience the future of finance with instant transfers, smart contracts, and seamless global payments. Built for the next generation of digital commerce."
        primaryCta={{
          text: 'Start building',
          href: '#',
          icon: <ArrowRight className="w-5 h-5" />,
        }}
        secondaryCta={{
          text: 'Watch demo',
          href: '#',
          icon: <Play className="w-5 h-5" />,
        }}
      />

      {/* Features Section */}
      <PaymentFeatureGrid
        headline="Built for modern businesses"
        description="Powerful APIs, instant settlements, and enterprise-grade security for companies of all sizes."
        features={[
          {
            icon: <Zap className="w-6 h-6 text-white" />,
            title: 'Lightning Fast',
            description: 'Process payments in milliseconds with our optimized infrastructure and global network.',
          },
          {
            icon: <Shield className="w-6 h-6 text-white" />,
            title: 'Bank-Grade Security',
            description: 'End-to-end encryption, fraud detection, and compliance with global financial regulations.',
          },
          {
            icon: <Globe className="w-6 h-6 text-white" />,
            title: 'Global Coverage',
            description: 'Accept payments from 150+ countries with automatic currency conversion and local methods.',
          },
        ]}
      />

      {/* Testimonials Section */}
      <PaymentTestimonials
        testimonial={{
          rating: 5,
          quote: '"FlowPay transformed how we handle payments"',
          content: 'The integration was seamless, and our conversion rates improved by 40%. The real-time analytics and fraud protection give us complete peace of mind. It\'s exactly what we needed to scale globally.',
          author: {
            name: 'Marcus Johnson',
            role: 'CTO at TechFlow',
            avatar: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=320&q=80',
          },
        }}
        stats={[
          {
            icon: <TrendingUp className="w-8 h-8 text-white" />,
            label: 'Transaction Volume',
            value: '$2.4B',
            subtitle: 'processed monthly',
          },
          {
            icon: <Users className="w-8 h-8 text-white" />,
            label: 'Customer Satisfaction',
            value: '98%',
            subtitle: 'would recommend us',
          },
        ]}
      />

      {/* Footer */}
      <footer className="relative mt-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-3">
                {['Payments', 'Checkout', 'Crypto', 'Mobile SDK'].map((item) => (
                  <a key={item} href="#" className="block text-sm transition-colors text-white/60 hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Developers</h4>
              <div className="space-y-3">
                {['API Docs', 'SDKs', 'Webhooks', 'Testing'].map((item) => (
                  <a key={item} href="#" className="block text-sm transition-colors text-white/60 hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-3">
                {['About', 'Careers', 'Blog', 'Press'].map((item) => (
                  <a key={item} href="#" className="block text-sm transition-colors text-white/60 hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-3">
                {['Help Center', 'Contact', 'Status', 'Security'].map((item) => (
                  <a key={item} href="#" className="block text-sm transition-colors text-white/60 hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className="font-semibold">FlowPay</span>
            </div>
            <p className="text-sm text-white/50">© 2024 FlowPay Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

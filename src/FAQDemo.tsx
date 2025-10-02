import React from 'react';
import { FAQSection } from '../ui/components/faq';
import type { FAQItem } from '../ui/components/faq';

const mockFAQs: FAQItem[] = [
  {
    id: '1',
    question: 'Is artificial intelligence worth the investment for growing companies?',
    answer: 'Discover how AI can transform your business operations, reduce costs by up to 40%, and accelerate growth through intelligent automation.',
    category: {
      id: 'ai',
      name: 'AI Development & Consulting',
      color: 'red',
      icon: 'bot',
    },
  },
  {
    id: '2',
    question: 'Can I repurpose video content across multiple channels and campaigns?',
    answer: 'Learn our proven content multiplication strategy that turns one video shoot into 15+ pieces of content for maximum ROI.',
    category: {
      id: 'video',
      name: 'Video Production & Content',
      color: 'blue',
      icon: 'play-circle',
    },
  },
  {
    id: '3',
    question: 'Can Nexus Digital collaborate with international and remote teams?',
    answer: 'Absolutely! We work across 15+ time zones with seamless project management and 24/7 communication channels.',
    category: {
      id: 'support',
      name: 'Client Experience & Support',
      color: 'green',
      icon: 'heart-handshake',
    },
  },
  {
    id: '4',
    question: 'How long does a typical digital transformation project take?',
    answer: 'Project timelines vary from 4-16 weeks depending on complexity. We use agile sprints for rapid deployment and continuous improvement.',
    category: {
      id: 'strategy',
      name: 'Strategy & Innovation',
      color: 'purple',
      icon: 'lightbulb',
    },
    featured: true,
  },
  {
    id: '5',
    question: 'How do you ensure data security and client confidentiality?',
    answer: 'We maintain SOC 2 compliance, use end-to-end encryption, and sign comprehensive NDAs. Your data security is our top priority.',
    category: {
      id: 'security',
      name: 'Security & Privacy',
      color: 'orange',
      icon: 'shield',
    },
  },
  {
    id: '6',
    question: 'What are your pricing models and payment options?',
    answer: 'We offer flexible pricing: project-based, retainer, or revenue-share models. Monthly payments available with no hidden fees.',
    category: {
      id: 'pricing',
      name: 'Pricing & Investment',
      color: 'emerald',
      icon: 'banknote',
    },
  },
];

export const FAQDemo: React.FC = () => {
  const handleReadMore = (faqId: string) => {
    console.log('Read more clicked for FAQ:', faqId);
    // Navigate to FAQ detail page or open modal
  };

  const handleBrowseAll = () => {
    console.log('Browse all FAQs clicked');
    // Navigate to full FAQ page
  };

  const handleAskExperts = () => {
    console.log('Ask experts clicked');
    // Navigate to contact form or open chat
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <FAQSection
        title="QUESTIONS"
        subtitle="ANSWERS"
        description="Get instant answers to the most common questions about our digital transformation services, AI solutions, and creative partnerships."
        faqs={mockFAQs}
        onReadMore={handleReadMore}
        onBrowseAll={handleBrowseAll}
        onAskExperts={handleAskExperts}
        showCTA={true}
        animateOnScroll={true}
      />
    </div>
  );
};

export default FAQDemo;

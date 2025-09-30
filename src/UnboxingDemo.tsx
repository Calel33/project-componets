import React from 'react';
import {
  UnboxingLayout,
  UnboxingFeatureProps,
  UnboxingMainContentProps,
  UnboxingFooterProps,
} from '../ui/components/unboxing';
import { Share2, ShieldCheck, Wifi, MonitorPlay, Package, Shield } from 'lucide-react';

export const UnboxingDemo: React.FC = () => {
  const features: UnboxingFeatureProps[] = [
    {
      title: 'Crystal Clear Vision.',
      description:
        'Professional-grade F1.4 aperture lens captures stunning 4K video with exceptional low-light performance and razor-sharp detail.',
      backgroundImage:
        'https://images.unsplash.com/photo-1520400791805-02c593cedaa5?w=2160&q=80',
      imageAlt: 'Professional camera lens',
    },
    {
      title: 'SmartMute Technology™',
      description:
        'Intelligent capacitive touch sensor on the premium braided USB-C cable instantly mutes audio with a simple tap. Perfect for confidential moments.',
      backgroundImage:
        'https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=2160&q=80',
      imageAlt: 'Premium USB-C cable',
    },
  ];

  const mainContent: UnboxingMainContentProps = {
    backgroundColor: 'bg-yellow-400',
    heading: 'Everything you need',
    headingHighlight: 'in the box.',
    description:
      'Designed for creators, built for professionals. Each VisionPro 4K package includes premium accessories and exclusive software to elevate your content creation experience on both Mac and Windows.',
    secondaryDescription:
      'Intelligent capacitive touch sensor on the premium braided USB-C cable instantly mutes audio with a simple tap. Perfect for confidential moments.',
    utilityIcons: [
      {
        icon: <Share2 className="w-5 h-5" />,
        ariaLabel: 'Share',
        onClick: () => console.log('Share clicked'),
      },
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        ariaLabel: 'Shield check',
        onClick: () => console.log('Shield check clicked'),
      },
      {
        icon: <Wifi className="w-5 h-5" />,
        ariaLabel: 'WiFi',
        onClick: () => console.log('WiFi clicked'),
      },
    ],
    productCard: {
      icon: <MonitorPlay className="w-6 h-6 lg:w-7 lg:h-7" />,
      badgeCount: 1,
      badgeColor: 'bg-orange-500',
      title: 'VisionPro Studio Suite',
      description:
        'Exclusive access to our professional editing suite with real-time filters, AI-powered auto-framing, and cloud sync across all your devices.',
    },
  };

  const footer: UnboxingFooterProps = {
    title: 'Premium Wrist Strap.',
    description:
      'Hand-crafted leather strap with magnetic clasp keeps your VisionPro 4K secure during mobile shoots and video calls.',
    features: [
      {
        icon: <Package className="w-4 h-4" />,
        label: 'Free shipping worldwide',
      },
      {
        icon: <Shield className="w-4 h-4" />,
        label: '2-year warranty',
      },
    ],
  };

  return (
    <div className="bg-gray-100 text-gray-900 antialiased p-4 lg:p-8">
      <UnboxingLayout
        brandName="VisionPro"
        features={features}
        mainContent={mainContent}
        footer={footer}
        ctaButton={{
          label: 'Get Started',
          onClick: () => console.log('Get Started clicked'),
        }}
      />
    </div>
  );
};

export default UnboxingDemo;

import React from 'react';
import { FeaturesGridLayout } from '@/ui/components/feature-grid';
import type { FeatureCardProps } from '@/ui/components/feature-grid';
import { Bolt, Shield, Bell, Globe, UserRound, BarChart } from 'lucide-react';

const iconClass = 'w-8 h-8';

const FeaturesGridDemo: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: <Bolt className={iconClass} />,
      title: 'Always On',
      description: 'Reliable uptime 99.99% for all users.',
      iconColor: 'text-indigo-400',
    },
    {
      icon: <BarChart className={iconClass} />,
      title: 'Advanced Analytics',
      description:
        'Powerful insights help you understand your users and growth patterns in real time with clear visual dashboards, exports, and alerts.',
      variant: 'highlight',
      badge: 'New',
      iconColor: 'text-blue-400',
    },
    {
      icon: <Shield className={iconClass} />,
      title: 'Secure Data',
      description: 'AES-256 encryption by default.',
      iconColor: 'text-red-400',
    },
    // second row
    {
      icon: <Bell className={iconClass} />,
      title: '24/7 Support',
      description: 'Always here for you.',
      iconColor: 'text-yellow-300',
    },
    {
      icon: <Shield className={iconClass} />,
      title: 'Easy Integrations',
      description: 'Works with your tools.',
      iconColor: 'text-green-400',
    },
    {
      icon: <Globe className={iconClass} />,
      title: 'Global Reach',
      description: 'Worldwide infrastructure.',
      iconColor: 'text-blue-300',
    },
    {
      icon: <UserRound className={iconClass} />,
      title: 'User Friendly',
      description: 'Simple to get started.',
      iconColor: 'text-pink-300',
    },
  ];

  return (
    <div className="py-12">
      <FeaturesGridLayout features={features} gridStyle="bento" />
    </div>
  );
};

export default FeaturesGridDemo;

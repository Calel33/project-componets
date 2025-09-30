/**
 * Portfolio Grid Demo Page
 * Demonstrates the Portfolio Grid component with sample data
 */

import { PortfolioGrid } from '../ui/components/portfolio';
import type { PortfolioColumn } from '../ui/components/types/portfolio.types';

const portfolioData: { columns: PortfolioColumn[] } = {
  columns: [
    // Column 1
    {
      items: [
        {
          id: '1',
          image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/af5c4f11-0653-43c0-b21e-5b8cc085c9f3_800w.jpg',
          alt: 'Cloud Analytics dashboard project',
          category: 'SaaS • Product',
          title: 'Cloud Analytics',
          link: '#work',
          height: 'h-56',
        },
        {
          id: '2',
          image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/60f49edd-2009-43cf-a12a-d82fd91aae5e_800w.jpg',
          alt: 'E-commerce platform',
          category: 'E-commerce • Platform',
          title: 'Shop Pro',
          link: '#work',
          height: 'h-72',
        },
        {
          id: '3',
          image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27aa90c0-b947-4bfd-b8da-7cf0ab291ab1_800w.jpg',
          alt: 'Portfolio website',
          category: 'Portfolio • Website',
          title: 'Creative Hub',
          link: '#work',
          height: 'h-48',
        },
      ],
    },
    // Column 2
    {
      items: [
        {
          id: '4',
          image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b19e7d3a-309c-4d55-9373-80ca043c0f49_800w.jpg',
          alt: 'Product launch landing page',
          category: 'Platform • Website',
          title: 'Boltshift Launch',
          link: '#work',
          height: 'h-64',
        },
        {
          id: '5',
          image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a76e4f7e-e0f8-4732-8b99-5b3abe6fd91d_800w.jpg',
          alt: 'Mobile app design',
          category: 'Mobile • App',
          title: 'FitTracker',
          link: '#work',
          height: 'h-56',
        },
        {
          id: '6',
          image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cac77434-d322-40be-a298-4e2198a61175_800w.jpg',
          alt: 'Data visualization',
          category: 'Data • Visualization',
          title: 'DataFlow',
          link: '#work',
          height: 'h-56',
        },
      ],
    },
    // Column 3
    {
      items: [
        {
          id: '7',
          image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7df94c66-5d1e-4235-a476-1d2d8881a456_800w.jpg',
          alt: 'Design system',
          category: 'Design • System',
          title: 'Nexus System',
          link: '#work',
          height: 'h-72',
        },
        {
          id: '8',
          image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b1350108-f0ef-4f66-83ae-fe50447f6f74_800w.jpg',
          alt: 'Brand identity and campaign visuals',
          category: 'Identity • Campaign',
          title: 'Quotient Rebrand',
          link: '#work',
          height: 'h-48',
        },
        {
          id: '9',
          image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/68a7825c-0f07-4225-a8e0-d22929426aa3_800w.jpg',
          alt: 'Web application',
          category: 'Web • Application',
          title: 'TaskFlow Pro',
          link: '#work',
          height: 'h-56',
        },
      ],
    },
  ],
};

export default function PortfolioDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <PortfolioGrid
          columns={portfolioData.columns}
          title="A few projects I'm proud of."
          sectionLabel="(03) Selected Work"
          ctaText="View Portfolio"
          ctaLink="#work"
          viewAllText="View All Work"
          viewAllLink="#work"
        />
      </div>
    </div>
  );
}

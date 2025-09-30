// SkincareDemo.tsx - Complete demo of Auré Natural Skincare landing page
import { SkincareLayout } from '@/ui/components/skincare';
import { Facebook, Twitter, Instagram, Youtube, CreditCard, ShieldCheck } from 'lucide-react';

export default function SkincareDemo() {
  return (
    <SkincareLayout
      announcement={{
        messages: [
          'Free shipping on orders over $60',
          'New: Barrier Repair Serum 2.0 is here',
        ],
      }}
      header={{
        brandName: 'Auré',
        navLinks: [
          { label: 'Shop', href: '#shop' },
          { label: 'Collections', href: '#collections' },
          { label: 'About', href: '#about' },
          { label: 'Journal', href: '#journal' },
          { label: 'Contact', href: '#contact' },
        ],
        collectionsMenu: [
          {
            id: 'hydrate',
            name: 'Refresh: Cleansers',
            description: 'pH-balanced, non-stripping',
            category: 'Cleansing Collection',
            backgroundImage: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8c09615d-a59e-4e70-a69c-f85d41f58008_3840w.jpg',
            link: '#collections',
          },
          {
            id: 'treat',
            name: 'Treat: Serums',
            description: 'Actives that respect your barrier',
            category: 'Treatment Collection',
            backgroundImage: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/514c8cb5-f728-4441-9fe6-51d3dba28717_3840w.jpg',
            link: '#collections',
          },
          {
            id: 'nourish',
            name: 'Nourish: Moisturizers',
            description: 'Ceramide-rich hydration',
            category: 'Moisturizing Collection',
            backgroundImage: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a36afded-b34e-42f9-986d-2a5af9747298_800w.jpg',
            link: '#collections',
          },
        ],
        showUtilityIcons: true,
      }}
      hero={{
        backgroundImage: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/68d6b8da-d1ca-48b1-a6ff-a76d865061f1_3840w.jpg',
        tagline: 'Botanical · Clinical · Kind',
        heading: 'Natural Skincare',
        description: 'Awaken your skin with gentle actives and nourishing oils. Formulated to restore barrier health and glow naturally.',
        primaryCTA: {
          label: 'Shop Now',
          href: '#shop',
        },
        secondaryCTA: {
          label: 'Learn More',
          href: '#about',
        },
        parallax: true,
      }}
      trustBar={{
        text: ['Refresh your skin,', 'love yourself,', 'renew your glow.'],
        inlineImages: [
          {
            src: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ead6a95d-ae67-4b24-9f26-ae02bf27cb1e_3840w.jpg',
            alt: 'Model applying serum',
            rotation: -6,
            position: 0,
          },
          {
            src: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cab73078-80bd-4f30-8d0d-775e21f09e27_3840w.jpg',
            alt: 'Spa mask moment',
            rotation: 6,
            position: 1,
          },
          {
            src: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/16c0110c-f333-4a45-a83a-d83ff9487661_3840w.jpg',
            alt: 'Leaf detail',
            rotation: -3,
            position: 2,
          },
        ],
      }}
      collections={{
        title: 'Explore Collections',
        subtitle: 'Targeted routines for every skin goal.',
        collections: [
          {
            id: 'hydrate-restore',
            name: 'Hydrate & Restore',
            description: 'Moisture-rich serums with hyaluronic acid',
            category: 'Essential Hydration Collection',
            backgroundImage: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/81c1ffe7-4ef4-4ad0-af93-20b8464eee2e_800w.jpg',
          },
          {
            id: 'cleanse-purify',
            name: 'Cleanse & Purify',
            description: 'pH-balanced cleansers for sensitive skin',
            category: 'Gentle Care Collection',
            backgroundImage: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8c09615d-a59e-4e70-a69c-f85d41f58008_800w.jpg',
          },
          {
            id: 'renew-repair',
            name: 'Renew & Repair',
            description: 'Anti-aging actives with botanical support',
            category: 'Advanced Renewal Series',
            backgroundImage: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/097cb637-6762-467b-a1d3-db0d530693f4_800w.jpg',
          },
          {
            id: 'botanical-blend',
            name: 'Botanical Blend',
            description: 'Nature-inspired actives for healthy glow',
            category: 'Natural Radiance Collection',
            backgroundImage: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/66c7e7a4-0871-4ca4-9a13-ee7daeeeebe7_800w.jpg',
          },
          {
            id: 'nourish-protect',
            name: 'Nourish & Protect',
            description: 'Rich moisturizers with barrier protection',
            category: 'Barrier Repair Collection',
            backgroundImage: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f0c6ca8f-90a8-4036-bdd1-9adc2e917c7b_3840w.jpg',
          },
        ],
      }}
      products={{
        title: 'Featured Products',
        subtitle: 'Thoughtful formulas, consciously packaged.',
        products: [
          {
            id: 'barrier-serum',
            name: 'Barrier Repair Serum',
            description: 'Ceramides + Niacinamide 5%',
            price: 42,
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/097cb637-6762-467b-a1d3-db0d530693f4_800w.jpg',
            badge: 'New',
            rating: 4,
            reviewCount: 162,
          },
          {
            id: 'cloud-cleanser',
            name: 'Cloud Cleanser',
            description: 'Amino Acid Gel',
            price: 22,
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8c09615d-a59e-4e70-a69c-f85d41f58008_800w.jpg',
            badge: 'pH 5.5',
            rating: 3,
            reviewCount: 84,
          },
          {
            id: 'silk-cream',
            name: 'Silk Moisture Cream',
            description: 'Squalane + Peptides',
            price: 34,
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c698c05d-cf04-4db6-bbeb-c6b5bacd1d26_800w.jpg',
            badge: 'Best Seller',
            rating: 5,
            reviewCount: 420,
          },
        ],
      }}
      philosophy={{
        backgroundImage: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4fbca9e2-8404-407b-b3f5-0d7031ed837c_1600w.jpg',
        heading: 'Our Philosophy',
        description: 'We believe skincare should be simple, effective, and kind to your skin barrier. Every formula is rooted in clinical research and nature, designed to work with your skin, not against it.',
        features: [
          'Clinically proven botanicals',
          'pH-balanced formulations',
          'Barrier-first approach',
          'Sustainable packaging',
        ],
        cta: {
          label: 'Learn Our Story',
          href: '#about',
        },
      }}
      footer={{
        newsletter: {
          title: 'Join Our Newsletter',
          subtitle: 'Get skincare tips and exclusive offers',
          placeholder: 'Enter your email',
        },
        sections: [
          {
            title: 'Shop',
            links: [
              { label: 'All Products', href: '#shop' },
              { label: 'Cleansers', href: '#cleansers' },
              { label: 'Serums', href: '#serums' },
              { label: 'Moisturizers', href: '#moisturizers' },
            ],
          },
          {
            title: 'Help',
            links: [
              { label: 'Contact', href: '#contact' },
              { label: 'Shipping', href: '#shipping' },
              { label: 'Returns', href: '#returns' },
              { label: 'FAQ', href: '#faq' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '#about' },
              { label: 'Journal', href: '#journal' },
              { label: 'Sustainability', href: '#sustainability' },
              { label: 'Careers', href: '#careers' },
            ],
          },
        ],
        socialLinks: [
          { platform: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: '#' },
          { platform: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: '#' },
          { platform: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: '#' },
          { platform: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: '#' },
        ],
        paymentIcons: [
          <CreditCard key="card" className="w-8 h-6" />,
          <ShieldCheck key="secure" className="w-8 h-6" />,
        ],
        copyright: '© 2025 Auré. All rights reserved.',
      }}
    />
  );
}

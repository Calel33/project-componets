import { ApparelLanding } from '@/ui/components/ecommerce';

const left = 'https://images.unsplash.com/photo-1520975922284-7b683b18f92f?q=80&w=1200&auto=format&fit=crop';
const right = 'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop';

export default function ApparelLandingDemo() {
  return (
    <ApparelLanding
      announcement="Free shipping on orders over $100"
      headerPrimary={[
        { label: 'Men', href: '#' },
        { label: 'Women', href: '#' },
        { label: 'Sale', href: '#' },
      ]}
      headerSecondary={[
        { label: 'Stores', href: '#' },
        { label: 'Help', href: '#' },
      ]}
      hero={{
        leftImage: left,
        rightImage: right,
        brandName: 'LYRA',
        leftCta: { label: 'Shop Men', href: '#' },
        rightCta: { label: 'Shop Women', href: '#' },
      }}
      newArrivals={[
        { image: right, title: 'Denim Jacket', description: 'Indigo', price: 129, badge: 'New' },
        { image: left, title: 'Relaxed Tee', description: 'Off-white', price: 39 },
        { image: right, title: 'Tapered Jeans', description: 'Washed blue', price: 89 },
        { image: left, title: 'Canvas Tote', description: 'Natural', price: 45 },
      ]}
      craftsmanship={{
        image: left,
        title: 'Crafted with care',
        description: 'Premium fabrics and timeless silhouettes built to last.',
        cta: { label: 'Learn more', href: '#' },
      }}
      fits={[
        { name: 'Slim', href: '#' },
        { name: 'Tapered', href: '#' },
        { name: 'Relaxed', href: '#' },
        { name: 'Straight', href: '#' },
        { name: 'Loose', href: '#' },
      ]}
    />
  );
}

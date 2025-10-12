import { HotelHero } from '@/ui/components/hotel';

const bg = 'https://images.unsplash.com/photo-1501117716987-c8e6189a0f33?q=80&w=2400&auto=format&fit=crop';

export default function HotelBookingDemo() {
  return (
    <HotelHero
      backgroundImage={bg}
      navigation={{
        brandName: 'Serenity Suites',
        tagline: 'Luxury by the Shore',
        navItems: [
          { label: 'Suites', href: '#suites' },
          { label: 'Dining', href: '#dining' },
          { label: 'Spa', href: '#spa' },
        ],
        phone: '+1 (800) 555-0199',
        onReserve: () => {},
      }}
      onSearch={(data) => console.log('search', data)}
      rooms={[
        {
          image:
            'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop',
          title: 'Deluxe Suite',
          description: 'Ocean view, king bed',
          pricePerNight: 320,
          badge: { icon: '✨', label: 'Popular', color: 'indigo' },
          onBook: () => {},
        },
        {
          image:
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop',
          title: 'Executive Suite',
          description: 'City view, lounge access',
          pricePerNight: 410,
          badge: { icon: '🌟', label: 'Featured', color: 'yellow' },
          onBook: () => {},
        },
        {
          image:
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop',
          title: 'Penthouse',
          description: 'Panoramic view, private terrace',
          pricePerNight: 890,
          badge: { icon: '💎', label: 'Premium', color: 'blue' },
          onBook: () => {},
        },
      ]}
      enableAnimations
    />
  );
}

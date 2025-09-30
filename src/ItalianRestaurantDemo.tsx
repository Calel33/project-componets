import React from 'react';
import {
  RestaurantHero,
  ChefTeamSection,
  MenuShowcase,
  FeatureGrid,
  RestaurantFooter,
} from '../ui/components/restaurant';
import type {
  RestaurantHeroProps,
  ChefTeamSectionProps,
  MenuShowcaseProps,
  FeatureGridProps,
  ReservationData,
} from '../ui/components/restaurant';

export const ItalianRestaurantDemo: React.FC = () => {
  const heroProps: RestaurantHeroProps = {
    brandName: "NONNA'S TABLE",
    headline: "Benvenuti a [IMG:0] Nonna's Table, [IMG:1] where tradition meets taste",
    description:
      "Four generations of authentic Italian recipes, served with passion in an atmosphere that feels like home. From handmade pasta to wood-fired pizzas, every dish tells a story.",
    heroImages: [
      {
        src: 'https://cdn.midjourney.com/1c83599c-faac-4943-9b6a-47e13b6df277/0_0.png?w=800&q=80',
        alt: 'Fresh pasta',
      },
      {
        src: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b59bad79-703a-4c05-8ed2-fafcc49a7b51_320w.jpg',
        alt: 'Italian chef',
      },
    ],
    badges: [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>',
        label: 'Fresh Daily',
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>',
        label: 'Wood-fired Oven',
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>',
        label: 'Award-winning',
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>',
        label: 'Family recipes',
      },
    ],
    primaryCTA: {
      label: 'Book a table',
      href: '#contact',
    },
    secondaryCTA: {
      label: 'View menu',
      href: '#menu',
    },
    navLinks: [
      { label: 'Menu', href: '#menu' },
      { label: 'Our Story', href: '#story' },
      { label: 'Events', href: '#events' },
      { label: 'Contact', href: '#contact' },
    ],
  };

  const chefTeamProps: ChefTeamSectionProps = {
    title: 'Meet our culinary family.',
    subtitle: 'Traditional Italian Experience',
    description:
      'From our famiglia to yours, experience the passion and tradition that has been passed down through generations.',
    chefs: [
      {
        name: 'Marco Romano',
        role: 'Head Chef',
        image:
          'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/76c3bb17-90f7-4f44-ba0f-faa4e1101e83_800w.jpg',
        icon: 'chef-hat',
      },
      {
        name: 'Sofia Benedetti',
        role: 'Sous Chef',
        image:
          'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/41c1c6ee-fb69-4705-8aeb-9c1dbc61edcb_800w.jpg',
        icon: 'utensils',
      },
      {
        name: 'Giuseppe Ricci',
        role: 'Pasta Master',
        image:
          'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/926d10d3-af41-47fe-a429-15ad531c8cad_800w.jpg',
        icon: 'wheat',
      },
      {
        name: 'Antonio Rossi',
        role: 'Pizza Chef',
        image:
          'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e90be3ec-52f2-4920-af4b-31f337ab931b_800w.jpg',
        icon: 'pizza',
      },
    ],
    features: ['Authentic Recipes', 'Fresh Ingredients', 'Warm Hospitality'],
    ctaText: 'Our Story',
    ctaHref: '#story',
    sectionCopy: {
      title: 'A legacy of flavor',
      description:
        'From our famiglia to yours, experience the passion and tradition that has been passed down through generations.',
    },
    rightCopy:
      'Our master chefs bring decades of culinary expertise from the heart of Italy to create unforgettable dining experiences.',
  };

  const menuProps: MenuShowcaseProps = {
    title: "Signature dishes we're passionate about.",
    subtitle: '(01) La Carta',
    dishes: [
      {
        name: 'Risotto alla Milanese',
        category: 'Primo',
        subcategory: 'Risotto',
        image:
          'https://cdn.midjourney.com/2eebbbc6-df55-4d9e-8b34-ad25cbc1ed0a/0_0.png?w=800&q=80',
      },
      {
        name: 'Pizza Margherita',
        category: 'Pizza',
        subcategory: 'Classica',
        image:
          'https://cdn.midjourney.com/3b8ab5be-cc27-4162-bc9f-d6937e463e58/0_0.png?w=800&q=80',
      },
      {
        name: 'Carbonara Classica',
        category: 'Pasta',
        subcategory: 'Romano',
        image:
          'https://cdn.midjourney.com/87c2476e-c102-40c7-aec2-a866e606cf9f/0_0.png?w=800&q=80',
      },
    ],
  };

  const featuresProps: FeatureGridProps = {
    title: 'Authentic Italian dining experience',
    subtitle: 'What makes us special',
    description:
      'From traditional family recipes to warm hospitality, every detail is crafted to transport you to the heart of Italy.',
    features: [
      {
        title: 'Dine among the clouds with breathtaking rooftop views',
        description:
          "Experience the city's most luxurious rooftop dining with stunning 360-degree views of Milano's skyline. Watch the sunset paint the Duomo golden while savoring authentic Italian cuisine in our elegant sky-high terrace.",
        image:
          'https://cdn.midjourney.com/e50840f8-f672-432e-aa8c-06ecdd161aeb/0_0.png?w=800&q=80',
        badge: 'ROOFTOP',
        badgeColor: 'amber',
        size: 'large',
        category: 'Panoramic city views',
        ctas: [
          { label: 'View rooftop menu', href: '#rooftop', variant: 'secondary' },
          { label: 'Reserve terrace table', href: '#contact', variant: 'primary' },
        ],
      },
      {
        title: 'Wood-fired pizza',
        description:
          'Authentic Neapolitan pizza baked in our imported wood-fired oven at 900°F for the perfect crispy crust.',
        image:
          'https://cdn.midjourney.com/67a6057f-f9f9-401a-a088-d4e35935b996/0_0.png?w=800&q=80',
        badge: 'TRADITIONAL',
        badgeColor: 'orange',
        size: 'small',
      },
      {
        title: 'Curated wine selection',
        description:
          'Over 200 Italian wines carefully selected from renowned vineyards across Tuscany, Piedmont, and Veneto.',
        image:
          'https://cdn.midjourney.com/f7dd88bb-8704-471e-935e-2bc2e8b70c1c/0_0.png?w=800&q=80',
        badge: 'SOMMELIER',
        badgeColor: 'purple',
        size: 'small',
      },
      {
        title: 'Family atmosphere',
        description:
          'Experience the warmth of Italian hospitality where every guest is treated like family.',
        image:
          'https://cdn.midjourney.com/cd7dcc46-3425-4003-a9db-e07773d935e3/0_0.png?w=800&q=80',
        badge: 'WARM',
        badgeColor: 'green',
        size: 'small',
      },
      {
        title: 'Craft cocktails',
        description:
          'Expertly crafted Italian cocktails featuring premium spirits, fresh herbs, and house-made bitters inspired by classic aperitivos.',
        image:
          'https://cdn.midjourney.com/fc61e2fd-de4d-4947-b7d0-865bb7c926a0/0_0.png?w=800&q=80',
        badgeColor: 'amber',
        size: 'small',
      },
      {
        title: 'Private dining',
        description:
          'Intimate private dining rooms perfect for celebrations, business dinners, and special occasions.',
        image:
          'https://cdn.midjourney.com/56a65816-1f8f-4e27-8718-5cd023b569da/0_0.png?w=800&q=80',
        badgeColor: 'blue',
        size: 'small',
      },
    ],
  };

  const handleReservation = (data: ReservationData) => {
    console.log('Reservation submitted:', data);
    alert(`Thank you! Your reservation for ${data.partySize} guests has been received.`);
  };

  return (
    <div className="min-h-screen bg-neutral-50 antialiased">
      <RestaurantHero {...heroProps} />
      
      <div className="w-full sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pr-4 pl-4">
        <ChefTeamSection {...chefTeamProps} />
      </div>
      
      <MenuShowcase {...menuProps} />
      
      <FeatureGrid {...featuresProps} />
      
      <RestaurantFooter
        brandName="Nonna's Table"
        description="Experience the warmth of Italian hospitality and the authentic flavors of traditional recipes passed down through generations. We can't wait to welcome you to our table."
        address="Via Roma 123, Milano"
        hours="Open daily 5:30 PM - 10:30 PM"
        phoneNumber="+1 (234) 567-8900"
        onReservationSubmit={handleReservation}
      />
    </div>
  );
};

export default ItalianRestaurantDemo;

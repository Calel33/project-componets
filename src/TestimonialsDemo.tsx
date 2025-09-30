import { TestimonialsGrid } from '../ui/components/testimonials';
import { Testimonial } from '../ui/components/testimonials/types';

const sampleTestimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'The platform has completely transformed our workflow. We\'ve seen a 40% increase in productivity since implementing it across our team.',
    author: {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      avatarAlt: 'Sarah Johnson headshot'
    },
    hasMeteor: true,
    meteorDelay: 1
  },
  {
    id: '2',
    quote: 'The security features are unmatched. As a financial institution, data protection is our priority, and this solution exceeds all our expectations.',
    author: {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Global Finance',
      avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
      avatarAlt: 'Michael Chen headshot'
    },
    hasMeteor: false
  },
  {
    id: '3',
    quote: 'Customer support is phenomenal. Whenever we\'ve had questions, the team responds quickly and effectively. It\'s refreshing to work with such professionals.',
    author: {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'RetailNow',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      avatarAlt: 'Emily Rodriguez headshot'
    },
    hasMeteor: false
  },
  {
    id: '4',
    quote: 'As a small business, we needed a solution that could scale with us. This platform has been perfect - powerful enough for our needs but without unnecessary complexity.',
    author: {
      name: 'David Wilson',
      role: 'Founder',
      company: 'Artisan Goods',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      avatarAlt: 'David Wilson headshot'
    },
    hasMeteor: true,
    meteorDelay: 2
  }
];

export const TestimonialsDemo = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <TestimonialsGrid
        sectionLabel="TESTIMONIALS"
        title="What Our Clients Say"
        description="Hear from our satisfied customers about their experience with our platform."
        testimonials={sampleTestimonials}
        columns={2}
        showMeteors={true}
      />
    </div>
  );
};
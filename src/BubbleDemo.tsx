/**
 * Bubble Childcare Demo
 * Quick demo to test the integration
 */

import { BubbleLanding } from '../ui/components/childcare';
import { Baby, GraduationCap, Shield, HeartHandshake, Rainbow, Puzzle, Rocket } from 'lucide-react';

export const BubbleDemo = () => {
  return (
    <BubbleLanding
      header={{
        logoUrl: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1b425c19-b754-4a17-9331-a8161895332d_800w.png',
      }}
      hero={{
        backgroundImage: 'https://cdn.midjourney.com/dcc55565-ffef-43f2-98b5-1ad0c52db984/0_0.png?w=800&q=80',
        backgroundVideo: 'https://cdn.midjourney.com/video/8d0ca3af-0e79-4e25-a349-b2b655d97726/1.mp4',
        title: 'Warm, Trusted Care for Growing Minds',
        description: 'At Bubble, we create a calm, joyful place where children feel safe to explore, imagine, and learn through play—guided by caring educators and a research-led approach.',
      }}
      features={[
        {
          icon: <Baby className="h-5 w-5" />,
          title: 'Small Group Care',
          description: 'Intentional ratios so every child is seen, heard, and supported daily.',
        },
        {
          icon: <GraduationCap className="h-5 w-5" />,
          title: 'Play-Based Learning',
          description: 'Curiosity-led activities build language, motor skills, and confidence.',
        },
        {
          icon: <Shield className="h-5 w-5" />,
          title: 'Safety First',
          description: 'Secured entry, trained staff, and clean, calm spaces designed for kids.',
        },
        {
          icon: <HeartHandshake className="h-5 w-5" />,
          title: 'Parent Partnership',
          description: 'Daily updates, open communication, and community events.',
        },
      ]}
      programs={{
        programs: [
          {
            image: 'https://cdn.midjourney.com/d0bb3c70-35a3-4f59-bd1f-6fe65e16ba65/0_0.png?w=800&q=80',
            imageAlt: 'Infant Care',
            ageRange: 'Ages 6 weeks-18 months',
            icon: <Rainbow className="h-3.5 w-3.5" />,
            title: 'Infant Care',
            description: 'Tender, individualized care for babies with loving attention to feeding, sleep, and sensory development.',
            link: '#visit',
          },
          {
            image: 'https://cdn.midjourney.com/8fc84cdb-7372-45f9-91ef-6f6d9cd33389/0_0.png?w=800&q=80',
            imageAlt: 'Toddler Adventures',
            ageRange: 'Ages 18 months–3',
            icon: <Puzzle className="h-3.5 w-3.5" />,
            title: 'Toddler Adventures',
            description: 'Dynamic programs for toddlers focusing on independence, creativity, and early communication skills.',
            link: '#visit',
          },
          {
            image: 'https://cdn.midjourney.com/126da838-69e2-4f78-9d60-23906be5b6b5/0_0.png?w=800&q=80',
            imageAlt: 'Preschool Programs',
            ageRange: 'Ages 3–5',
            icon: <Rocket className="h-3.5 w-3.5" />,
            title: 'Preschool Programs',
            description: 'Comprehensive learning for ages 3–5 with structured activities in literacy, math, science, and social skills.',
            link: '#visit',
          },
        ],
      }}
      promise={{
        title: 'A calm space where children thrive',
        description: 'Our educators design days that balance routine with discovery—so kids feel secure while they stretch into new ideas.',
        benefits: [
          'Gentle, positive guidance and social-emotional learning',
          'Healthy snacks and outdoor playtime daily',
          'Real-time updates through our parent app',
        ],
        stats: [
          { value: '12:1', label: 'Child-to-educator max' },
          { value: '100%', label: 'First-aid trained staff' },
          { value: '6am–6pm', label: 'Flexible care hours' },
        ],
        image: 'https://cdn.midjourney.com/eda3aa17-0ead-4314-9169-5172411b8eea/0_0.png?w=800&q=80',
        imageAlt: 'Classroom environment',
      }}
      testimonials={{
        testimonials: [
          {
            avatar: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3aeae5fa-2dbb-4d52-b874-a4ea8e0905a7_320w.jpg',
            avatarAlt: 'Amelia R.',
            name: 'Amelia R.',
            role: 'Parent of 3-year-old',
            quote: 'Our daughter runs into class smiling. The team is so attentive and the updates make us feel involved.',
          },
          {
            avatar: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg',
            avatarAlt: 'Liam K.',
            name: 'Liam K.',
            role: 'Parent of 4-year-old',
            quote: "Calm environment, thoughtful curriculum. We've seen huge growth in confidence and language.",
          },
          {
            avatar: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/278caecf-da29-4e6d-8136-25eb327075ea_800w.jpg',
            avatarAlt: 'Priya S.',
            name: 'Priya S.',
            role: 'Parent of 2-year-old',
            quote: 'The educators truly know our child. Communication is excellent and caring.',
          },
        ],
      }}
      visitCTA={{
        locationBadge: '21 Oakview Lane, Riverpark',
        title: 'Come say hi—tour Bubble',
        description: 'See the classrooms, meet our team, and learn about enrollment.',
        image: 'https://cdn.midjourney.com/8f603f06-b205-412b-a6fe-2cafbfe6264c/0_0.png?w=800&q=80',
        imageAlt: 'Parent and child tour',
        onSubmit: (data) => {
          console.log('Form submitted:', data);
          alert(`Thanks ${data.name}! We will confirm your visit shortly.`);
        },
      }}
      footer={{
        logoUrl: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1b425c19-b754-4a17-9331-a8161895332d_800w.png',
      }}
    />
  );
};

export default BubbleDemo;

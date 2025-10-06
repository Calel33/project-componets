/**
 * Camping Experience Selector Demo
 * 
 * Demonstrates the ExperienceSelector component with camping experiences.
 */

import { ExperienceSelector } from '@/ui/components/interactive';
import type { CampingExperienceProps } from '@/ui/components/interactive';
import { Tent, Flame, Waves, Sparkles, Mountain } from 'lucide-react';

const campingExperiences: CampingExperienceProps[] = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    icon: <Tent className="w-6 h-6" />,
    title: 'Luxury Tent',
    subtitle: 'Cozy glamping under the stars',
    defaultActive: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    icon: <Flame className="w-6 h-6" />,
    title: 'Campfire Feast',
    subtitle: "Gourmet s'mores & stories",
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    icon: <Waves className="w-6 h-6" />,
    title: 'Lakeside Retreat',
    subtitle: 'Private dock & canoe rides',
  },
  {
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Mountain Spa',
    subtitle: 'Outdoor sauna & hot tub',
  },
  {
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
    icon: <Mountain className="w-6 h-6" />,
    title: 'Guided Adventure',
    subtitle: 'Expert-led nature tours',
  },
];

export default function CampingExperienceDemo() {
  const handleSelect = (index: number) => {
    console.log('Selected experience:', campingExperiences[index].title);
  };

  return (
    <ExperienceSelector
      experiences={campingExperiences}
      heading="Escape in Style"
      subheading="Discover luxurious camping experiences in nature's most breathtaking spots."
      onSelect={handleSelect}
    />
  );
}

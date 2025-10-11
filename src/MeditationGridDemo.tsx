import type { MeditationSession, SessionCategory } from '@/ui/components/types/wellness.types';
import { MeditationGrid } from '@/ui/components/wellness';

const sessions: MeditationSession[] = [
  { id: '1', title: 'Daily Calm', category: 'daily', duration: 10, backgroundImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop', badge: 'Daily' , stats: { streak: 8 }},
  { id: '2', title: 'Deep Sleep', category: 'sleep', duration: 20, backgroundImage: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop' },
  { id: '3', title: 'Box Breathing', category: 'breath', duration: 5, backgroundImage: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop', badge: 'Popular' },
  { id: '4', title: 'Laser Focus', category: 'focus', duration: 12, backgroundImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop' },
  { id: '5', title: 'Ease Anxiety', category: 'anxiety', duration: 8, backgroundImage: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop' },
  { id: '6', title: 'Loving Kindness', category: 'compassion', duration: 15, backgroundImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop' },
  { id: '7', title: 'Evening Wind-down', category: 'sleep', duration: 14, backgroundImage: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop' },
  { id: '8', title: 'Morning Clarity', category: 'focus', duration: 9, backgroundImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop' },
];

const categories: SessionCategory[] = [
  { name: 'Daily', color: 'emerald', sessionCount: 24, icon: null },
  { name: 'Sleep', color: 'blue', sessionCount: 18, icon: null },
  { name: 'Breath', color: 'purple', sessionCount: 12, icon: null },
];

const userProgress = { hoursThisMonth: 12, focusImprovement: 18, stressReduction: 22 };

export default function MeditationGridDemo() {
  return <MeditationGrid sessions={sessions} categories={categories} userProgress={userProgress} />;
}

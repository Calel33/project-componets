import DesignPortfolioLanding from '@/ui/components/interior-design/DesignPortfolioLanding';

type PortfolioProject = {
  image: string;
  title: string;
  description: string;
  category: string;
  stats?: { icon: any; label: string; value: string }[];
};

type ProcessStep = {
  number: number;
  title: string;
  description: string;
  backgroundImage?: string;
  icon?: any;
};

type BlogPost = {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
  featured?: boolean;
};

const projects: PortfolioProject[] = [
  {
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop',
    title: 'Courtyard House',
    description: 'A calm, textural family home centered on light and refuge.',
    category: 'Residential',
    stats: [
      { icon: null, label: 'Year', value: '2024' },
      { icon: null, label: 'Area', value: '2,400 sqft' },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1400&auto=format&fit=crop',
    title: 'Cafe Lumen',
    description: 'Warm oak, linen, and brass create a grounded, luminous hospitality space.',
    category: 'Commercial',
    stats: [
      { icon: null, label: 'Year', value: '2023' },
      { icon: null, label: 'Seats', value: '42' },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop',
    title: 'Studio North',
    description: 'A minimalist studio with sculptural partitions and soft daylight.',
    category: 'Workspace',
    stats: [
      { icon: null, label: 'Year', value: '2024' },
      { icon: null, label: 'Rooms', value: '5' },
    ],
  },
];

const steps: ProcessStep[] = [
  { number: 1, title: 'Discovery', description: 'Understanding goals, context, and constraints.', backgroundImage: projects[0].image, icon: null },
  { number: 2, title: 'Concept', description: 'Moodboards, materials, and preliminary planning.', backgroundImage: projects[1].image, icon: null },
  { number: 3, title: 'Design', description: 'Iterative design development and specifications.', backgroundImage: projects[2].image, icon: null },
  { number: 4, title: 'Build', description: 'Partner coordination, procurement, and oversight.', backgroundImage: projects[1].image, icon: null },
  { number: 5, title: 'Handover', description: 'Final styling and documentation for longevity.', backgroundImage: projects[0].image, icon: null },
];

const posts: BlogPost[] = [
  {
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop',
    title: 'Selecting materials that age with grace',
    excerpt: 'Natural finishes develop character with use—here’s how to choose and care for them.',
    date: 'Sep 20, 2025',
    tags: ['Materials', 'Sustainability'],
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop',
    title: 'Layering light for mood and function',
    excerpt: 'Ambient, task, and accent lighting work together to shape experience.',
    date: 'Aug 12, 2025',
    tags: ['Lighting'],
  },
  {
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1400&auto=format&fit=crop',
    title: 'Designing small spaces with intention',
    excerpt: 'Proportion, storage, and continuity make compact rooms feel generous.',
    date: 'Jul 05, 2025',
    tags: ['Small spaces'],
  },
];

const logos = [
  { src: 'https://dummyimage.com/100x30/fff/aaa.png&text=FRAME', alt: 'Frame' },
  { src: 'https://dummyimage.com/100x30/fff/aaa.png&text=KIN', alt: 'Kin' },
  { src: 'https://dummyimage.com/100x30/fff/aaa.png&text=NEST', alt: 'Nest' },
  { src: 'https://dummyimage.com/100x30/fff/aaa.png&text=FORM', alt: 'Form' },
];

export default function DesignPortfolioDemo() {
  return (
    <DesignPortfolioLanding
      // Example Spline background (replace with your own public link)
      splineUrl={undefined}
      projects={projects}
      steps={steps}
      posts={posts}
      logos={logos}
    />
  );
}

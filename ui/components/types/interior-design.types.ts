export interface PortfolioProject {
  image: string;
  title: string;
  description: string;
  category: string;
  stats: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  backgroundImage: string;
  icon: React.ReactNode;
}

export interface BlogPost {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

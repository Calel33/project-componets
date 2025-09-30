/**
 * Type definitions for Feature Grid components
 * @module feature-grid.types
 */

import { LucideIcon } from 'lucide-react';

export interface ButtonConfig {
  label: string;
  icon?: LucideIcon;
  variant: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  href?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: {
    label: string;
    variant?: 'new' | 'featured' | 'popular';
  };
  metadata?: string;
  size?: 'hero' | 'standard' | 'compact';
  buttons?: ButtonConfig[];
  hasGradientOverlay?: boolean;
}

export interface FeatureGridProps {
  sectionLabel?: string;
  title: string;
  description?: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

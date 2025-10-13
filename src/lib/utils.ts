import { type ClassValue, clsx } from 'clsx';

// Simple utility function to merge class names
// Using clsx for conditional class names and a simple join for merging
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
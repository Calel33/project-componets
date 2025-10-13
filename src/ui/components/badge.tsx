import React from 'react';

// Simple utility function to merge class names without tailwind-merge dependency
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

const badgeVariants = {
  default: 'border-transparent bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300',
  destructive: 'border-transparent bg-red-600 text-white hover:bg-red-700',
  outline: 'text-gray-800 border-gray-300',
  // Custom variants for EV car components
  secondaryLight: 'border-transparent bg-blue-100 text-blue-800',
  success: 'border-transparent bg-green-100 text-green-800',
};

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div 
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        badgeVariants[variant],
        className
      )} 
      {...props} 
    />
  );
}

export { Badge, badgeVariants };
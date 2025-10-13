import React, { useState } from 'react';
import { cn } from '../../lib/utils';

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'interactive' | 'elevated';
  hover?: boolean;
  click?: boolean;
  onClick?: () => void;
}

export interface GlassCardHeaderProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export interface GlassCardFeatureProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  value?: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', hover = true, click = false, onClick, children, ...props }, ref) => {
    const [isClicked, setIsClicked] = useState(false);
    
    const baseClasses = "relative overflow-hidden transition-all duration-300";
    
    const variantClasses = {
      default: "bg-white/5 backdrop-blur-xl border border-white/10",
      interactive: "bg-white/5 backdrop-blur-xl border border-white/10 cursor-pointer",
      elevated: "bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl"
    };
    
    const hoverClasses = hover ? "hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:-translate-y-1" : "";
    const clickClasses = click ? "active:scale-95" : "";
    const clickedClasses = isClicked ? "bg-white/15 border-white/30" : "";
    
    const handleClick = () => {
      if (click) {
        setIsClicked(!isClicked);
      }
      if (onClick) {
        onClick();
      }
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          hoverClasses,
          clickClasses,
          clickedClasses,
          "rounded-2xl p-6",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {/* Shimmer effect for interactive cards */}
        {variant === 'interactive' && (
          <div className="absolute inset-0 -top-full -left-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-12deg] transition-all duration-1000 group-hover:top-full group-hover:left-full" />
        )}
        
        {/* Glow effect on hover */}
        {hover && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        )}
        
        {children}
      </div>
    );
  }
);
GlassCard.displayName = 'GlassCard';

const GlassCardHeader: React.FC<GlassCardHeaderProps> = ({ 
  icon, 
  title, 
  subtitle, 
  badge, 
  className 
}) => {
  return (
    <div className={cn("flex items-start gap-4 mb-6", className)}>
      {icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex-shrink-0">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {badge && (
            <span className="inline-flex items-center rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium px-2.5 py-0.5 border border-blue-500/30">
              {badge}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="text-sm text-white/70 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

const GlassCardFeature: React.FC<GlassCardFeatureProps> = ({ 
  title, 
  description, 
  icon, 
  value, 
  unit, 
  trend, 
  className 
}) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>;
      case 'down':
        return <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>;
      default:
        return null;
    }
  };

  return (
    <div className={cn("bg-white/5 rounded-xl p-4 border border-white/10", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
              {icon}
            </div>
          )}
          <div>
            <h4 className="text-sm font-medium text-white">{title}</h4>
            <p className="text-xs text-white/60 mt-0.5">{description}</p>
          </div>
        </div>
        {value !== undefined && (
          <div className="flex items-center gap-1">
            <span className="text-lg font-semibold text-white">{value}</span>
            {unit && <span className="text-xs text-white/60">{unit}</span>}
            {trend && getTrendIcon()}
          </div>
        )}
      </div>
    </div>
  );
};

const GlassCardStats: React.FC<{ 
  stats: Array<{ 
    label: string; 
    value: string | number; 
    unit?: string; 
    icon?: React.ReactNode;
  }>;
  className?: string;
}> = ({ stats, className }) => {
  return (
    <div className={cn("grid grid-cols-2 gap-3", className)}>
      {stats.map((stat, index) => (
        <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
          <div className="flex items-center gap-2">
            {stat.icon && (
              <div className="flex h-6 w-6 items-center justify-center rounded bg-white/10 backdrop-blur-sm">
                {stat.icon}
              </div>
            )}
            <div>
              <p className="text-xs text-white/60">{stat.label}</p>
              <p className="text-sm font-semibold text-white">
                {stat.value}
                {stat.unit && <span className="text-xs text-white/60 ml-1">{stat.unit}</span>}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { GlassCard, GlassCardHeader, GlassCardFeature, GlassCardStats };
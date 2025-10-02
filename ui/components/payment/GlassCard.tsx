import { GlassCardProps } from './types';

export const GlassCard = ({
  children,
  gradient,
  glow = false,
  hover = false,
  className = '',
  onClick,
}: GlassCardProps) => {
  const baseClasses = 'rounded-2xl backdrop-blur-xl border border-white/10';
  const glassEffect = 'bg-white/5';
  const glowEffect = glow ? 'shadow-[0_0_40px_rgba(59,130,246,0.1),0_0_80px_rgba(120,119,198,0.05)]' : '';
  const hoverEffect = hover ? 'transition-all duration-300 hover:bg-white/10' : '';
  const cursorStyle = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`${baseClasses} ${glassEffect} ${glowEffect} ${hoverEffect} ${cursorStyle} ${className}`}
      onClick={onClick}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br opacity-20 rounded-2xl" style={{ background: gradient }} />
      )}
      <div className="relative">{children}</div>
    </div>
  );
};

import { Star } from 'lucide-react';
import { PaymentTestimonialsProps } from './types';
import { GlassCard } from './GlassCard';

export const PaymentTestimonials = ({
  testimonial,
  stats,
  className = '',
}: PaymentTestimonialsProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <section className={`relative py-16 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <GlassCard className="p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">{renderStars(testimonial.rating)}</div>
                <span className="text-sm text-white/60">{testimonial.rating}.0</span>
              </div>
              <h3 className="text-2xl lg:text-3xl mb-6 leading-tight font-bold text-white">
                {testimonial.quote}
              </h3>
              <p className="text-lg leading-relaxed mb-8 text-white/80">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-white">{testimonial.author.name}</p>
                  <p className="text-sm text-white/60">{testimonial.author.role}</p>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="space-y-8">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="p-8 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/20 rounded-full mx-auto mb-4 border border-white/10">
                  {stat.icon}
                </div>
                <p className="text-sm font-medium mb-2 text-white/80">{stat.label}</p>
                <p className="text-4xl mb-2 font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.subtitle}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

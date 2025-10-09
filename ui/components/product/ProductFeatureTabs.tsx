import React, { useState } from 'react';
import { Star, Users, ChevronRight } from 'lucide-react';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';
import { ProductFeatureTabsProps } from '../types/product.types';
import { DiagramWithNodes } from './DiagramWithNodes';

export const ProductFeatureTabs: React.FC<ProductFeatureTabsProps> = ({
  tabs,
  rating,
  totalReviews,
  recommendPercent,
  diagramNodes,
  backgroundImage,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');
  
  const animatedRating = useCounterAnimation({
    end: rating,
    duration: 2000,
    decimals: 1
  });
  
  const animatedRecommend = useCounterAnimation({
    end: recommendPercent,
    duration: 2000,
    suffix: '%'
  });

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section className={`relative z-10 animate-[fadeInUp_1s_ease-out_1.2s_forwards] ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Diagram */}
          <DiagramWithNodes 
            nodes={diagramNodes || []}
            backgroundImage={backgroundImage}
          />

          {/* Content */}
          <div>
            {/* Tab Navigation */}
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-3 py-1 font-medium transition-all duration-200 font-sans ${
                    activeTab === tab.id
                      ? 'bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/30'
                      : 'bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10 hover:scale-105'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="tech-content">
              {activeTabData?.content}
            </div>

            {/* Stats */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/40 transition-all">
                  <Star className="w-5 h-5 text-zinc-400 hover:text-emerald-400 transition-colors" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl tracking-tight font-sans font-semibold">
                      {animatedRating.count}
                    </span>
                    <span className="text-sm text-neutral-400 font-sans">/5</span>
                  </div>
                  <p className="text-xs text-neutral-400 font-sans">{totalReviews} professional reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/40 transition-all">
                  <Users className="w-5 h-5 text-gray-400 hover:text-emerald-400 transition-colors" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl tracking-tight font-sans font-semibold">
                      {animatedRecommend.count}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 font-sans">Users recommend to colleagues</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#"
                className="relative inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white hover:scale-105 transition-all duration-200 group"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"></span>
                <span className="absolute inset-0 rounded-xl ring-1 ring-emerald-400/40 group-hover:ring-emerald-400/60 transition-all"></span>
                <span className="relative font-sans">Technical Documentation</span>
                <ChevronRight className="relative h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

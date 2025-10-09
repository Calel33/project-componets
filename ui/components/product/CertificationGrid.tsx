import React from 'react';
import { CertificationGridProps } from '../types/product.types';

export const CertificationGrid: React.FC<CertificationGridProps> = ({ 
  certifications, 
  className = '' 
}) => {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10 hover:bg-white/10 hover:ring-emerald-400/40 transition-all duration-300 cursor-pointer group"
        >
          <div className="text-sm font-medium text-white font-sans group-hover:text-emerald-300 transition-colors">
            {cert.title}
          </div>
          <div className="text-xs text-neutral-400 font-sans group-hover:text-neutral-300 transition-colors">
            {cert.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
};

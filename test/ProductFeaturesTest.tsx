import React from 'react';
import { ProductFeatureTabs } from '../ui/components/product/ProductFeatureTabs';

const ProductFeaturesTest: React.FC = () => {
  const tabs = [
    {
      id: 'technology',
      label: 'Technology',
      content: (
        <div>
          <h3 className="text-4xl tracking-tight text-white sm:text-5xl font-sans font-semibold hover:text-emerald-200 transition-colors duration-500">
            Industry‑leading precision, professionally certified
          </h3>
          <p className="mt-4 text-neutral-300 font-sans">
            Advanced multi-spectral analysis technology delivers unmatched color accuracy across diverse materials and lighting conditions.
          </p>
        </div>
      )
    },
    {
      id: 'specs',
      label: 'Technical Specs',
      content: (
        <div>
          <h3 className="text-4xl tracking-tight text-white sm:text-5xl font-sans font-semibold">
            Technical Specifications
          </h3>
          <p className="mt-4 text-neutral-300 font-sans">
            Precision engineered with cutting-edge hardware and software integration.
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-sm text-neutral-400 font-sans">Spectral Range</span>
              <span className="text-sm text-neutral-200 font-sans">380-780 nm</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-sm text-neutral-400 font-sans">Accuracy</span>
              <span className="text-sm text-neutral-200 font-sans">±0.03 ΔE*ab</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <ProductFeatureTabs
        tabs={tabs}
        specs={[
          { label: 'Spectral Range', value: '380-780 nm' },
          { label: 'Accuracy', value: '±0.03 ΔE*ab' }
        ]}
        certifications={[
          { title: 'ISO 11664', subtitle: 'Colorimetry Standards' }
        ]}
        rating={4.8}
        totalReviews="22k+"
        recommendPercent={94}
      />
    </div>
  );
};

export default ProductFeaturesTest;

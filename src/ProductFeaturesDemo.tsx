import React from 'react';
import { ProductFeatureTabs } from '../ui/components/product/ProductFeatureTabs';
import { SpecList } from '../ui/components/product/SpecList';
import { CertificationGrid } from '../ui/components/product/CertificationGrid';

const ProductFeaturesDemo: React.FC = () => {
  // Tab content
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
            Engineered for professionals who demand excellence in every measurement.
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
            Precision engineered with cutting-edge hardware and software integration for professional color analysis workflows.
          </p>
          <div className="mt-6">
            <SpecList
              specs={[
                { label: 'Spectral Range', value: '380-780 nm' },
                { label: 'Accuracy', value: '±0.03 ΔE*ab' },
                { label: 'Measurement Time', value: '0.5 seconds' },
                { label: 'Resolution', value: '0.001 nm' },
                { label: 'Operating Temperature', value: '-10°C to 50°C' },
                { label: 'Battery Life', value: '12 hours continuous' }
              ]}
            />
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      label: 'Certifications',
      content: (
        <div>
          <h3 className="text-4xl tracking-tight text-white sm:text-5xl font-sans font-semibold">
            Certifications & Standards
          </h3>
          <p className="mt-4 text-neutral-300 font-sans">
            Meets and exceeds international standards for color measurement and professional certification requirements.
          </p>
          <div className="mt-6">
            <CertificationGrid
              certifications={[
                { title: 'ISO 11664', subtitle: 'Colorimetry Standards' },
                { title: 'CIE Standard', subtitle: 'Illuminant D65' },
                { title: 'ASTM D2244', subtitle: 'Color Difference Calculation' },
                { title: 'ISO 9001', subtitle: 'Quality Management' },
                { title: 'CE Certified', subtitle: 'European Conformity' },
                { title: 'FCC Part 15', subtitle: 'Radio Frequency Compliance' }
              ]}
            />
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Product Features Demo</h1>
        
        <ProductFeatureTabs
          tabs={tabs}
          specs={[
            { label: 'Spectral Range', value: '380-780 nm' },
            { label: 'Accuracy', value: '±0.03 ΔE*ab' },
            { label: 'Measurement Time', value: '0.5 seconds' }
          ]}
          certifications={[
            { title: 'ISO 11664', subtitle: 'Colorimetry Standards' },
            { title: 'CIE Standard', subtitle: 'Illuminant D65' }
          ]}
          rating={4.8}
          totalReviews="22k+"
          recommendPercent={94}
          backgroundImage="https://cdn.midjourney.com/f50bf4af-8fd7-4c3c-b93c-e3927506a2c9/0_0.png?w=800&q=80"
        />
      </div>
    </div>
  );
};

export default ProductFeaturesDemo;

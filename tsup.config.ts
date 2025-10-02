import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    // Component domains (no main index due to naming conflicts - import from specific domains)
    'digital-health/index': 'ui/components/digital-health/index.ts',
    'payment/index': 'ui/components/payment/index.ts',
    'dashboard-sidebar/index': 'ui/components/dashboard-sidebar/index.ts',
    'defi-earn/index': 'ui/components/defi-earn/index.ts',
    'auth/index': 'ui/components/auth/index.ts',
    'childcare/index': 'ui/components/childcare/index.ts',
    'medical/index': 'ui/components/medical/index.ts',
    'web3/index': 'ui/components/web3/index.ts',
    'automotive/index': 'ui/components/automotive/index.ts',
    'creative-studio/index': 'ui/components/creative-studio/index.ts',
    'dashboard/index': 'ui/components/dashboard/index.ts',
    'feature-grid/index': 'ui/components/feature-grid/index.ts',
    'footer/index': 'ui/components/footer/index.ts',
    'interactive-studio/index': 'ui/components/interactive-studio/index.ts',
    'nova/index': 'ui/components/nova/index.ts',
    'onboarding/index': 'ui/components/onboarding/index.ts',
    'portfolio/index': 'ui/components/portfolio/index.ts',
    'restaurant/index': 'ui/components/restaurant/index.ts',
    'skincare/index': 'ui/components/skincare/index.ts',
    'storytelling/index': 'ui/components/storytelling/index.ts',
    'testimonials/index': 'ui/components/testimonials/index.ts',
    'unboxing/index': 'ui/components/unboxing/index.ts',
    'webgl/index': 'ui/components/webgl/index.ts',
    
    // Shared hooks
    'hooks/index': 'ui/hooks/index.ts',
  },
  
  format: ['cjs', 'esm'],
  dts: false, // Disabled due to naming conflicts - will fix later
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  
  // Suppress warnings for client-side only code
  noExternal: [],
});

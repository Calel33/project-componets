import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    // Component domains (no main index due to naming conflicts - import from specific domains)
    'digital-health/index': 'ui/components/digital-health/index.ts',
    'payment/index': 'ui/components/payment/index.ts',
    'dashboard-sidebar/index': 'ui/components/dashboard-sidebar/index.ts',
    'defi-earn/index': 'ui/components/defi-earn/index.ts',
    'auth/index': 'ui/components/auth/index.ts',
    'admin/index': 'ui/components/admin/index.ts',
    'childcare/index': 'ui/components/childcare/index.ts',
    'analytics/index': 'ui/components/analytics/index.ts',
    'medical/index': 'ui/components/medical/index.ts',
    'web3/index': 'ui/components/web3/index.ts',
    'automotive/index': 'ui/components/automotive/index.ts',
    'background/index': 'ui/components/background/index.ts',
    'business/index': 'ui/components/business/index.ts',
    'business-dashboard/index': 'ui/components/business-dashboard/index.ts',
    'business-listing/index': 'ui/components/business-listing/index.ts',
    'chat/index': 'ui/components/chat/index.ts',
    'creative-studio/index': 'ui/components/creative-studio/index.ts',
    'directory/index': 'ui/components/directory/index.ts',
    'dashboard/index': 'ui/components/dashboard/index.ts',
    'feature-grid/index': 'ui/components/feature-grid/index.ts',
    'footer/index': 'ui/components/footer/index.ts',
    'interactive-studio/index': 'ui/components/interactive-studio/index.ts',
    'interactive/index': 'ui/components/interactive/index.ts',
    'email/index': 'ui/components/email/index.ts',
    'ecommerce/index': 'ui/components/ecommerce/index.ts',
    'faq/index': 'ui/components/faq/index.ts',
    'fashion/index': 'ui/components/fashion/index.ts',
    'hero/index': 'ui/components/hero/index.ts',
    'hotel/index': 'ui/components/hotel/index.ts',
    'nova/index': 'ui/components/nova/index.ts',
    'onboarding/index': 'ui/components/onboarding/index.ts',
    'portfolio/index': 'ui/components/portfolio/index.ts',
    'product/index': 'ui/components/product/index.ts',
    'restaurant/index': 'ui/components/restaurant/index.ts',
    'skincare/index': 'ui/components/skincare/index.ts',
    'storytelling/index': 'ui/components/storytelling/index.ts',
    'testimonials/index': 'ui/components/testimonials/index.ts',
    'unboxing/index': 'ui/components/unboxing/index.ts',
    'webgl/index': 'ui/components/webgl/index.ts',
    'interior-design/index': 'ui/components/interior-design/index.ts',
    'scheduling/index': 'ui/components/scheduling/index.ts',
    'wellness/index': 'ui/components/wellness/index.ts',
    
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

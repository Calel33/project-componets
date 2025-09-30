/**
 * UI Component Library - Main Entry Point
 * Barrel export for all reusable UI components
 * 
 * Note: Due to naming conflicts across domains (e.g., FeatureCardProps, StatCardProps),
 * it's recommended to import directly from domain folders:
 * 
 * @example
 * // Recommended - Import from specific domain
 * import { FeatureGrid } from '@/ui/components/feature-grid';
 * import { FeatureCardProps } from '@/ui/components/feature-grid/types';
 * 
 * // Alternative - Import from namespaced exports
 * import * as Childcare from '@/ui/components/childcare';
 * import * as Nova from '@/ui/components/nova';
 * 
 * @module ui
 */

// Re-export domain modules as namespaces to avoid conflicts
export * as Auth from './components/auth';
export * as Automotive from './components/automotive';
export * as Childcare from './components/childcare';
export * as FeatureGrid from './components/feature-grid';
export * as Footer from './components/footer';
export * as InteractiveStudio from './components/interactive-studio';
export * as Medical from './components/medical';
export * as Nova from './components/nova';
export * as Onboarding from './components/onboarding';
export * as Payment from './components/payment';
export * as Portfolio from './components/portfolio';
export * as Restaurant from './components/restaurant';
export * as Storytelling from './components/storytelling';
export * as Unboxing from './components/unboxing';
export * as Web3 from './components/web3';
export * as WebGL from './components/webgl';
export * as Skincare from './components/skincare';

// Shared Hooks (no conflicts)
export { useCardFormatter } from './hooks/useCardFormatter';
export { useCardValidation } from './hooks/useCardValidation';
export { useChartSetup } from './hooks/useChartSetup';
export { useScrollToTop } from './hooks/useScrollToTop';
export { useWebGLShader } from './hooks/useWebGLShader';
export { useScrollAnimation } from './hooks/useScrollAnimation';
export { useCart } from './hooks/useCart';
export { useTheme } from './hooks/useTheme';
export { useParallax } from './hooks/useParallax';

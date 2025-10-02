# 🎯 Login Interface with Animated Button - UI Integration Prompt

**Source**: `ideas/Login Interface with Animated Button.html`

Integrate this futuristic login with animated gradient button and particle effects into our **project-componets** React library.

**CURRENT PROJECT CONTEXT:**
- React 19 + Vite, TypeScript 5, Tailwind CSS 3
- Component Location: `ui/components/auth/`
- Types: `ui/components/types/auth.types.ts`

**UI FEATURES:**
- **Animated gradient button** (border animation, gradient rotation, pulsing glow)
- **Particle.js stars** background inside button
- **Social login buttons** (Google, GitHub)
- **Glassmorphic form card** with gradient overlays
- **Geist font** with letter-spacing
- Forgot password link

**TypeScript Types:**
```typescript
export interface AnimatedButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'button';
  onClick?: () => void;
  loading?: boolean;
}

export interface NebulaloginProps {
  onLogin: (data: LoginFormData) => void | Promise<void>;
  onGoogleLogin?: () => void;
  onGitHubLogin?: () => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  loading?: boolean;
}
```

**KEY ANIMATIONS:**
- Gradient border rotation (5s infinite)
- Pulsing glow circles (4s infinite)
- Particle stars moving upward
- Button scale on hover (1.06)
- Focus states with gradient borders

**COMPONENTS TO CREATE:**
1. `NebulaLoginForm.tsx` - Main login form
2. `AnimatedGradientButton.tsx` - Reusable button with particles
3. `ParticleBackground.tsx` - Particle.js wrapper (optional)
4. `SocialLoginButton.tsx` - Social auth buttons
5. `ui/components/types/auth.types.ts`

**DELIVERABLES:**
- ✅ React components with animations
- ✅ Particle.js integration or CSS alternative
- ✅ Gradient border keyframe animations
- ✅ Social login button variants
- ✅ README with usage examples
- ✅ Demo in `src/NebulaLoginDemo.tsx`

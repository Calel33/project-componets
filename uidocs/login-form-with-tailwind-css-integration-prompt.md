# 🎯 Login Form with Tailwind CSS - UI Integration Prompt

**Source**: `ideas/Login Form with Tailwind CSS.html`

Integrate this minimalist Quantum login form with gradient background into our **project-componets** React library.

**CURRENT PROJECT CONTEXT:**
- React 19 + Vite, TypeScript 5, Tailwind CSS 3
- Component Location: `ui/components/auth/`
- Types: `ui/components/types/auth.types.ts`

**UI FEATURES:**
- **Glassmorphic card** with backdrop blur
- **Gradient background** overlay
- **Logo with layers icon**
- Email/password inputs with focus states
- Remember me checkbox
- Forgot password link
- Sign up link

**TypeScript Types:**
```typescript
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void | Promise<void>;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  loading?: boolean;
  error?: string;
}
```

**KEY FEATURES:**
- Glassmorphic card design
- Gradient background (from-accent/10 via dark to-accent/10)
- Focus ring on inputs (ring-accent)
- Custom styled checkbox
- Rounded button with hover effect

**COMPONENTS TO CREATE:**
1. `QuantumLoginForm.tsx` - Main form component
2. `GlassmorphicCard.tsx` - Reusable card wrapper
3. `ui/components/types/auth.types.ts`

**DELIVERABLES:**
- ✅ React form with validation
- ✅ Glassmorphic styling utilities
- ✅ Focus state management
- ✅ Loading states
- ✅ README with usage examples
- ✅ Demo in `src/QuantumLoginDemo.tsx`

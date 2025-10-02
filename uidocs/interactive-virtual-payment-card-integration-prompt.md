# 🎯 Interactive Virtual Payment Card UI - UI Integration Prompt

**Source**: `ideas/Interactive Virtual Payment Card UI.html`

Integrate this 3D flippable payment card with glassmorphism into our **project-componets** React library.

**CURRENT PROJECT CONTEXT:**
- React 19 + Vite, TypeScript 5, Tailwind CSS 3
- Component Location: `ui/components/payment/`
- Types: `ui/components/types/payment.types.ts`

**UI FEATURES:**
- **3D card flip** animation (rotateY 180deg)
- **Glassmorphism** effect (backdrop-blur, rgba backgrounds)
- **Shimmer animation** across card surface
- **Card front**: Logo, chip, contactless icon, masked number, cardholder, expiry
- **Card back**: Magnetic strip, CVV field, card ID, terms
- Click to flip interaction

**TypeScript Types:**
```typescript
export interface VirtualCardData {
  cardNumber: string; // Full number (masked display)
  cardHolder: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  cardId: string;
  issuer: string;
}

export interface VirtualPaymentCardProps {
  cardData: VirtualCardData;
  onFlip?: (showingBack: boolean) => void;
  enableFlip?: boolean;
}
```

**KEY ANIMATIONS:**
- 3D flip transition (0.8s cubic-bezier)
- Shimmer effect (4s infinite animation)
- Backface-visibility for proper 3D rendering
- Transform-style: preserve-3d

**COMPONENTS TO CREATE:**
1. `VirtualPaymentCard.tsx` - 3D card container
2. `CardFront.tsx` - Front face with details
3. `CardBack.tsx` - Back face with CVV/terms
4. `ui/components/types/payment.types.ts`

**DELIVERABLES:**
- ✅ React components with 3D transforms
- ✅ Glassmorphism CSS utilities
- ✅ Click/tap flip interaction
- ✅ Responsive sizing
- ✅ README with usage examples
- ✅ Demo in `src/VirtualCardDemo.tsx`

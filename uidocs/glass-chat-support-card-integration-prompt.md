# 🎯 Glass Chat Support Card - UI Integration Prompt

## Source Design
**Component Name**: Nova Assist - Round-the-Clock Chat Support  
**Source File**: `ideas/Glass Chat Support Card.html`  
**Design Style**: Glassmorphic chat interface with scrollable messages and form submission

---

I want to integrate this custom UI design into our **project-componets** React component library. Please extract and adapt this interface to work with our React 19 + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 (design tokens from design-system/)
- Language: TypeScript 5 (strict mode, no `any` types)
- Component Location: `ui/components/chat/`
- Types Location: `ui/components/types/chat.types.ts`
- Existing functionality: Reusable component library with centralized type definitions

**UI TO INTEGRATE:**

The Glass Chat Card includes:
- **Glassmorphism card** with backdrop-blur and ring borders
- **Chat header** with icon and title
- **Scrollable message area** with alternating message styles
- **Message bubbles** (left: support, right: user)
- **Input form** with submit button
- **Auto-scroll** to latest message
- **Smooth animations** on message addition

**Key Design Features:**
- Glassmorphism (`backdrop-blur-xl`, `bg-white/10`, `ring-white/20`)
- Color-coded messages (white/10 for support, emerald/30 for user)
- Scrollable container with `max-h-[300px]`
- Icon integration (message-circle, send)
- Inter font family
- Dark theme optimized

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Component Structure**
   Create modular chat components:
   - `GlassChatCard.tsx` - Main card container
   - `ChatHeader.tsx` - Header with icon and title
   - `ChatMessages.tsx` - Scrollable message list
   - `ChatMessage.tsx` - Individual message bubble
   - `ChatInput.tsx` - Input form with submit

2. 🎨 **Design System Integration**
   - Replace hard-coded colors with design tokens
   - Use Tailwind glassmorphism utilities
   - Implement message color variants
   - Support custom themes

3. 🔧 **TypeScript Types**
   Define in `ui/components/types/chat.types.ts`:
   ```typescript
   export interface ChatMessage {
     id: string;
     content: string;
     sender: 'user' | 'support';
     timestamp: Date;
   }
   
   export interface ChatHeaderProps {
     title: string;
     subtitle?: string;
     icon?: React.ReactNode;
   }
   
   export interface ChatMessagesProps {
     messages: ChatMessage[];
     maxHeight?: string;
   }
   
   export interface ChatInputProps {
     onSendMessage: (message: string) => void;
     placeholder?: string;
     disabled?: boolean;
   }
   
   export interface GlassChatCardProps {
     header: ChatHeaderProps;
     initialMessages?: ChatMessage[];
     onSendMessage: (message: string) => void;
     autoScroll?: boolean;
     maxHeight?: string;
   }
   ```

4. 📱 **Responsive Adaptations**
   - Desktop: Fixed max width
   - Mobile: Full width with padding
   - Maintain max-height scrolling
   - Touch-friendly buttons

5. 🎯 **Feature Requirements**
   - Message state management
   - Auto-scroll to latest message
   - Form submission handling
   - Message timestamp tracking
   - Smooth message addition animations
   - Empty input validation
   - Enter key to send
   - Lucide React icons integration

6. ⚡ **Interaction Requirements**
   - Auto-scroll on new messages
   - Clear input after send
   - Disabled state while sending
   - Smooth scroll behavior
   - Focus management

**DELIVERABLES:**
1. ✅ `ui/components/chat/GlassChatCard.tsx`
2. ✅ `ui/components/chat/ChatHeader.tsx`
3. ✅ `ui/components/chat/ChatMessages.tsx`
4. ✅ `ui/components/chat/ChatMessage.tsx`
5. ✅ `ui/components/chat/ChatInput.tsx`
6. ✅ `ui/components/types/chat.types.ts`
7. ✅ `ui/components/chat/index.ts` barrel export
8. ✅ `ui/components/chat/README.md` with usage examples
9. ✅ Demo in `src/ChatSupportDemo.tsx`

**TESTING REQUIREMENTS:**
- Verify message scrolling
- Test form submission
- Validate input clearing
- Check responsive behavior
- Test keyboard shortcuts (Enter to send)
- Verify glassmorphism effects

Please implement this glass chat support card following our project constitution and component best practices.

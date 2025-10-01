# Email Compose Interface - UI Integration Prompt

I want to integrate a custom UI design into our project-componets project. Please extract and adapt this interface to work with our React 19 + Vite + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 + Design System Tokens (from `design -system/`)
- Backend: N/A (Component Library - Demo purposes only)
- Language: TypeScript 5
- Target file: `ui/components/email/`
- Existing functionality: Email client interface (recently created)

**UI TO INTEGRATE:**

See `ideas/Email Compose Interface.html` - FluxMail email composition interface featuring:
- Dark theme with zinc-800/zinc-900 backgrounds
- Three-section layout: Header + Sidebar + Main compose form
- Sidebar with:
  - Quick actions (Send Email, Draft, Delete)
  - Email settings (Priority, Read receipt, Schedule send)
  - Email templates (Meeting Request, Project Update, Follow Up)
  - Recent contacts list with avatars
- Main compose form with:
  - Recipient fields (To, CC, BCC)
  - Subject input
  - Rich text formatting toolbar
  - Message textarea
  - Attachment drag-and-drop zone
  - Send options footer
- Auto-save indicator and draft status
- Purple/flux gradient theme accent colors

**Key Design Elements:**
- Font: Inter with font-feature-settings
- Color Scheme: Dark (zinc-800/900) with purple flux-* accents
- Layout: Responsive grid with fixed header
- Form controls: Glassmorphic inputs with focus states
- Icons: Lucide icons (small 12-16px)
- Interactive states: Hover effects, focus rings, transitions

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Preserve All Existing Functionality**
   - Maintain existing email client architecture
   - Keep TypeScript type safety
   - Preserve design system token usage
   - Follow vertical slice ownership pattern

2. 🎨 **Adapt Design Elements**
   - Convert HTML structure to React 19 components
   - Replace inline Tailwind classes with design system tokens
   - Implement form state management (controlled inputs)
   - Create rich text editor toolbar
   - Ensure responsive layout (mobile/tablet/desktop)
   - Add accessibility attributes (WCAG 2.1 AA)

3. 🔧 **Technical Adaptations**
   - Convert to TypeScript interfaces (export from `ui/components/types/email.types.ts`)
   - Use React 19 patterns (controlled forms, event handlers)
   - Implement proper form validation
   - Add auto-save functionality with debouncing
   - Create reusable sub-components (RecipientInput, FormatToolbar, AttachmentZone)
   - Optimize for performance (controlled inputs, memoization only if needed)

4. 📱 **Feature Integration**
   - Recipient autocomplete (to/cc/bcc)
   - Rich text formatting (bold, italic, alignment, links, attachments)
   - File attachment with drag-and-drop
   - Template selection and insertion
   - Contact quick-add from recent contacts
   - Auto-save with visual indicator
   - Draft management
   - Send options (priority, read receipt, scheduled send)
   - Character counter
   - Keyboard shortcuts (⌘+↵ to send, ⌘+S to save draft)

5. 🎯 **Specific Adaptations Needed**
   - Replace flux-* purple colors with design system equivalents
   - Convert Inter font to design system font stack
   - Adapt dark theme (zinc-800/900) to design system tokens
   - Create focus and hover states with proper contrast
   - Implement responsive breakpoints (mobile, tablet, desktop)
   - Add loading states for auto-save and send
   - Create empty states (no templates, no recent contacts)

**COMPONENT STRUCTURE:**
```
ui/components/email/
├── EmailCompose.tsx                  # Main compose container
├── ComposeHeader.tsx                 # Header with navigation
├── ComposeSidebar.tsx                # Left sidebar with actions
├── ComposeForm.tsx                   # Main composition form
├── RecipientInput.tsx                # To/CC/BCC inputs with autocomplete
├── FormatToolbar.tsx                 # Rich text formatting buttons
├── AttachmentZone.tsx                # Drag-drop file upload
├── TemplateSelector.tsx              # Email template list
├── ContactQuickAdd.tsx               # Recent contacts list
├── AutoSaveIndicator.tsx             # Draft save status
├── types.ts                          # Re-export from types/email.types.ts
├── index.ts                          # Public exports
└── README.md                         # Component documentation
```

**TYPE DEFINITIONS:**
```typescript
// ui/components/types/email.types.ts
export interface EmailDraft {
  id: string;
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  body: string;
  attachments: EmailAttachment[];
  priority?: 'high' | 'normal' | 'low';
  readReceipt?: boolean;
  scheduledSend?: Date;
  lastSaved?: Date;
}

export interface EmailTemplate {
  id: string;
  name: string;
  description: string;
  subject: string;
  body: string;
  category: string;
}

export interface RecentContact {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  initials?: string;
  colorClass?: string;
}

export interface ComposeSettings {
  priorityHigh: boolean;
  readReceipt: boolean;
  scheduledSend: boolean;
}

export interface EmailComposeProps {
  draft?: EmailDraft;
  templates?: EmailTemplate[];
  recentContacts?: RecentContact[];
  onSend: (draft: EmailDraft) => Promise<void>;
  onSaveDraft: (draft: EmailDraft) => Promise<void>;
  onDiscard: () => void;
  autoSaveInterval?: number; // milliseconds
}
```

**DELIVERABLES:**
1. ✅ Complete React 19 component implementations
2. ✅ Updated TypeScript interfaces in `ui/components/types/email.types.ts`
3. ✅ Tailwind CSS + Design System Token styling
4. ✅ Controlled form inputs with validation
5. ✅ Rich text formatting toolbar
6. ✅ Drag-and-drop attachment zone
7. ✅ Template selection and insertion
8. ✅ Auto-save functionality with debouncing
9. ✅ Mobile-responsive layouts
10. ✅ Keyboard shortcuts
11. ✅ Documentation with usage examples
12. ✅ Integration summary document

**TESTING REQUIREMENTS:**
- Ensure all form inputs update state correctly
- Verify recipient autocomplete works
- Test formatting toolbar buttons
- Confirm drag-and-drop file attachments
- Validate template insertion
- Test auto-save with debouncing
- Verify send action with validation
- Check keyboard shortcuts (⌘+↵, ⌘+S)
- Test responsive behavior (mobile, tablet, desktop)
- Verify accessibility compliance (keyboard navigation, focus management)
- Test with different draft states (new, saved, edited)
- Validate error states and loading states

**DESIGN SYSTEM COMPLIANCE:**
- Use design tokens from `design -system/` for colors, spacing, typography
- Map zinc-* dark colors to design system equivalents
- Map flux-* purple accents to design system tokens
- No hard-coded values for colors or spacing
- Follow component naming conventions (PascalCase)
- Maintain file size limit (<500 lines per file)
- Co-locate related components
- Document all props and variants

**ACCESSIBILITY REQUIREMENTS:**
- Semantic HTML structure (form, label, button)
- Proper form labels and ARIA attributes
- Keyboard navigation support (tab, shift+tab, shortcuts)
- Focus indicators on all interactive elements
- Screen reader announcements for auto-save status
- Error messages associated with form fields
- Focus management (auto-focus first input)
- Escape key to cancel/close
- Enter key to submit (with modifier)

**AUTO-SAVE FUNCTIONALITY:**
- Debounce auto-save (default: 2 seconds after last keystroke)
- Visual indicator of save status (saved, saving, unsaved)
- Timestamp of last save
- Handle save errors gracefully
- Save draft on component unmount
- Don't save empty drafts

**KEYBOARD SHORTCUTS:**
- `⌘/Ctrl + Enter` - Send email
- `⌘/Ctrl + S` - Save draft manually
- `⌘/Ctrl + K` - Focus link toolbar button
- `⌘/Ctrl + B` - Bold text
- `⌘/Ctrl + I` - Italic text
- `Escape` - Discard draft (with confirmation)
- `Tab` - Navigate between fields

**RESPONSIVE BEHAVIOR:**
- **Mobile (<768px)**: 
  - Single column layout
  - Sidebar collapses to dropdown/modal
  - Simplified toolbar (essential buttons only)
  - Stack form fields vertically
- **Tablet (768px-1024px)**:
  - Two-column layout
  - Sidebar as drawer/overlay
  - Full toolbar visible
- **Desktop (>1024px)**:
  - Three-column layout
  - Persistent sidebar
  - Full toolbar and controls

Please analyze the provided UI design and implement it step-by-step, creating a production-ready email compose interface that follows our project standards and provides excellent UX.

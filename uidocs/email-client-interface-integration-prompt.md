# Email Client Interface Layout - UI Integration Prompt

I want to integrate a custom UI design into our project-componets project. Please extract and adapt this interface to work with our React 19 + Vite + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 + Design System Tokens (from `design -system/`)
- Backend: N/A (Component Library - Demo purposes only)
- Language: TypeScript 5
- Target file: `ui/components/email/`
- Existing functionality: N/A (New domain for email/communication components)

**UI TO INTEGRATE:**

See `ideas/Email Client Interface Layout.html` - FluxMail modern email client interface featuring:
- Fixed header with navigation (Inbox, Sent, Starred, Trash)
- Three-column layout: Sidebar (email list) + Main content (email detail) + Optional right panel
- Email list sidebar with:
  - Unread count badge
  - Email preview cards (avatar, sender, subject, snippet)
  - Active/selected state styling
  - Attachment indicators
  - Star/favorite icons
- Email detail view with:
  - Sender info and avatar
  - Email metadata (to, cc, timestamp)
  - Full email content with formatted text
  - Attachments section with file type icons
  - Action buttons (Reply, Reply All, Forward)
- Compose button and email actions
- Purple/violet gradient theme (flux-* color palette)

**Key Design Elements:**
- Font: Inter with font-feature-settings
- Color Scheme: Purple gradients (flux-50 to flux-800), light gray backgrounds
- Typography: Multiple font weights (300-800), tight tracking
- Layout: Responsive grid with fixed header, scrollable content
- Icons: Lucide icons
- Interactive states: Hover effects, active states, transitions
- Badge UI: Unread counts, labels, status indicators

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Preserve All Existing Functionality**
   - Maintain component library architecture
   - Keep TypeScript type safety
   - Preserve design system token usage
   - Follow vertical slice ownership pattern

2. 🎨 **Adapt Design Elements**
   - Convert HTML structure to React 19 components
   - Replace inline Tailwind classes with design system tokens
   - Implement email list state management (selected, starred)
   - Create responsive layout that collapses on mobile
   - Ensure smooth transitions between email views
   - Add accessibility attributes (WCAG 2.1 AA)

3. 🔧 **Technical Adaptations**
   - Convert to TypeScript interfaces (export from `ui/components/types/email.types.ts`)
   - Use React 19 patterns (controlled components, event handlers)
   - Implement proper state management for:
     - Selected email
     - Starred/favorite emails
     - Unread count
     - Compose modal state
   - Add keyboard shortcuts (j/k navigation, r for reply, etc.)
   - Create reusable sub-components

4. 📱 **Feature Integration**
   - Email list with pagination/infinite scroll
   - Email selection and bulk actions
   - Star/unstar functionality
   - Reply, Reply All, Forward actions
   - Attachment download/preview
   - Search functionality
   - Mobile-responsive navigation (hamburger menu)
   - Keyboard navigation support
   - Email composition modal/view

5. 🎯 **Specific Adaptations Needed**
   - Replace flux-* colors with design system token equivalents
   - Convert Inter font to design system font stack
   - Adapt purple gradient theme to design system
   - Create hover and focus states with proper contrast
   - Implement responsive breakpoints (mobile, tablet, desktop)
   - Add loading states for email content
   - Create empty states (no emails, no search results)

**COMPONENT STRUCTURE:**
```
ui/components/email/
├── EmailClient.tsx                # Main container component
├── EmailHeader.tsx                # Top navigation bar
├── EmailSidebar.tsx               # Email list panel
├── EmailListItem.tsx              # Individual email preview
├── EmailDetail.tsx                # Full email view
├── EmailActions.tsx               # Action buttons (reply, forward, etc.)
├── AttachmentList.tsx             # Attachment display
├── ComposeModal.tsx               # New email composition
├── SearchBar.tsx                  # Email search
├── types.ts                       # Re-export from types/email.types.ts
├── index.ts                       # Public exports
└── README.md                      # Component documentation
```

**TYPE DEFINITIONS:**
```typescript
// ui/components/types/email.types.ts
export interface Email {
  id: string;
  sender: EmailContact;
  recipients: EmailContact[];
  cc?: EmailContact[];
  bcc?: EmailContact[];
  subject: string;
  body: string;
  timestamp: Date;
  isRead: boolean;
  isStarred: boolean;
  hasAttachments: boolean;
  attachments?: EmailAttachment[];
  labels?: string[];
}

export interface EmailContact {
  name: string;
  email: string;
  avatar?: string;
}

export interface EmailAttachment {
  id: string;
  name: string;
  size: number;
  type: string;
  url?: string;
}

export interface EmailClientProps {
  emails: Email[];
  selectedEmailId?: string;
  onSelectEmail: (emailId: string) => void;
  onStarEmail: (emailId: string) => void;
  onDeleteEmail: (emailId: string) => void;
  onReply: (emailId: string) => void;
  onCompose: () => void;
}
```

**DELIVERABLES:**
1. ✅ Complete React 19 component implementations
2. ✅ Updated TypeScript interfaces in `ui/components/types/email.types.ts`
3. ✅ Tailwind CSS + Design System Token styling
4. ✅ Responsive email list and detail view
5. ✅ Working email selection and navigation
6. ✅ Star/favorite functionality
7. ✅ Email actions (reply, forward, delete)
8. ✅ Attachment display and download
9. ✅ Mobile-responsive layouts
10. ✅ Keyboard navigation support
11. ✅ Documentation with usage examples
12. ✅ Integration summary document

**TESTING REQUIREMENTS:**
- Ensure all components render without errors
- Verify email list selection updates detail view
- Test star/unstar toggle functionality
- Confirm action buttons trigger correct callbacks
- Validate attachment display and icons
- Test responsive behavior (mobile list view, tablet split, desktop three-column)
- Check keyboard navigation (arrow keys, enter, escape)
- Verify accessibility compliance (screen readers, focus management)
- Test with different email data (long subjects, many attachments, etc.)
- Validate empty states display correctly

**DESIGN SYSTEM COMPLIANCE:**
- Use design tokens from `design -system/` for colors, spacing, typography
- Map flux-* purple colors to design system equivalents
- No hard-coded values for colors or spacing
- Follow component naming conventions (PascalCase)
- Maintain file size limit (<500 lines per file)
- Co-locate related components
- Document all props and variants

**ACCESSIBILITY REQUIREMENTS:**
- Semantic HTML structure (aside, article, section)
- Proper heading hierarchy (h1, h2, h3)
- ARIA labels for navigation and actions
- Keyboard navigation support (tab, arrow keys, shortcuts)
- Focus indicators on all interactive elements
- Screen reader announcements for email count, unread status
- Alt text for avatars and icons
- Sufficient color contrast (4.5:1 minimum)
- Focus trap for compose modal

**KEYBOARD SHORTCUTS:**
- `j/k` - Navigate through email list
- `Enter` - Open selected email
- `r` - Reply to current email
- `a` - Reply all
- `f` - Forward email
- `s` - Star/unstar current email
- `c` - Compose new email
- `/` - Focus search
- `Escape` - Close modals/deselect

**RESPONSIVE BEHAVIOR:**
- **Mobile (<768px)**: 
  - Single column view
  - Email list full width
  - Detail view replaces list on selection
  - Back button to return to list
- **Tablet (768px-1024px)**:
  - Two-column layout
  - Collapsible sidebar
  - Detail takes priority
- **Desktop (>1024px)**:
  - Three-column layout
  - Persistent sidebar
  - Full detail view
  - Optional right panel for actions/filters

Please analyze the provided UI design and implement it step-by-step, creating a production-ready email client interface that follows our project standards and provides an excellent user experience.

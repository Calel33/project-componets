# 🎯 **Dark Footer with Contact & Subscribe - UI Integration Prompt**

## 📋 **Integration Request**

I want to integrate a custom UI design into our **Component Library** project. Please extract and adapt this interface to work with our **React 19 + TypeScript + Tailwind CSS** stack.

**CURRENT PROJECT CONTEXT:**
- Framework: **React 19 + Vite** 
- Styling: **Tailwind CSS + Design System Tokens** 
- Backend: **Form submission handlers (configurable)** 
- Language: **TypeScript** 
- Target file: **src/components/Footer.tsx** 
- Existing functionality: **Reusable component library with design system integration**

**UI TO INTEGRATE:**

```html
<footer class="w-full sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-10 pl-4">
    <div class="relative overflow-hidden bg-neutral-900 rounded-3xl">
      <div class="relative z-10 sm:p-12 md:p-16 pt-12 pr-8 pb-8 pl-8">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          <div class="lg:col-span-4">
            <div class="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="badge-check" class="lucide lucide-badge-check w-5 h-5 text-white/80"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" class=""></path><path d="m9 12 2 2 4-4" class=""></path></svg>
              <h3 class="text-2xl font-semibold text-white tracking-tight">Relay Dev Studio</h3>
            </div>
              <p class="text-white/70 max-w-3xl">We build ambitious products with small, senior teams. Tell us a bit about your project and we'll get back within one business day.</p>

              <div id="contact" class="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div class="space-y-4">
                    <div class="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-300/20 px-2.5 py-1 text-xs">
                      <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Booking Q4
                    </div>
                    <h4 class="text-white font-semibold tracking-tight">Start a project</h4>
                    <ul class="space-y-2 text-sm text-neutral-300">
                      <li class="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" class="lucide lucide-check w-4 h-4 text-emerald-400 mt-0.5"><path d="M20 6 9 17l-5-5" class=""></path></svg>
                        <span class="">Senior engineers and designers only — no handoffs, no fluff.</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" class="lucide lucide-check w-4 h-4 text-emerald-400 mt-0.5"><path d="M20 6 9 17l-5-5" class=""></path></svg>
                        <span class="">Transparent weekly demos, metrics, and delivery plans.</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" class="lucide lucide-check w-4 h-4 text-emerald-400 mt-0.5"><path d="M20 6 9 17l-5-5" class=""></path></svg>
                        <span class="">Security, accessibility, and performance baked-in.</span>
                      </li>
                    </ul>
                    <div class="flex items-center gap-3 pt-2 text-sm">
                      <a href="mailto:hello@relay.dev" class="inline-flex items-center gap-2 text-white hover:text-amber-300 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="mail" class="lucide lucide-mail w-4 h-4"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" class=""></path><rect x="2" y="4" width="20" height="16" rx="2" class=""></rect></svg>
                        hello@relay.dev
                      </a>
                      <span class="text-white/20">•</span>
                      <a href="tel:+14155551234" class="inline-flex items-center gap-2 text-white hover:text-amber-300 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="phone" class="lucide lucide-phone w-4 h-4"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" class=""></path></svg>
                        +1 (415) 555‑1234
                      </a>
                    </div>
                  </div>

                  <form id="contact-form" class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="sm:col-span-1">
                      <label for="name" class="block text-xs font-medium text-white/80 mb-1">Your name</label>
                      <input id="name" name="name" type="text" required="" placeholder="Jane Doe" class="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
                    </div>
                    <div class="sm:col-span-1">
                      <label for="email" class="block text-xs font-medium text-white/80 mb-1">Email</label>
                      <input id="email" name="email" type="email" required="" placeholder="jane@company.com" class="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
                    </div>
                    <div class="sm:col-span-1">
                      <label for="company" class="block text-xs font-medium text-white/80 mb-1">Company</label>
                      <input id="company" name="company" type="text" placeholder="Acme Inc." class="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
                    </div>
                    <div class="sm:col-span-1">
                      <label for="project-type" class="block text-xs font-medium text-white/80 mb-1">Project type</label>
                      <select id="project-type" name="projectType" class="w-full appearance-none outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
                        <option class="bg-neutral-900" value="product">New product build</option>
                        <option class="bg-neutral-900" value="feature">Feature delivery</option>
                        <option class="bg-neutral-900" value="advisory">Advisory / audit</option>
                        <option class="bg-neutral-900" value="ai">AI integration</option>
                      </select>
                    </div>
                    <div class="sm:col-span-2">
                      <label for="message" class="block text-xs font-medium text-white/80 mb-1">What are you building?</label>
                      <textarea id="message" name="message" rows="4" placeholder="A few sentences about your goals, timeline, and success metrics." class="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3"></textarea>
                    </div>
                    <div class="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div class="flex gap-2 text-xs text-white/70 items-center">
                        <input id="nda" name="nda" type="checkbox" class="h-4 w-4 rounded bg-white/10 border-white/20 text-amber-400 focus:ring-amber-400/60">
                        <label for="nda" class="">Please send an NDA</label>
                      </div>
                      <div class="flex items-center gap-2">
                        <button type="submit" class="inline-flex gap-2 ring-1 ring-amber-300 hover:bg-amber-300 transition text-sm font-medium text-neutral-900 bg-amber-400 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="send" class="lucide lucide-send w-4 h-4"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" class=""></path><path d="m21.854 2.147-10.94 10.939" class=""></path></svg>
                          Send request
                        </button>
                        
                      </div>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 pt-12">
          <div class="">
            <h4 class="text-white/80 text-xs uppercase tracking-[0.2em]">Services</h4>
            <ul class="mt-3 space-y-2 text-sm">
              <li class=""><a href="#work" class="text-neutral-300 hover:text-white transition inline-flex items-center gap-2"> Product Development</a></li>
              <li class=""><a href="#work" class="text-neutral-300 hover:text-white transition inline-flex items-center gap-2"> Frontend Systems</a></li>
              <li class=""><a href="#work" class="text-neutral-300 hover:text-white transition inline-flex items-center gap-2"> AI &amp; Agents</a></li>
              <li class=""><a href="#work" class="hover:text-white transition inline-flex items-center gap-2 text-neutral-300"> Cloud &amp; DevOps</a></li>
            </ul>
          </div>
          <div class="">
            <h4 class="text-white/80 text-xs uppercase tracking-[0.2em]">Resources</h4>
            <ul class="mt-3 space-y-2 text-sm">
              <li><a href="#work" class="text-neutral-300 hover:text-white transition">Case Studies</a></li>
              <li class=""><a href="#" class="text-neutral-300 hover:text-white transition">Playgrounds</a></li>
              <li><a href="#" class="text-neutral-300 hover:text-white transition">Open Source</a></li>
              <li><a href="#" class="text-neutral-300 hover:text-white transition">Guides</a></li>
            </ul>
          </div>
          <div class="">
            <h4 class="text-white/80 text-xs uppercase tracking-[0.2em]">Company</h4>
            <ul class="mt-3 space-y-2 text-sm">
              <li><a href="#" class="text-neutral-300 hover:text-white transition">About</a></li>
              <li><a href="#" class="text-neutral-300 hover:text-white transition">Principles</a></li>
              <li><a href="#contact" class="text-neutral-300 hover:text-white transition">Contact</a></li>
              <li class=""><a href="#" class="text-neutral-300 hover:text-white transition">Careers</a></li>
            </ul>
          </div>
          <div class="">
            <h4 class="uppercase text-xs text-white/80 tracking-[0.2em]">Stay in touch</h4>
            <form id="subscribe" class="mt-3 flex items-center gap-2">
              <div class="relative flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="mail" class="lucide lucide-mail w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" class=""></path><rect x="2" y="4" width="20" height="16" rx="2" class=""></rect></svg>
                <input type="email" name="subscribeEmail" required="" placeholder="you@example.com" class="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300 transition text-xs text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-9">
              </div>
              <button type="submit" class="inline-flex gap-2 ring-1 ring-white/80 hover:bg-amber-300 hover:ring-amber-200 transition text-xs font-medium text-neutral-900 bg-white rounded-xl pt-2.5 pr-3.5 pb-2.5 pl-3.5 items-center">
                
                Join
              </button>
            </form>
            <div class="mt-4 flex items-center gap-3">
              <a href="#" aria-label="GitHub" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="github" class="lucide lucide-github w-[16px] h-[16px]" data-icon-replaced="true" style="width: 16px; height: 16px; color: rgb(255, 255, 255);"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" class=""></path><path d="M9 18c-4.51 2-5-2-7-2" class=""></path></svg>
              </a>
              <a href="#" aria-label="X" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="twitter" class="lucide lucide-twitter w-[16px] h-[16px]" data-icon-replaced="true" style="width: 16px; height: 16px; color: rgb(255, 255, 255);"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" class=""></path></svg>
              </a>
              <a href="#" aria-label="LinkedIn" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="linkedin" class="lucide lucide-linkedin w-[16px] h-[px]" data-icon-replaced="true" style="width: 16px; height: 16px; color: rgb(255, 255, 255);"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" class=""></path><rect width="4" height="12" x="2" y="9" class=""></rect><circle cx="4" cy="4" r="2" class=""></circle></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p class="text-white/60 text-sm">© <span id="year">2025</span> Relay Dev Studio. All rights reserved.</p>
          <div class="flex items-center gap-4 text-white/60 text-sm">
            <a href="#" class="hover:text-white transition">Privacy</a>
            <span class="hidden sm:block text-white/20">•</span>
            <a href="#" class="hover:text-white transition">Terms</a>
            <span class="hidden sm:block text-white/20">•</span>
            <a href="#" class="hover:text-white transition inline-flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="arrow-up" class="lucide lucide-arrow-up w-4 h-4"><path d="m5 12 7-7 7 7" class=""></path><path d="M12 19V5" class=""></path></svg> Back to top
            </a>
          </div>
        </div>
      </div>

      <!-- Decorative glows -->
      <div aria-hidden="true" class="pointer-events-none absolute -top-16 -right-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl"></div>
      <div aria-hidden="true" class="pointer-events-none absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl"></div>
    </div>
  </footer>
```

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Preserve All Existing Functionality**
   - Maintain component library architecture
   - Keep design system token integration
   - Preserve TypeScript type safety
   - Maintain reusability patterns

2. 🎨 **Adapt Design Elements**
   - Convert HTML to React 19 functional component
   - Replace hardcoded colors with design system tokens
   - Convert inline Tailwind classes to design system utilities
   - Ensure responsive design for mobile, tablet, desktop
   - Maintain accessibility standards (ARIA labels, semantic HTML, form validation)
   - Replace hardcoded text with configurable props

3. 🔧 **Technical Adaptations**
   - Create TypeScript interfaces for:
     - `FooterProps` (company info, contact details, navigation links)
     - `ContactFormData` (name, email, company, projectType, message, nda)
     - `NavigationSection` (title, links array)
     - `SocialLink` (platform, url, icon)
     - `ContactInfo` (email, phone, features list, status badge)
   - Use React 19 best practices (hooks, controlled forms)
   - Implement proper form validation and submission handlers
   - Add error boundaries and loading states
   - Optimize with React.memo for performance
   - Use Lucide React for icons (replace inline SVGs)

4. 📱 **Feature Integration**
   - Contact form with validation (name, email required)
   - Newsletter subscription form
   - Dynamic navigation sections (configurable columns)
   - Social media links with icons
   - Status badge with pulse animation
   - "Back to top" scroll functionality
   - Form submission callbacks (onContactSubmit, onSubscribe)
   - Auto-updating copyright year
   - Decorative gradient glows (configurable)

5. 🎯 **Specific Adaptations Needed**
   - Replace hardcoded company name/logo with props
   - Convert form elements to controlled React inputs
   - Adapt amber/emerald color scheme to design system accent colors
   - Ensure compatibility with existing component patterns
   - Maintain dark theme optimization (neutral-900 background)
   - Create flexible navigation system supporting 2-4 columns
   - Replace inline form handlers with callback props
   - Add form validation states (error, success, loading)

**DESIGN SYSTEM INTEGRATION:**
- **Colors**: Use design system tokens instead of:
  - `bg-neutral-900` → `bg-surface-primary`
  - `border-white/10` → `border-surface-border`
  - `bg-white/5` → `bg-surface-secondary`
  - `text-white/70` → `text-secondary`
  - `bg-amber-400` → `bg-accent-primary`
  - `text-emerald-300` → `text-success`
- **Typography**: Replace hardcoded font sizes with design system tokens
- **Spacing**: Use design system spacing scale
- **Radius**: Use design system border radius tokens (`rounded-3xl` → `radius-2xl`)
- **Shadows**: Apply design system shadow tokens
- **Focus States**: Use design system focus ring utilities

**COMPONENT API STRUCTURE:**

```typescript
interface FooterProps {
  companyName: string;
  companyLogo?: React.ReactNode;
  tagline: string;
  contactInfo: ContactInfo;
  navigationSections: NavigationSection[];
  socialLinks: SocialLink[];
  legalLinks: LegalLink[];
  onContactSubmit: (data: ContactFormData) => Promise<void>;
  onSubscribe: (email: string) => Promise<void>;
  showDecorativeGlows?: boolean;
  className?: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  statusBadge?: {
    text: string;
    variant: 'success' | 'warning' | 'info';
  };
  features: string[];
}

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: 'product' | 'feature' | 'advisory' | 'ai';
  message?: string;
  nda: boolean;
}

interface NavigationSection {
  title: string;
  links: NavigationLink[];
}

interface NavigationLink {
  label: string;
  href: string;
  external?: boolean;
}

interface SocialLink {
  platform: 'github' | 'twitter' | 'linkedin' | 'facebook' | 'instagram';
  url: string;
  ariaLabel: string;
}

interface LegalLink {
  label: string;
  href: string;
}
```

**DELIVERABLES:**
1. ✅ Complete React 19 + TypeScript component (`src/components/Footer.tsx`)
2. ✅ TypeScript interfaces and types (`src/components/Footer.types.ts`)
3. ✅ Design system token integration (no hardcoded colors)
4. ✅ Lucide React icons integration
5. ✅ Form validation logic with error states
6. ✅ Working animations (pulse badge, hover effects, glows)
7. ✅ Responsive design for mobile/tablet/desktop
8. ✅ Storybook story file with multiple variants
9. ✅ Form submission handlers with loading/success/error states
10. ✅ Documentation with usage examples

**TESTING REQUIREMENTS:**
- Ensure component renders without errors
- Verify form validation works correctly (required fields, email format)
- Test form submission callbacks (success, error, loading states)
- Test newsletter subscription functionality
- Verify all interactive elements work (links, buttons, form inputs)
- Test responsive behavior on mobile (320px), tablet (768px), desktop (1280px)
- Confirm accessibility compliance (keyboard navigation, screen readers, ARIA labels)
- Validate TypeScript types are correct
- Test with various navigation configurations (2-4 columns)
- Verify "Back to top" scroll functionality
- Check auto-updating copyright year
- Test social link rendering with different platforms

**FILE STRUCTURE:**
```
src/
  components/
    Footer.tsx              # Main component
    Footer.types.ts         # TypeScript interfaces
    ContactForm.tsx         # Extracted contact form component
    NewsletterForm.tsx      # Extracted newsletter component
  stories/
    Footer.stories.tsx      # Storybook stories
  hooks/
    useScrollToTop.ts       # Scroll to top hook
```

Please analyze the provided UI design and implement it step-by-step, creating a fully reusable, type-safe React component that integrates seamlessly with our design system and component library architecture.

---

## 🎨 **Design Notes**

**Key Visual Features:**
- Dark footer with rounded container (neutral-900 background)
- Prominent contact form section with glass-morphism effect
- Status badge with animated pulse indicator
- Multi-column navigation layout (2-4 columns responsive)
- Newsletter subscription with inline form
- Social media icon buttons (circular, glass effect)
- Decorative gradient glows (amber/indigo)
- Legal links and copyright footer
- "Back to top" link with icon

**Interaction Patterns:**
- Contact form with multi-field layout (2-column grid)
- Form validation (required fields, email format)
- Checkbox for NDA request
- Select dropdown for project type
- Textarea for detailed message
- Newsletter email input with icon
- Hover effects on all interactive elements
- Focus states with amber accent ring
- Smooth scroll to top functionality

**Form Features:**
- Name (required)
- Email (required, validated)
- Company (optional)
- Project type (select dropdown)
- Message (textarea)
- NDA checkbox
- Submit button with icon

**Accessibility Considerations:**
- Semantic HTML structure (footer, form, nav)
- Proper form labels and field associations
- ARIA labels for icon-only buttons
- Keyboard-navigable forms and links
- Focus indicators on all interactive elements
- Required field indicators
- Error message support
- Screen reader friendly

**Layout Sections:**
1. **Contact Section**: Company info + contact form (full-width)
2. **Navigation**: 4-column grid (Services, Resources, Company, Newsletter)
3. **Footer Bar**: Copyright + legal links + back to top

---

## 🚀 **Implementation Priority**

1. **Phase 1**: Core component structure with TypeScript types
2. **Phase 2**: Contact form component with validation
3. **Phase 3**: Newsletter form component
4. **Phase 4**: Navigation sections rendering
5. **Phase 5**: Design system token integration
6. **Phase 6**: Form submission handlers and states
7. **Phase 7**: Decorative elements (glows, animations)
8. **Phase 8**: Storybook stories and documentation
9. **Phase 9**: Testing and refinement

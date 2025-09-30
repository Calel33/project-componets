import { Footer } from '../ui/components/footer';
import type { ContactFormData } from '../ui/components/footer/types';

export const FooterDemo = () => {
  const handleContactSubmit = async (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(`Thank you, ${data.name}! We'll get back to you soon.`);
  };

  const handleSubscribe = async (email: string) => {
    console.log('Newsletter subscription:', email);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(`Successfully subscribed: ${email}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Spacer content to test scroll to top */}
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Scroll down to see the footer</h1>
      </div>

      <Footer
        companyName="Relay Dev Studio"
        tagline="We build ambitious products with small, senior teams. Tell us a bit about your project and we'll get back within one business day."
        contactInfo={{
          email: 'hello@relay.dev',
          phone: '+1 (415) 555-1234',
          statusBadge: {
            text: 'Booking Q4',
            variant: 'success',
          },
          features: [
            'Senior engineers and designers only — no handoffs, no fluff.',
            'Transparent weekly demos, metrics, and delivery plans.',
            'Security, accessibility, and performance baked-in.',
          ],
        }}
        navigationSections={[
          {
            title: 'Services',
            links: [
              { label: 'Product Development', href: '#work' },
              { label: 'Frontend Systems', href: '#work' },
              { label: 'AI & Agents', href: '#work' },
              { label: 'Cloud & DevOps', href: '#work' },
            ],
          },
          {
            title: 'Resources',
            links: [
              { label: 'Case Studies', href: '#work' },
              { label: 'Playgrounds', href: '#' },
              { label: 'Open Source', href: '#' },
              { label: 'Guides', href: '#' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '#' },
              { label: 'Principles', href: '#' },
              { label: 'Contact', href: '#contact' },
              { label: 'Careers', href: '#' },
            ],
          },
        ]}
        socialLinks={[
          { platform: 'github', url: 'https://github.com', ariaLabel: 'GitHub' },
          { platform: 'twitter', url: 'https://twitter.com', ariaLabel: 'X' },
          { platform: 'linkedin', url: 'https://linkedin.com', ariaLabel: 'LinkedIn' },
        ]}
        legalLinks={[
          { label: 'Privacy', href: '#privacy' },
          { label: 'Terms', href: '#terms' },
        ]}
        onContactSubmit={handleContactSubmit}
        onSubscribe={handleSubscribe}
        showDecorativeGlows={true}
      />
    </div>
  );
};

export default FooterDemo;

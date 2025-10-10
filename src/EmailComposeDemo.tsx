import { EmailCompose } from '../ui/components/email';
import type { EmailDraft, EmailTemplate, RecentContact } from '../ui/components/email';

// Sample email templates
const sampleTemplates: EmailTemplate[] = [
  {
    id: '1',
    name: 'Meeting Request',
    description: 'Schedule meetings efficiently',
    subject: 'Meeting Request: [Topic]',
    body: 'Hi [Name],\n\nI would like to schedule a meeting to discuss [topic]. Would you be available on [date/time]?\n\nBest regards,\n[Your Name]',
    category: 'business',
  },
  {
    id: '2',
    name: 'Project Update',
    description: 'Weekly status updates',
    subject: 'Project Update - Week of [Date]',
    body: 'Team,\n\nHere\'s this week\'s project update:\n\n✅ Completed:\n- [Item 1]\n- [Item 2]\n\n🚧 In Progress:\n- [Item 3]\n- [Item 4]\n\n📅 Next Week:\n- [Item 5]\n- [Item 6]\n\nLet me know if you have any questions.\n\nBest,\n[Your Name]',
    category: 'project',
  },
  {
    id: '3',
    name: 'Follow Up',
    description: 'Professional follow-ups',
    subject: 'Following Up: [Previous Subject]',
    body: 'Hi [Name],\n\nI wanted to follow up on my previous email regarding [topic]. Have you had a chance to review it?\n\nI\'m happy to provide any additional information you might need.\n\nLooking forward to hearing from you.\n\nBest regards,\n[Your Name]',
    category: 'general',
  },
];

// Sample recent contacts
const sampleContacts: RecentContact[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@company.com',
    initials: 'JS',
    colorClass: 'bg-gradient-to-br from-blue-400 to-blue-600',
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    email: 'sarah@design.co',
    initials: 'SW',
    colorClass: 'bg-gradient-to-br from-pink-400 to-pink-600',
  },
  {
    id: '3',
    name: 'Mike Chen',
    email: 'mike@startup.io',
    initials: 'MC',
    colorClass: 'bg-gradient-to-br from-green-400 to-green-600',
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    email: 'emily@agency.com',
    initials: 'ER',
    colorClass: 'bg-gradient-to-br from-purple-400 to-purple-600',
  },
  {
    id: '5',
    name: 'David Kim',
    email: 'david@tech.io',
    initials: 'DK',
    colorClass: 'bg-gradient-to-br from-orange-400 to-orange-600',
  },
];

// Optional: Existing draft for testing
const existingDraft: EmailDraft | undefined = undefined;
// Uncomment to test with existing draft:
// const existingDraft: EmailDraft = {
//   id: 'draft-123',
//   to: ['john@company.com'],
//   cc: [],
//   bcc: [],
//   subject: 'Re: Project Discussion',
//   body: 'Thanks for your email. I\'d be happy to discuss...',
//   attachments: [],
//   priority: 'normal',
//   lastSaved: new Date(Date.now() - 120000), // 2 minutes ago
// };

export default function EmailComposeDemo() {
  const handleSend = async (draft: EmailDraft) => {
    console.log('📧 Sending email:', draft);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Show success message
    alert(`Email sent successfully to ${draft.to.join(', ')}`);
    
    // In real app, redirect to inbox
    console.log('✅ Email sent successfully');
  };

  const handleSaveDraft = async (draft: EmailDraft) => {
    console.log('💾 Saving draft:', draft);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    console.log('✅ Draft saved');
  };

  const handleDiscard = () => {
    console.log('🗑️ Discarding draft');
    
    // In real app, navigate away
    if (window.confirm('Are you sure you want to discard this draft?')) {
      console.log('Draft discarded');
      // window.location.href = '/inbox';
    }
  };

  return (
    <EmailCompose
      draft={existingDraft}
      templates={sampleTemplates}
      recentContacts={sampleContacts}
      onSend={handleSend}
      onSaveDraft={handleSaveDraft}
      onDiscard={handleDiscard}
      autoSaveInterval={2000}
    />
  );
}

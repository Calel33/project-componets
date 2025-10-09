import { useMemo, useState } from 'react';
import {
  PaymentDashboard,
  PaymentFeatureGrid,
  PaymentTestimonials,
  BillPaymentConfirmation,
} from '@/ui/components/payment';
import type {
  Feature,
  OrderItem,
  OrderSummary,
  PaymentFormData,
  PaymentResult,
  Stat,
} from '@/ui/components/payment/types';
import {
  ShieldCheck,
  CalendarCheck,
  Scale,
  Users,
  TrendingUp,
  FileText,
  PiggyBank,
  Download,
} from 'lucide-react';

const alimonyItems: OrderItem[] = [
  {
    id: 'plan',
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <ShieldCheck className="h-5 w-5" />
      </div>
    ),
    title: 'Comprehensive Alimony Plan',
    description: 'Attorney-reviewed calculation tailored to your jurisdiction.',
    price: 489,
  },
  {
    id: 'analysis',
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
        <Scale className="h-5 w-5" />
      </div>
    ),
    title: 'Income & Lifestyle Analysis',
    description: 'Detailed income, custody, and lifestyle breakdown for both parties.',
    price: 329,
  },
  {
    id: 'support',
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Users className="h-5 w-5" />
      </div>
    ),
    title: 'Advisor Consultation',
    description: '60-minute strategy session with licensed financial mediator.',
    price: 165,
  },
];

const featureGrid: Feature[] = [
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <CalendarCheck className="h-6 w-6" />
      </div>
    ),
    title: 'State-level Compliance',
    description: 'Up-to-date statutory guidance for all 50 states with automatic updates.',
  },
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
        <TrendingUp className="h-6 w-6" />
      </div>
    ),
    title: 'Scenario Forecasting',
    description: 'Project obligations across multiple settlement timelines and outcomes.',
  },
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
        <FileText className="h-6 w-6" />
      </div>
    ),
    title: 'Court-ready Reports',
    description: 'Generate filings with supporting documentation in seconds.',
  },
];

const testimonialStats: Stat[] = [
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <TrendingUp className="h-6 w-6" />
      </div>
    ),
    label: 'Time saved',
    value: '68%',
    subtitle: 'average preparation reduction for family law teams',
  },
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
        <PiggyBank className="h-6 w-6" />
      </div>
    ),
    label: 'Negotiation uplift',
    value: '2.4x',
    subtitle: 'higher settlement satisfaction among clients',
  },
];

const orderSummary: OrderSummary = {
  items: alimonyItems,
  subtotal: alimonyItems.reduce((sum, item) => sum + item.price, 0),
  tax: 0,
  total: alimonyItems.reduce((sum, item) => sum + item.price, 0),
};

type Stage = 'payment' | 'confirmation';

export const AlimonyPaymentDashboard = () => {
  const [stage, setStage] = useState<Stage>('payment');
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const confirmationDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const handlePaymentSubmit = async (data: PaymentFormData): Promise<PaymentResult> => {
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const initials = data.cardholderName
      .split(' ')
      .map((segment) => segment.trim()[0])
      .filter(Boolean)
      .join('')
      .slice(0, 3)
      .toUpperCase() || 'ALM';

    const transactionId = `ALM-${initials}-${Math.floor(Math.random() * 9000) + 1000}`;

    const result: PaymentResult = {
      success: true,
      transactionId,
    };

    if (result.success) {
      setTransactionId(transactionId);
      setStage('confirmation');
    }
    return result;
  };

  const handleDownloadReceipt = async () => {
    setIsDownloading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsDownloading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
        <header className="space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
            <ShieldCheck className="h-4 w-4" />
            Trusted Alimony Intelligence
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Orchestrate equitable alimony agreements with clarity
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Guide clients from intake to agreement using structured payment plans, compliance alerts, and collaborative advisor workflows.
          </p>
        </header>

        <section className="rounded-[calc(var(--radius)*1.5)] border border-border/20 bg-card shadow-lg shadow-primary/10">
          <div className="overflow-hidden rounded-[calc(var(--radius)*1.5)]">
            {stage === 'payment' ? (
              <PaymentDashboard
                className="bg-background"
                title="Finalize Alimony Service"
                subtitle="Secure your tailored alimony blueprint and advisor session"
                orderSummary={orderSummary}
                paymentMethods={['visa', 'mastercard', 'amex', 'paypal']}
                securityMessage="256-bit encryption with SOC 2 compliant processing"
                termsLink="#alimony-terms"
                onPaymentSubmit={handlePaymentSubmit}
              />
            ) : (
              <div className="bg-card px-6 py-12 sm:px-10">
                <BillPaymentConfirmation
                  variant="inline"
                  transactionId={transactionId ?? 'ALM-000000'}
                  amount={orderSummary.total}
                  currency="USD"
                  recipient="Family Equity Solutions"
                  date={confirmationDate}
                  title="Payment secured"
                  message="We have shared your alimony plan, scheduling links, and court-ready documents with your client portal."
                  downloadLabel="Download receipt"
                  dismissLabel="Back to dashboard"
                  onDismiss={() => setStage('payment')}
                  onDownloadReceipt={handleDownloadReceipt}
                  isDownloading={isDownloading}
                  className="bg-card"
                />
              </div>
            )}
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 rounded-[calc(var(--radius)*1.5)] border border-border/20 bg-card p-8 shadow-lg shadow-primary/10">
            <h2 className="text-2xl font-semibold">Why family law teams rely on us</h2>
            <p className="text-muted-foreground">
              From intake questionnaires to courtroom exhibits, the Alimony Intelligence dashboard synchronizes every stakeholder, aligning legal mandates with client expectations.
            </p>
            <PaymentFeatureGrid
              headline="Operational excellence for every case"
              description="Powerful controls designed for paralegals, mediators, and lead attorneys."
              features={featureGrid}
            />
          </div>

          <div className="space-y-8 rounded-[calc(var(--radius)*1.5)] border border-border/20 bg-card p-8 shadow-lg shadow-primary/10">
            <PaymentTestimonials
              testimonial={{
                rating: 5,
                quote: '“Settlement negotiations are faster, calmer, and more transparent.”',
                content:
                  'Our mediators can present multiple support scenarios with verified data in under five minutes. Clients understand the trade-offs immediately, and judges appreciate the rigor.',
                author: {
                  name: 'Alexis Monroe',
                  role: 'Managing Partner, Monroe Family Law Group',
                  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=320&q=80',
                },
              }}
              stats={testimonialStats}
            />
            <div className="flex items-center gap-3 rounded-2xl border border-dashed border-primary/40 bg-primary/10 px-6 py-4 text-sm text-primary">
              <Download className="h-4 w-4" />
              Share secured settlement packets directly with opposing counsel through the dashboard.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AlimonyPaymentDashboard;

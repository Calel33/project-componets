import {
  HealthDashboardGrid,
  DoctorCard,
  ConsultationCard,
  AppPreviewCard,
  BrandCard,
  MobileAppCard,
  StyleGuideCard,
  ChatTeaserCard,
  GlucoseChartCard,
  type GlucoseReading,
  type ChatMessage
} from '../ui/components/digital-health';

const glucoseData: GlucoseReading[] = [
  { day: 'Mon', value: 112 },
  { day: 'Tue', value: 125 },
  { day: 'Wed', value: 118 },
  { day: 'Thu', value: 134 },
  { day: 'Fri', value: 119 },
  { day: 'Sat', value: 128 },
  { day: 'Sun', value: 122 }
];

const chatMessages: ChatMessage[] = [
  {
    id: '1',
    text: 'Good morning, Ethan. How did you sleep?',
    sender: 'coach'
  },
  {
    id: '2',
    text: 'Pretty well, around 7 hrs. My back pain is mild today.',
    sender: 'patient'
  }
];

export const DigitalHealthDemo = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100">
      <HealthDashboardGrid animationEnabled={true}>
        
        <DoctorCard
          name="Dr. Vanessa Blake"
          specialty="Endocrinologist"
          image="https://cdn.midjourney.com/d4ba56bd-f245-4307-97d7-e032de66d0d5/0_0.png?w=800&q=80"
        />

        <ConsultationCard
          patient={{
            name: "Aria Lambert",
            condition: "Type 1 Diabetes",
            message: "Hey Dr. Blake—quick heads up that my glucose is running a bit low this morning."
          }}
          time={{ day: "Thu", hour: "14:30" }}
          countdown="Begins in 2 h"
          onChatClick={() => console.log('Opening chat...')}
        />

        <AppPreviewCard
          appName="PulseSync"
          screenshot="https://cdn.midjourney.com/036cbd57-a3a4-4bf6-a766-dc4a511c5552/0_3.png?w=800&q=80"
        />

        <BrandCard
          logo={{ text: "PulseSync" }}
          tagline="Data-driven care that fits your life."
          backgroundImage="https://cdn.midjourney.com/83beba14-d996-4dcc-a6fa-bc51b4c7edb3/0_3.png?w=800&q=80"
        />

        <MobileAppCard
          title="Daily Symptom Check-in"
          mockupImage="https://cdn.midjourney.com/534ac97f-e323-40f2-9863-38dfecd4f520/0_0.png?w=800&q=80"
          cta={{
            label: "Start now",
            onClick: () => console.log('Starting check-in...')
          }}
        />

        <StyleGuideCard
          typography={{
            primary: "Inter UI",
            secondary: "Instrument Serif"
          }}
          palette={['#10b981', '#059669', '#d97706', '#e5e5e5']}
        />

        <ChatTeaserCard
          title="Stay in sync with your care team—anytime, anywhere."
          messages={chatMessages}
          avatar={{
            src: "https://images.unsplash.com/photo-1578489758854-f134a358f08b?w=320&q=80",
            name: "PulseSync Coach"
          }}
          backgroundImage="https://cdn.midjourney.com/f2203bfb-195c-4032-9303-d535c0e0a7ea/0_0.png?w=800&q=80"
        />

        <GlucoseChartCard
          title="Weekly Glucose Trend"
          data={glucoseData}
          targetRange={{
            min: 80,
            max: 130,
            description: "Target range: 80-130 mg/dL before meals."
          }}
          onRefresh={() => {
            console.log('Refreshing chart data...');
          }}
        />

      </HealthDashboardGrid>
    </div>
  );
};

export default DigitalHealthDemo;

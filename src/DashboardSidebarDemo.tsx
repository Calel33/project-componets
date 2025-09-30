import React, { useState } from 'react';
import {
  Sidebar,
  DashboardHeader,
  DashboardLayout,
  StatsCard,
  RevenueChart,
  GenreChart,
  UsageChart,
  SpectrumChart,
  ArtistsTable,
  type SidebarNavItem,
  type Artist,
} from '../ui/components/dashboard-sidebar';

// Sample data
const navItems: SidebarNavItem[] = [
  { id: '1', label: 'Studio', icon: 'layout-dashboard', href: '#', isActive: false },
  { id: '2', label: 'Beats', icon: 'music', href: '#', isActive: false },
  { id: '3', label: 'Streaming', icon: 'radio', href: '#', badge: { text: 'LIVE', variant: 'live' }, isActive: false },
  { id: '4', label: 'Samples', icon: 'file-audio', href: '#', isActive: false },
  { id: '5', label: 'Artists', icon: 'users', href: '#', isActive: true },
  { id: '6', label: 'Mixer Settings', icon: 'sliders-horizontal', href: '#', isActive: false },
];

const artists: Artist[] = [
  {
    id: '1',
    name: 'Maya Chen',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    genre: 'Electronic',
    status: { label: 'Online', variant: 'green' },
    location: 'Tokyo',
  },
  {
    id: '2',
    name: 'Marcus Rivera',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
    genre: 'Hip-Hop',
    isFeatured: true,
    status: { label: 'Recording', variant: 'yellow' },
    location: 'LA',
  },
  {
    id: '3',
    name: 'Zara Kim',
    avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
    genre: 'Pop',
    status: { label: 'Online', variant: 'green' },
    location: 'Seoul',
  },
  {
    id: '4',
    name: 'Luna Dubois',
    avatar: 'https://randomuser.me/api/portraits/women/91.jpg',
    genre: 'Jazz',
    isFeatured: true,
    status: { label: 'Away', variant: 'gray' },
    location: 'Paris',
  },
];

export default function DashboardSidebarDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <DashboardLayout
      mobileMenuOpen={mobileMenuOpen}
      onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      sidebar={
        <Sidebar
          logo={{ icon: 'waveform', text: 'SoundForge' }}
          newActionButton={{
            label: 'New Track',
            shortcut: '⌘N',
            onClick: () => console.log('New Track clicked'),
          }}
          navItems={navItems}
          upgradeCard={{
            title: 'Upgrade Available',
            description: 'Upgrade to Studio PRO for up to',
            highlight: '100GB',
            ctaText: 'Go Premium',
            dismissText: 'Maybe Later',
            onUpgrade: () => console.log('Upgrade clicked'),
            onDismiss: () => console.log('Dismiss clicked'),
          }}
          isMobileOpen={mobileMenuOpen}
          onMobileToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      }
      header={
        <DashboardHeader
          title="Studio Analytics"
          subtitle="12 active collaborators • Studio Elite"
          notifications={3}
          userAvatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
          onNotificationClick={() => console.log('Notifications clicked')}
          onHelpClick={() => console.log('Help clicked')}
          onProfileClick={() => console.log('Profile clicked')}
        />
      }
    >
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Total Tracks" value={247} icon="music" iconColor="blue" />
        <StatsCard title="Storage Used" value="84GB" icon="hard-drive" iconColor="cyan" />
        <StatsCard title="Active Sessions" value={12} icon="activity" iconColor="green" />
        <StatsCard title="Revenue" value="$12.4K" icon="dollar-sign" iconColor="purple" />
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              revenue: [8500, 9200, 11800, 10400, 12600, 13900, 15200, 14100, 16800, 18200, 17500, 19800],
              target: [10000, 10500, 11000, 11500, 12000, 12500, 13000, 13500, 14000, 14500, 15000, 15500],
            }}
          />
        </div>
        <GenreChart
          data={{
            labels: ['Hip-Hop', 'Electronic', 'Pop', 'Jazz', 'Rock'],
            values: [30, 25, 20, 15, 10],
          }}
        />
      </div>

      {/* Usage Chart and Artists Table */}
      <div className="grid lg:grid-cols-3 gap-6">
        <UsageChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            values: [8, 12, 6, 15, 10, 14, 9],
          }}
        />
        <div className="lg:col-span-2">
          <ArtistsTable
            artists={artists}
            onArtistAction={(id) => console.log('Artist action:', id)}
          />
        </div>
      </div>

      {/* Spectrum Chart */}
      <SpectrumChart
        data={{
          frequencies: ['20', '40', '80', '160', '320', '640', '1.2k', '2.5k', '5k', '10k', '20k'],
          amplitudes: [45, 52, 48, 72, 55, 68, 42, 78, 65, 50, 38],
        }}
      />
    </DashboardLayout>
  );
}

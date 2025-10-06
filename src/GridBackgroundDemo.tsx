import { AnimatedGridBackground, CursorGlow } from '../ui/components/background';
import { GridHero, InfoCard } from '../ui/components/web3';
import {
  Sparkles,
  Activity,
  ListChecks,
  Users,
  TrendingUp,
  Grid3x3,
  Repeat,
  Leaf,
  Gamepad2,
  Plus,
} from 'lucide-react';

/**
 * GridBackgroundDemo
 * Demonstrates the animated grid background system with cursor glow,
 * hero section, and glassmorphic info cards
 */
export default function GridBackgroundDemo() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#222]">
      {/* Animated Grid Background */}
      <AnimatedGridBackground
        cellCount={12}
        baseColor="#111"
        highlightColor="transparent"
        enableHover={true}
      />

      {/* Cursor Glow Effect */}
      <CursorGlow
        glowSize={400}
        glowColor="rgba(187, 187, 187, 0.3)"
        followSpeed={0.1}
        blurAmount={70}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full">
        {/* Navigation */}
        <header className="relative z-20">
          <nav className="flex md:px-10 lg:px-16 max-w-7xl mx-auto pt-6 px-6 pb-6 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-white/10 to-white/20 border border-white/10 relative">
                <Sparkles className="w-4 h-4 text-white/80" />
              </span>
              <span className="font-light tracking-tight text-white">ChainNavigator</span>
            </div>
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-gray-300 transition font-light tracking-tight text-white">
                  Explore
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition font-light tracking-tight text-white">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition font-light tracking-tight text-white">
                  Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition font-light tracking-tight text-white">
                  About
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <button className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full text-sm border border-white/10 hover:border-white/30 transition font-light tracking-tight text-white">
                Sign In
              </button>
              <button className="inline-flex items-center justify-center h-9 px-5 rounded-full text-sm bg-white text-[#0d0d0d] hover:bg-gray-200 transition font-light tracking-tight">
                Join Us
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section with Side Cards */}
        <GridHero
          badge="28k+ Members Community"
          badgeIcon={<Sparkles className="w-4 h-4 stroke-white" />}
          heading={
            <>
              Your Personal
              <br />
              Blockchain Platforms
              <br />
              Navigator
            </>
          }
          description="Find everything you need to start exploring the decentralized web and unlock new opportunities for innovation and 🚀 growth."
          ctaText="Join Our Beta"
          onCtaClick={() => console.log('CTA clicked')}
          sideCards={
            <>
              {/* How to Join Card */}
              <InfoCard
                title="How to join"
                icon={<Activity className="w-5 h-5" />}
                variant="steps"
                glassmorphism={true}
                steps={[
                  {
                    icon: <ListChecks className="w-4 h-4 text-white" />,
                    title: 'Choose category',
                    description: 'Our curated list of blockchain platforms covers a wide range of categories',
                  },
                  {
                    icon: <Users className="w-4 h-4 text-white" />,
                    title: 'Join community',
                    description: 'Become a member of our incredible community',
                    additionalContent: (
                      <div className="flex -space-x-3">
                        <img
                          src="https://randomuser.me/api/portraits/men/11.jpg"
                          alt="Member"
                          className="w-10 h-10 rounded-full object-cover border-2 border-[#0d0d0d]"
                        />
                        <img
                          src="https://randomuser.me/api/portraits/women/65.jpg"
                          alt="Member"
                          className="w-10 h-10 rounded-full object-cover border-2 border-[#0d0d0d]"
                        />
                        <img
                          src="https://randomuser.me/api/portraits/men/44.jpg"
                          alt="Member"
                          className="w-10 h-10 rounded-full object-cover border-2 border-[#0d0d0d]"
                        />
                        <button
                          className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#0d0d0d] bg-white/10 hover:bg-white/20 transition"
                          aria-label="Add more members"
                        >
                          <Plus className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    ),
                  },
                  {
                    icon: <TrendingUp className="w-4 h-4 text-white" />,
                    title: 'Grow with us',
                    description: 'Stay up-to-date on the latest trends and opportunities in blockchain',
                  },
                ]}
              />

              {/* Categories Card */}
              <InfoCard
                title="Categories"
                icon={<Sparkles className="w-5 h-5 stroke-white" />}
                variant="categories"
                glassmorphism={true}
                categories={[
                  {
                    icon: <Grid3x3 className="w-4 h-4" />,
                    name: 'Investments',
                    description: 'Explore asset management platforms, portfolio trackers, and investment protocols.',
                    count: 32,
                    active: true,
                  },
                  {
                    icon: <Repeat className="w-4 h-4" />,
                    name: 'Exchanges',
                    description: 'Centralized and decentralized platforms for trading cryptocurrencies securely.',
                    count: 21,
                    active: false,
                  },
                  {
                    icon: <Leaf className="w-4 h-4" />,
                    name: 'Farming',
                    description: 'Yield farming platforms and liquidity mining to maximize your crypto assets.',
                    count: 14,
                    active: false,
                  },
                  {
                    icon: <Gamepad2 className="w-4 h-4" />,
                    name: 'Gaming',
                    description: 'Discover blockchain-powered games and play-to-earn ecosystems.',
                    count: 11,
                    active: false,
                  },
                ]}
              />
            </>
          }
        />
      </div>
    </div>
  );
}

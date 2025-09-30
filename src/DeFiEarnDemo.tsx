import React from 'react';
import {
  DeFiHeader,
  DeFiLayout,
  HeroBanner,
  PortfolioCard,
  DepositsSidebar,
  VaultsTable,
  DeFiFooter,
  useWallet,
  useVaultsFilters,
  SAMPLE_VAULTS
} from '../ui/components/defi-earn';

/**
 * DeFiEarnDemo - Complete DeFi Earn Dashboard demonstration
 * 
 * Features all components integrated:
 * - Header with wallet connection
 * - Hero banner
 * - Portfolio card with token stats
 * - Deposits sidebar with metrics
 * - Vaults table with filtering
 * - Footer
 */
export const DeFiEarnDemo: React.FC = () => {
  const { walletAddress, connect, disconnect } = useWallet();
  const { filteredVaults, updateFilters, updateSort } = useVaultsFilters(SAMPLE_VAULTS);

  const navItems = [
    { id: '1', label: 'Markets', href: '#', isActive: false },
    { id: '2', label: 'Earn', href: '#', isActive: true },
    { id: '3', label: 'Borrow', href: '#', isActive: false },
    { id: '4', label: 'Activity', href: '#', isActive: false },
    { id: '5', label: 'Rewards', href: '#', isActive: false },
    { id: '6', label: 'Gov', href: '#', isActive: false }
  ];

  const depositMetrics = {
    netDeposits: '$17,987,451',
    utilization: 72,
    weeklyInflow: '+$2.4m',
    weeklyOutflow: '-$1.1m'
  };

  const tokenData = {
    symbol: 'USDX',
    name: 'Stable Coin',
    icon: 'Coins',
    iconGradient: { from: 'sky-500', to: 'cyan-400' },
    balance: '18,263,389',
    balanceUSD: '$98,675',
    supplyAPY: '+6.98%'
  };

  const portfolioData = {
    title: 'Earn',
    description: 'Multiply your assets with curated vaults, hedged exposure, and onchain execution.',
    token: tokenData,
    portfolio: {
      amount: '18,263,389',
      symbol: 'USDX'
    },
    stats: {
      supplyAPY: '+6.98%',
      balance: '$98,675'
    },
    image: 'https://cdn.midjourney.com/9c649db4-a6a9-488f-bf3c-1586664627e1/0_0.png?w=800&q=80'
  };

  const footerData = {
    logo: { icon: 'Diamond', text: 'Aventra' },
    description: 'Onchain yield infrastructure for funds and builders. Execute hedged strategies, route liquidity, and earn with confidence.',
    socialLinks: [
      { platform: 'Globe', href: '#', icon: 'globe' },
      { platform: 'Twitter', href: '#', icon: 'twitter' },
      { platform: 'Github', href: '#', icon: 'github' },
      { platform: 'Mail', href: '#', icon: 'mail' }
    ],
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Protocol', href: '#' },
          { label: 'Vaults', href: '#' },
          { label: 'Perpetuals', href: '#' },
          { label: 'Structured Products', href: '#' }
        ]
      },
      {
        title: 'Build',
        links: [
          { label: 'Docs', href: '#' },
          { label: 'SDK', href: '#' },
          { label: 'Developer Tools', href: '#' },
          { label: 'API Access', href: '#' }
        ]
      }
    ],
    tagline: 'Built for traders. Powered by onchain automation.'
  };

  const handleVaultClick = (vaultId: string) => {
    console.log('Vault clicked:', vaultId);
  };

  const handleDeposit = () => {
    console.log('Deposit clicked');
  };

  const handleTransfer = () => {
    console.log('Transfer clicked');
  };

  const handleAddFunds = () => {
    console.log('Add funds clicked');
  };

  const handleWithdraw = () => {
    console.log('Withdraw clicked');
  };

  return (
    <DeFiLayout>
      <DeFiHeader
        navItems={navItems}
        walletAddress={walletAddress}
        notifications={3}
        onSearchClick={() => console.log('Search clicked')}
        onNotificationClick={() => console.log('Notifications clicked')}
        onWalletConnect={connect}
        onWalletDisconnect={disconnect}
      />

      <HeroBanner
        title="Unlock the Future of DeFi Earning"
        description="Experience institutional-grade yield strategies with transparent, onchain execution."
        image="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/58be6ce7-035f-46d6-9f95-cf56eada0b13_800w.jpg"
        imageAlt="Mountain landscape representing DeFi growth"
        ctaSecondary={{ label: 'Learn more', href: '#' }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <PortfolioCard
          {...portfolioData}
          onDeposit={handleDeposit}
          onTransfer={handleTransfer}
        />

        <DepositsSidebar
          metrics={depositMetrics}
          onAddFunds={handleAddFunds}
          onWithdraw={handleWithdraw}
        />
      </div>

      <VaultsTable
        vaults={filteredVaults}
        onVaultClick={handleVaultClick}
        onFilterChange={updateFilters}
        onSortChange={updateSort}
      />

      <DeFiFooter {...footerData} />
    </DeFiLayout>
  );
};

export default DeFiEarnDemo;

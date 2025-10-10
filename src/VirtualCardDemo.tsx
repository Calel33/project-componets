import { useState } from 'react';
import { VirtualPaymentCard } from '../ui/components/payment/VirtualPaymentCard';
import { VirtualCardData } from '../ui/components/types/payment.types';

const sampleCardData: VirtualCardData = {
  cardNumber: '4921890145627631',
  cardHolder: 'Jamie Chen',
  expiryMonth: '05',
  expiryYear: '2029',
  cvv: '921',
  cardId: 'NX-387542',
  issuer: 'NEXUS'
};

export function VirtualCardDemo() {
  const [flipCount, setFlipCount] = useState(0);
  const [isAutoFlip, setIsAutoFlip] = useState(false);
  const [currentSide, setCurrentSide] = useState('front');

  const handleFlip = (showingBack: boolean) => {
    setFlipCount(prev => prev + 1);
    setCurrentSide(showingBack ? 'back' : 'front');
  };

  const toggleAutoFlip = () => {
    setIsAutoFlip(!isAutoFlip);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-geist text-[48px] font-light tracking-tight text-white mb-4">
            Virtual Payment Card
          </h1>
          <p className="text-[18px] text-gray-300 max-w-2xl mx-auto">
            Interactive 3D payment card with glassmorphism design and click-to-flip functionality
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-[24px] font-semibold text-white">{flipCount}</div>
            <div className="text-[14px] text-gray-400">Total Flips</div>
          </div>
          <div className="text-center">
            <div className="text-[24px] font-semibold text-white capitalize">{currentSide}</div>
            <div className="text-[14px] text-gray-400">Current Side</div>
          </div>
        </div>

        {/* Main Card */}
        <div className="flex justify-center mb-12">
          <VirtualPaymentCard
            cardData={sampleCardData}
            onFlip={handleFlip}
            enableFlip={true}
            className={isAutoFlip ? 'animate-pulse' : ''}
          />
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={toggleAutoFlip}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            {isAutoFlip ? 'Disable Auto Flip' : 'Enable Auto Flip'}
          </button>
        </div>

        {/* Card Details */}
        <div className="glass-card-effect rounded-xl p-6 max-w-2xl mx-auto">
          <h2 className="text-[20px] font-semibold text-white mb-4">Card Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Card Number:</span>
              <div className="text-white font-mono">{sampleCardData.cardNumber}</div>
            </div>
            <div>
              <span className="text-gray-400">Cardholder:</span>
              <div className="text-white">{sampleCardData.cardHolder}</div>
            </div>
            <div>
              <span className="text-gray-400">Expiry:</span>
              <div className="text-white">{sampleCardData.expiryMonth}/{sampleCardData.expiryYear}</div>
            </div>
            <div>
              <span className="text-gray-400">CVV:</span>
              <div className="text-white">{sampleCardData.cvv}</div>
            </div>
            <div>
              <span className="text-gray-400">Card ID:</span>
              <div className="text-white">{sampleCardData.cardId}</div>
            </div>
            <div>
              <span className="text-gray-400">Issuer:</span>
              <div className="text-white">{sampleCardData.issuer}</div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-12">
          <p className="text-[14px] text-gray-400">
            Click the card to flip it and see the back with CVV details
          </p>
        </div>
      </div>

      
    </div>
  );
}

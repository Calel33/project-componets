import { VirtualPaymentCard } from '../ui/components/payment/VirtualPaymentCard';
import { VirtualCardData } from '../ui/components/types/payment.types';

const testCardData: VirtualCardData = {
  cardNumber: '4921890145627631',
  cardHolder: 'Jamie Chen',
  expiryMonth: '05',
  expiryYear: '2029',
  cvv: '921',
  cardId: 'NX-387542',
  issuer: 'NEXUS'
};

export function TestCard() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom right, #1e293b, #0f172a)',
      padding: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1 style={{ color: 'white', marginBottom: '20px' }}>Virtual Payment Card Test</h1>
      <p style={{ color: 'white', marginBottom: '40px' }}>Debug Info: Component should render below</p>
      
      <div style={{
        width: '380px',
        height: '220px',
        position: 'relative',
        border: '2px solid red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p style={{ color: 'white' }}>Card Container (380x220px)</p>
        <VirtualPaymentCard
          cardData={testCardData}
          onFlip={(showingBack) => console.log('Card flipped:', showingBack)}
          enableFlip={true}
        />
      </div>
      
      <p style={{ color: 'white', marginTop: '20px' }}>Click the red border area to flip the card</p>
    </div>
  );
}

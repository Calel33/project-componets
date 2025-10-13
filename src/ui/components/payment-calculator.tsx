import React, { useState, useEffect } from 'react';
import { GlassCard, GlassCardHeader, GlassCardStats } from './glass-card';
import { Button } from './button';
import { Input } from './input';
import { Badge } from './badge';

export interface PaymentCalculatorProps {
  vehiclePrice: number;
  downPayment?: number;
  interestRate?: number;
  loanTerm?: number; // in months
  className?: string;
}

interface LoanDetails {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  savingsVsGas: number;
}

const PaymentCalculator: React.FC<PaymentCalculatorProps> = ({
  vehiclePrice,
  downPayment = 0,
  interestRate = 3.9,
  loanTerm = 72,
  className
}) => {
  const [loanAmount, setLoanAmount] = useState(vehiclePrice - downPayment);
  const [downPaymentAmount, setDownPaymentAmount] = useState(downPayment);
  const [rate, setRate] = useState(interestRate);
  const [term, setTerm] = useState(loanTerm);
  const [loanDetails, setLoanDetails] = useState<LoanDetails>({
    monthlyPayment: 0,
    totalInterest: 0,
    totalPayment: 0,
    savingsVsGas: 0
  });

  // Calculate loan details whenever parameters change
  useEffect(() => {
    const principal = vehiclePrice - downPaymentAmount;
    const monthlyRate = rate / 100 / 12;
    
    // Calculate monthly payment using loan formula
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, term)) / 
      (Math.pow(1 + monthlyRate, term) - 1);
    
    const totalPayment = monthlyPayment * term;
    const totalInterest = totalPayment - principal;
    
    // Estimate savings vs gas (assuming $200/month gas cost)
    const monthlyGasSavings = 200;
    const totalGasSavings = monthlyGasSavings * term;
    
    setLoanDetails({
      monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
      totalPayment: isNaN(totalPayment) ? 0 : totalPayment,
      savingsVsGas: totalGasSavings
    });
    
    setLoanAmount(principal);
  }, [vehiclePrice, downPaymentAmount, rate, term]);

  const handleDownPaymentChange = (value: string) => {
    const amount = parseFloat(value) || 0;
    const maxDownPayment = vehiclePrice * 0.5; // Max 50% down payment
    setDownPaymentAmount(Math.min(amount, maxDownPayment));
  };

  const handleDownPaymentPercentChange = (percent: number) => {
    const amount = (vehiclePrice * percent) / 100;
    setDownPaymentAmount(amount);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const downPaymentPercent = (downPaymentAmount / vehiclePrice) * 100;

  return (
    <div className={`space-y-6 ${className}`}>
      <GlassCard className="p-6">
        <GlassCardHeader
          title="Payment Calculator"
          subtitle="Customize your financing options and see your monthly payments"
          badge="Interactive"
        />
        
        <div className="space-y-6">
          {/* Vehicle Price Display */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Vehicle Price</span>
              <span className="text-2xl font-bold text-white">{formatCurrency(vehiclePrice)}</span>
            </div>
          </div>

          {/* Down Payment Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-white">Down Payment</label>
              <span className="text-sm text-white/70">{downPaymentPercent.toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="5"
              value={downPaymentPercent}
              onChange={(e) => handleDownPaymentPercentChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between">
              <Input
                type="number"
                placeholder="0"
                value={downPaymentAmount}
                onChange={(e) => handleDownPaymentChange(e.target.value)}
                className="bg-white/10 border-white/20 text-white w-32"
                prefix="$"
              />
              <div className="text-right">
                <div className="text-sm text-white/70">Loan Amount</div>
                <div className="text-lg font-semibold text-white">{formatCurrency(loanAmount)}</div>
              </div>
            </div>
          </div>

          {/* Quick Down Payment Options */}
          <div className="flex flex-wrap gap-2">
            {[0, 10, 20, 30].map((percent) => (
              <Button
                key={percent}
                variant={downPaymentPercent === percent ? 'default' : 'secondary'}
                size="sm"
                onClick={() => handleDownPaymentPercentChange(percent)}
                className={downPaymentPercent === percent ? 'bg-blue-600' : 'bg-white/10'}
              >
                {percent}%
              </Button>
            ))}
          </div>

          {/* Interest Rate */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-white">Interest Rate (APR)</label>
              <span className="text-sm text-white/70">{rate}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Loan Term */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-white">Loan Term</label>
            <div className="grid grid-cols-3 gap-2">
              {[36, 60, 72].map((months) => (
                <Button
                  key={months}
                  variant={term === months ? 'default' : 'secondary'}
                  size="sm"
                  onClick={() => setTerm(months)}
                  className={term === months ? 'bg-blue-600' : 'bg-white/10'}
                >
                  {months / 1} {months === 36 ? 'years' : months === 60 ? 'years' : 'years'}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Payment Summary */}
      <GlassCard className="p-6">
        <GlassCardHeader
          title="Payment Summary"
          subtitle="Your estimated monthly payments and savings"
        />
        
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-sm text-white/70 mb-2">Estimated Monthly Payment</div>
              <div className="text-4xl font-bold text-white mb-2">
                {formatCurrency(loanDetails.monthlyPayment)}
              </div>
              <div className="flex justify-center gap-4 text-sm">
                <div>
                  <span className="text-white/70">Term: </span>
                  <span className="text-white">{term / 1} years</span>
                </div>
                <div>
                  <span className="text-white/70">Rate: </span>
                  <span className="text-white">{rate}%</span>
                </div>
              </div>
            </div>
          </div>

          <GlassCardStats
            stats={[
              {
                label: "Total Interest",
                value: formatCurrency(loanDetails.totalInterest),
                icon: <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              },
              {
                label: "Total Cost",
                value: formatCurrency(loanDetails.totalPayment),
                icon: <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              },
              {
                label: "Gas Savings",
                value: formatCurrency(loanDetails.savingsVsGas),
                icon: <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
            ]}
          />

          <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12c0 4.25 2.96 7.79 7 8.7V21h4v-.3c4.04-.91 7-4.45 7-8.7z" />
              </svg>
              <span className="text-sm text-green-300">
                You could save approximately {formatCurrency(loanDetails.savingsVsGas)} on fuel costs over {term / 1} years compared to a gas vehicle.
              </span>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default PaymentCalculator;
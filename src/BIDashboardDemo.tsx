import React from 'react';
import { BIDashboard } from '../ui/components/dashboard';

const BIDashboardDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-800">
      <BIDashboard userName="Sarah" />
    </div>
  );
};

export default BIDashboardDemo;

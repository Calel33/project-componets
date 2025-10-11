import React from 'react';
import { GPUDashboard } from '@/ui/components/dashboard/GPUDashboard';
import type { GPUDashboardProps } from '@/ui/components/types/dashboard.types';
import { Flame, Gauge, Zap } from 'lucide-react';

const Demo: React.FC = () => {
  const props: GPUDashboardProps = {
    stats: {
      totalGPUs: 256,
      activeUnits: 212,
      a100Count: 128,
      h100Count: 128,
      utilizationPercent: 76,
    },
    metrics: [
      { label: 'Temperature', value: '68°C', status: 'moderate', icon: <Flame className="h-4 w-4" /> },
      { label: 'Power Draw', value: '31.4 kW', status: 'optimal', icon: <Zap className="h-4 w-4" /> },
      { label: 'Uptime', value: '12d 4h', status: 'optimal', icon: <Gauge className="h-4 w-4" /> },
    ],
    jobs: [
      { name: 'vision-train-v4', gpuCount: 32, status: 'running', eta: '2h 14m' },
      { name: 'llm-finetune-13b', gpuCount: 64, status: 'starting', eta: '—' },
      { name: 'render-batch-042', gpuCount: 8, status: 'queued', eta: '18m' },
    ],
    chartData: [
      { label: 'Vision', data: [8,9,10,9,11,10,9,8,9,12,11,10], backgroundColor: 'rgba(56,189,248,0.6)' },
      { label: 'LLM', data: [12,11,13,14,12,13,12,13,14,13,12,15], backgroundColor: 'rgba(99,102,241,0.6)' },
      { label: 'Research', data: [4,5,3,4,5,4,6,5,4,3,4,5], backgroundColor: 'rgba(34,197,94,0.6)' },
    ],
    refreshInterval: 5000,
  };

  return (
    <div className="min-h-screen bg-neutral-950 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-white">Quantum GPU Analytics</h1>
          <p className="text-sm text-neutral-400">Resource Overview</p>
        </div>

        <GPUDashboard {...props} />
      </div>
    </div>
  );
};

export default Demo;

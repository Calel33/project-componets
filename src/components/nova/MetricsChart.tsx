import { useRef } from 'react';
import { useChartSetup } from '../../../ui/hooks/useChartSetup';

export const MetricsChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [320, 410, 390, 520, 610, 700, 650],
  };

  useChartSetup(canvasRef, chartData);

  return (
    <div className="mt-4">
      <div className="relative h-40">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

import React from 'react';
import ReactDOM from 'react-dom/client';
import { SchedulingDashboard } from '@/ui/components/scheduling';
import './styles.css';

function App() {
  return <SchedulingDashboard />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { AnalyticsDashboard } from '@/ui/components/analytics';
import './styles.css';

function App() {
  return <AnalyticsDashboard />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

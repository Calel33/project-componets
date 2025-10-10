import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminDashboardDemo from './AdminDashboardDemo';
import AdminListingDemo from './AdminListingDemo';
import AdminDirectoryDemo from './AdminDirectoryDemo';
import './index.css';
import './animations.css';

// Switch between demos here
// const Demo = CandleStoreLanding;
// const Demo = DivorceLawyerLanding;
// const Demo = LandInvestmentDemo;
const demos = {
  AdminDashboardDemo,
  AdminListingDemo,
  AdminDirectoryDemo,
};

const Demo = demos.AdminDirectoryDemo;
// const Demo = VirtualCardDemo;
// const Demo = TestCard;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);

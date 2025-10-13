import React from 'react';
import ReactDOM from 'react-dom/client';
import MusicStudioLanding from './MusicStudioLanding';

import './index.css';
import './animations.css';

const Demo = MusicStudioLanding;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/AppUseState';
import { App } from 'components/AppUseReducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

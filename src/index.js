import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Global reset styles */}
    <style>{`
      body, html, #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
    <App />
  </React.StrictMode>
);

reportWebVitals();

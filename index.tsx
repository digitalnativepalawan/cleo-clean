import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// ✅ CSS files are in the root
import './globals.css';
import './tokens.css'; // remove if tokens.css not needed

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found in index.html');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

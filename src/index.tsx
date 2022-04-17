import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AppThemeProvider } from './contexts/AppThemeContext';
import './index.css';
import SideNavigation from './lib/components/SideNavigation';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <Router>
        <SideNavigation />
        <App />
      </Router>
    </AppThemeProvider>
  </React.StrictMode>
);

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from './App';
import { AppThemeProvider, DrawerProvider } from './contexts';
import SideNavigation from './lib/components/SideNavigation';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <DrawerProvider>
        <SideNavigation>
          <Router>
            <App />
          </Router>
        </SideNavigation>
      </DrawerProvider>
    </AppThemeProvider>
  </React.StrictMode>
);

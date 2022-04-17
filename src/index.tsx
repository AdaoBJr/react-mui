import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from './App';
import { AppThemeProvider, DrawerProvider } from './contexts';
import { SideNavigation } from './lib/components';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <DrawerProvider>
        <Router>
          <SideNavigation>
            <App />
          </SideNavigation>
        </Router>
      </DrawerProvider>
    </AppThemeProvider>
  </React.StrictMode>
);

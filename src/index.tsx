import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { LightTheme } from './theme';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

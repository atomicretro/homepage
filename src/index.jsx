import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { AppProvider } from './context/app_provider';
import { PaletteProvider } from './context/palette_provider';

import { App } from './components/app';
import { Background } from './components/background';

import './styles/reset.css';
import { GlobalStyle } from './styles/globalStyles';

const root = createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <PaletteProvider>
      <HashRouter>
        <GlobalStyle />
        <Background />
        <App />
      </HashRouter>
    </PaletteProvider>
  </AppProvider>,
);

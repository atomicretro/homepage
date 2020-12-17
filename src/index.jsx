import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import AppProvider from './context/app_provider';
import App from './components/app';

import './scss/reset.scss';

ReactDOM.render(
  <AppProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </AppProvider>,
  document.getElementById('root')
);

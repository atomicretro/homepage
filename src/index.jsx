import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import AppProvider from './context/app_provider';
import App from './components/app';

import './scss/reset.scss';

ReactDOM.render(
  <AppProvider>
    <HashRouter>
      <Route path='/' component={ App } />
    </HashRouter>
  </AppProvider>,
  document.getElementById('root')
);

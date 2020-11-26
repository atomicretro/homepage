import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppProvider from './context/app_provider';
import App from './components/app';
import CSSChallenges from './components/odds_ends/css_challenges';

import './scss/reset.scss';

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <Switch>
        <Route path='/css' component={ CSSChallenges } />
        <Route path='/' component={ App } />
      </Switch>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById('root')
);

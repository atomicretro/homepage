import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AppProvider from './context/app_provider';
import App from './components/app';
import CSSChallenges from './components/odds_ends/css_challenges';

import './scss/reset.scss';

ReactDOM.render(
  <AppProvider>
    <HashRouter>
      <Switch>
        <Route path='/css' component={ CSSChallenges } />
        <Route path='/' component={ App } />
      </Switch>
    </HashRouter>
  </AppProvider>,
  document.getElementById('root')
);

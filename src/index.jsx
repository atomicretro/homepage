import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import App from './components/app';
import CSSChallenges from './components/odds_ends/css_challenges';

import './scss/reset.scss';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/css' component={ CSSChallenges } />
      <Route path='/' component={ App } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

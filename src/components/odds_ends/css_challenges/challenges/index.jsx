import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Challenges05 from './05';
import Alien from './alien';
import Monster from './monster';
import Clock from './clock';
import Hover from './hover';
import Segments from './segments';

const Challenges = () => {
  return (
    <Switch>
      <Route path='/css/05' component={ Challenges05 } />
      <Route path='/css/alien' component={ Alien } />
      <Route path='/css/clock' component={ Clock } />
      <Route path='/css/hover' component={ Hover } />
      <Route path='/css/monster' component={ Monster } />
      <Route path='/css/segments' component={ Segments } />
    </Switch>
  );
};

export default Challenges;

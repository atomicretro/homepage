import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Alien from './alien';
import Monster from './monster';
import Clock from './clock';
import Hover from './hover';
import Segments from './segments';

const Challenges = () => {
  return (
    <Routes>
      <Route path='/css/alien' component={ Alien } />
      <Route path='/css/clock' component={ Clock } />
      <Route path='/css/hover' component={ Hover } />
      <Route path='/css/monster' component={ Monster } />
      <Route path='/css/segments' component={ Segments } />
    </Routes>
  );
};

export default Challenges;

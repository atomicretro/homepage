import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Experiment79 from './79';

const CSSChallenges = (props) => {
  return (
    <Switch>
      <Route path='/css/79' component={ Experiment79 } />
    </Switch>
  );
};

export default CSSChallenges;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Challenge79 from './79';

const CSSChallenges = (props) => {
  return (
    <Switch>
      <Route path='/css/79' component={ Challenge79 } />
    </Switch>
  );
};

export default CSSChallenges;

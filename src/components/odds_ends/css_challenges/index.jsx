import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Challenge46 from './46';
import Challenge48 from './48';
import Challenge59 from './59';
import Challenge79 from './79';

const CSSChallenges = (props) => {
  return (
    <Switch>
      <Route path='/css/46' component={ Challenge46 } />
      <Route path='/css/48' component={ Challenge48 } />
      <Route path='/css/59' component={ Challenge59 } />
      <Route path='/css/79' component={ Challenge79 } />
    </Switch>
  );
};

export default CSSChallenges;

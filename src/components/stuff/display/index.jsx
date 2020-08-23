import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Contact from '../../contact';
import Home from '../../home';

const Display = () => {
  return(
    <section className='display'>
      <Switch>
        <Route path='/' component={ Home }/>
        <Route path='/contact' component={ Contact }/>
      </Switch>
    </section>
  );
}

export default Display;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Contact from '../../contact';
import Home from '../../home';
import Projects from '../../projects';

const Display = ({ palette, _setPalette }) => {
  return(
    <section className='display'>
      <Switch>
        <Route path='/contact' component={ Contact }/>
        <Route path='/projects' component={ Projects }/>
        <Route path='/' component={ () => <Home palette={ palette } _setPalette={ _setPalette } /> }/>
      </Switch>
    </section>
  );
}

export default Display;

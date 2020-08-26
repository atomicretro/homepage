import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Contact from '../../contact';
import Home from '../../home';
import Projects from '../../projects';

const Display = ({ isHidden, palette, _setPalette }) => {
  return(
    <section className={ `display display--${palette}` }>
      <Switch>
        <Route path='/contact' component={ Contact }/>
        <Route path='/projects' component={ Projects }/>
        <Route path='/' component={ () => (
          <Home isHidden={ isHidden } palette={ palette } _setPalette={ _setPalette } />
        ) }/>
      </Switch>
    </section>
  );
}

export default Display;

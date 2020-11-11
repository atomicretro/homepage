import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Contact from '../../contact';
import Home from '../../home';
import Projects from '../../projects';

const Display = ({ isHidden, palette, _setPalette }) => {
  return(
    <section className={ `display display--${palette}` }>
      <Switch>
        <Route path='/contact' component={ () => <Contact isHidden={ isHidden } /> }/>
        <Route path='/projects' component={ () => <Projects isHidden={ isHidden } /> }/>
        <Route path='/' component={ () => (
          <Home isHidden={ isHidden } currentPalette={ palette } _setPalette={ _setPalette } />
        ) }/>
      </Switch>
    </section>
  );
}

export default Display;

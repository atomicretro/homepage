import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Contact } from '../contact';
import Home from '../home';
import { Projects } from '../projects';
import OddsAndEnds from '../odds_ends';
import CSSChallenges from '../odds_ends/css_challenges';

const Display = (props) => {
  const { isHidden, palette, setPalette } = props;

  return(
    <section className={ `display display--${palette}` }>
      <Routes>
        <Route path='/contact' element={<Contact isHidden={ isHidden } />}/>
        <Route path='/odds-and-ends' element={<OddsAndEnds isHidden={ isHidden } />}/>
        <Route path='/projects' element={<Projects isHidden={ isHidden } />}/>
        <Route path='/css' element={<CSSChallenges isHidden={ isHidden } />}/>
        <Route path='/' element={
          <Home isHidden={ isHidden } currentPalette={ palette } setPalette={ setPalette } />
        }/>
      </Routes>
    </section>
  );
}

export default Display;

import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import AppContext from '../context/app_context';
import NightSky from './night_sky';
import Stuff from './stuff';

import palettes from '../utils/palettes';
import { randomIntMinMax } from '../utils/math';

import '../scss/utils.css';
import '../scss/palettes.css';
import '../scss/app.css';

const App = () => {
  const { currentPalette, _setPalette } = useContext(AppContext);
  const location = useLocation();

  const [isStuffHidden, _hideStuff] = useState(location.pathname === '/');

  const handleKeyDown = (e) => {
    const { keyCode } = e;
    if (keyCode === 13 || keyCode === 32) {
      _hideStuff(false);
    }
  }

  const pickRandomPalette = (e) => {
    e.stopPropagation();
    const currentIdx = palettes.findIndex((el) => el === currentPalette);
    const duplicatedPalettes = [ ...palettes ];
    duplicatedPalettes.splice(currentIdx, 1);
    const nextIdx = randomIntMinMax(0, duplicatedPalettes.length);
    const nextPalette = duplicatedPalettes[nextIdx];
    _setPalette(nextPalette);
  }

  const paletteButtonClass = classNames(
    'main-button',
    'main-button--random-palette',
    `main-button--${currentPalette}`,
    { 'main-button--random-palette-hidden': !isStuffHidden },
  );
  const instructionsButtonClass = classNames(
    'main-button',
    'main-button--instructions',
    `main-button--${currentPalette}`,
    { 'main-button--instructions-hidden': !isStuffHidden },
  );

  return (
    <main
      className={ `app app--${currentPalette}` }
      onClick={ (e) => { _hideStuff(false); } }
      onKeyDown={ handleKeyDown }
      tabIndex={ isStuffHidden ? '0' : '-1' }>

      <NightSky currentPalette={ currentPalette } />

      <Stuff
        isHidden={ isStuffHidden }
        palette={ currentPalette }
        _setIsHidden={ _hideStuff }
        _setPalette={ _setPalette }
      />

      <button
        className={ `${paletteButtonClass}` }
        onClick={ pickRandomPalette }
        onMouseUp={ (e) => { e.currentTarget.blur(); } }
      >
        Random palette
      </button>

      <button
        className={ `${instructionsButtonClass}` }
        onMouseUp={ (e) => { e.currentTarget.blur(); } }
        tabIndex={ isStuffHidden ? '0' : '-1' }
      >
        Click to enter
      </button>
    </main>
  );
}

export default App;

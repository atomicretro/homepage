import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import NightSky from './night_sky';
import Stuff from './stuff';
import palettes from '../utils/palettes';

import '../css/utils.css';
import '../css/palettes.css';
import '../css/app.css';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const defaultPalette = palettes[0];

const App = () => {
  const [isStuffHidden, hideStuff] = useState(true);
  const [currentPalette, setPalette] = useState(defaultPalette);
  const [isPaused, pauseStars] = useState(false);
  const previousHideStuff = usePrevious(isStuffHidden);
  const mainRef = useRef(null);

  const handleKeyDown = (e) => {
    const { keyCode } = e;
    if (keyCode === 13 || keyCode === 32) {
      hideStuff(false);
    }
  }

  const pickRandomPalette = (e) => {
    e.stopPropagation();
    const currentIdx = palettes.findIndex((el) => el === currentPalette);
    const duplicatedPalettes = [ ...palettes ];
    duplicatedPalettes.splice(currentIdx, 1);
    const nextIdx = getRandomInt(duplicatedPalettes.length);
    const nextPalette = duplicatedPalettes[nextIdx];
    setPalette(nextPalette);
  }

  if (previousHideStuff === false && isStuffHidden === true) {
    mainRef.current.focus();
  }

  const appClass = classNames(`app app--palette-${currentPalette}`, {
    'app--pause-stars': isPaused,
  });
  const paletteButtonClass = classNames(
    'button-no-style',
    'button-star-settings',
    'button-star-settings--random-palette',
    `button-star-settings--${currentPalette}`,
    { 'button-star-settings--hidden': !isStuffHidden },
  );
  const pauseButtonClass = classNames(
    'button-no-style',
    'button-star-settings',
    'button-star-settings--pause',
    `button-star-settings--${currentPalette}`,
  );

  return (
    <main
      className={ appClass }
      onClick={ (e) => { hideStuff(false); } }
      onKeyDown={ handleKeyDown }
      ref={ mainRef }
      tabIndex='0'>

      <NightSky />

      <Stuff
        isHidden={ isStuffHidden }
        palette={ currentPalette }
        _setIsHidden={ hideStuff }
        _setPalette={ setPalette } />

      <button
        className={ paletteButtonClass }
        tabIndex={ isStuffHidden ? '0' : '-1' }
        onClick={ pickRandomPalette }

        onMouseUp={ (e) => { e.currentTarget.blur(); } }>
        Random palette
      </button>
      <button
        className={ pauseButtonClass }
        onClick={ (e) => { e.stopPropagation(); pauseStars(!isPaused); } }
        onKeyDown={ (e) => { e.stopPropagation(); } }
        onMouseUp={ (e) => { e.currentTarget.blur(); } }>
        { isPaused ? 'Resume Stars' : 'Pause stars' }
      </button>
    </main>
  );
}

export default App;

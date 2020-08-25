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
  const [hideStuff, setIsHidden] = useState(true);
  const [currentPalette, setPalette] = useState(defaultPalette);
  const [isPaused, pauseStars] = useState(false);
  const previousHideStuff = usePrevious(hideStuff);
  const mainRef = useRef(null);

  const handleKeyDown = (e) => {
    const { keyCode } = e;
    if (keyCode === 13 || keyCode === 32) {
      setIsHidden(false);
    }
  }

  const pickRandomPalette = (e) => {
    e.stopPropagation();
    const currentIdx = palettes.findIndex((el) => el === currentPalette);
    const copyArray = [ ...palettes ];
    copyArray.splice(currentIdx, 1);
    const nextIdx = getRandomInt(copyArray.length);
    const nextPalette = copyArray[nextIdx];
    setPalette(nextPalette);
  }

  if (previousHideStuff === false && hideStuff === true) {
    mainRef.current.focus();
  }

  const appClass = classNames(`app app--palette-${currentPalette}`, {
    'app--pause-stars': isPaused,
  });
  const pauseClass = classNames(
    'button-no-style',
    'button-star-settings',
    'button-star-settings--pause',
    `button-star-settings--${currentPalette}`,
  );
  const paletteClass = classNames(
    'button-no-style',
    'button-star-settings',
    'button-star-settings--random-palette',
    `button-star-settings--${currentPalette}`,
    { 'button-star-settings--hidden': !hideStuff },
  );

  return (
    <main
      className={ appClass }
      onClick={ (e) => { setIsHidden(false); } }
      onKeyDown={ handleKeyDown }
      ref={ mainRef }
      tabIndex='0'>

      <NightSky />

      <Stuff
        isHidden={ hideStuff }
        palette={ currentPalette }
        _setIsHidden={ setIsHidden }
        _setPalette={ setPalette } />

      <button
        className={ paletteClass }
        tabIndex={ hideStuff ? '0' : '-1' }
        onClick={ pickRandomPalette }
        onKeyDown={ (e) => { e.stopPropagation(); } }
        onMouseUp={ (e) => { e.currentTarget.blur(); } }>
        Random palette
      </button>
      <button
        className={ pauseClass }
        onClick={ (e) => { e.stopPropagation(); pauseStars(!isPaused); } }
        onKeyDown={ (e) => { e.stopPropagation(); } }
        onMouseUp={ (e) => { e.currentTarget.blur(); } }>
        { isPaused ? 'Resume Stars' : 'Pause stars' }
      </button>
    </main>
  );
}

export default App;

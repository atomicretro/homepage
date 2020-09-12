import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import NightSky from './night_sky';
import Stuff from './stuff';
import palettes from '../utils/palettes';

import '../scss/utils.scss';
import '../scss/palettes.scss';
import '../scss/app.scss';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => { ref.current = value; });
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
  const [showInstructions, toggleInstructions] = useState(false);
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

  setTimeout(function(){
    toggleInstructions(true);
  }, 2000);

  const appClass = classNames(`app app--${currentPalette}`, {
    'app--pause-stars': isPaused,
  });
  const paletteButtonClass = classNames(
    'button-star-settings',
    'button-star-settings--random-palette',
    `button-star-settings--${currentPalette}`,
    { 'button-star-settings--hidden': !isStuffHidden },
  );
  const pauseButtonClass = classNames(
    'button-star-settings',
    'button-star-settings--pause',
    `button-star-settings--${currentPalette}`,
  );
  const instructionsClass = classNames('app__instructions', {
    'app__instructions--show': showInstructions,
  });

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

      <span className={instructionsClass}>Click anywhere to enter</span>
    </main>
  );
}

export default App;

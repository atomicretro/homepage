import React, { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import AppContext from '../context/app_context';
import NightSky from './night_sky';
import Stuff from './stuff';

import palettes from '../utils/palettes';
import { randomIntMinMax } from '../utils/math';

import '../scss/utils.scss';
import '../scss/palettes.scss';
import '../scss/app.scss';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => { ref.current = value; });
  return ref.current;
};

const App = () => {
  const {
    comingFromOddsAndEnds,
    currentPalette,
    setPalette,
  } = useContext(AppContext);

  const [isStuffHidden, hideStuff] = useState(comingFromOddsAndEnds ? false : true);
  const prevIsStuffHidden = usePrevious(isStuffHidden);
  const mainRef = useRef(null);

  if (prevIsStuffHidden === false && isStuffHidden === true) {
    mainRef.current.focus();
  }

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
    const nextIdx = randomIntMinMax(0, duplicatedPalettes.length);
    const nextPalette = duplicatedPalettes[nextIdx];
    setPalette(nextPalette);
  }

  const mainButtonClass = classNames(
    'main-button',
    `main-button--${currentPalette}`,
    { 'main-button--hidden': !isStuffHidden },
  );

  return (
    <main
      className={ `app app--${currentPalette}` }
      onClick={ (e) => { hideStuff(false); } }
      onKeyDown={ handleKeyDown }
      ref={ mainRef }
      tabIndex={ isStuffHidden ? '0' : '-1' }>

      <NightSky currentPalette={ currentPalette } />

      <Stuff
        isHidden={ isStuffHidden }
        palette={ currentPalette }
        _setIsHidden={ hideStuff }
        _setPalette={ setPalette } />

      <button
        className={ `${mainButtonClass} main-button--random-palette` }
        onClick={ pickRandomPalette }
        onMouseUp={ (e) => { e.currentTarget.blur(); } }
        tabIndex={ isStuffHidden ? '0' : '-1' }>
        Random palette
      </button>
      <button
        className={ `${mainButtonClass} main-button--instructions` }
        onMouseUp={ (e) => { e.currentTarget.blur(); } }
        tabIndex={ isStuffHidden ? '0' : '-1' }>
        Click to enter
      </button>
    </main>
  );
}

export default App;

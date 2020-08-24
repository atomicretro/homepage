import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import NightSky from './night_sky';
import Stuff from './stuff';

import '../css/app.css';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const starColorArray = [
  'orange',
  'red',
  'white',
];

const App = () => {
  const [hideStuff, setIsHidden] = useState(true);
  const [starColor, setStarColor] = useState('white');
  const [isPaused, pauseStars] = useState(false);
  const previousHideStuff = usePrevious(hideStuff);
  const mainRef = useRef(null);

  const handleKeyDown = (e) => {
    const { keyCode } = e;
    if (keyCode === 13 || keyCode === 32) {
      setIsHidden(false);
    }
  }

  const rotateStarColor = (e) => {
    e.stopPropagation();
    const nextColor = starColorArray.shift();
    starColorArray.push(nextColor);
    setStarColor(nextColor);
  }

  if (previousHideStuff === false && hideStuff === true) {
    mainRef.current.focus();
  }

  const appClass = classNames(`app app--stars-${starColor}`, {
    'app--pause-stars': isPaused,
  });
  const pauseClass = classNames('button-no-style button-star-settings button-star-settings--pause', {
    'button-star-settings--contrast': !hideStuff,
  });
  const colorClass = classNames('button-no-style button-star-settings button-star-settings--color', {
    'button-star-settings--contrast': !hideStuff,
  });

  return (
    <main
      className={ appClass }
      onClick={ (e) => { setIsHidden(false); } }
      onKeyDown={ handleKeyDown }
      ref={ mainRef }
      tabIndex='0'>

      <NightSky />

      <Stuff isHidden={ hideStuff } _setIsHidden={ setIsHidden } />

      <button
        className={ colorClass }
        onClick={ rotateStarColor }
        onKeyDown={ (e) => { e.stopPropagation(); } }
        onMouseUp={ (e) => { e.currentTarget.blur(); } }>
        Change star color
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

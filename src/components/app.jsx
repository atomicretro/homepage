import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import NightSky from './night_sky';
import Stuff from './stuff';

import '../css/general.css';

const App = () => {
  const [hideStuff, setIsHidden] = useState(true);
  const [isPaused, pauseStars] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  });

  const handleKeyDown = (e) => {
    const { keyCode } = e;
    if (setIsHidden && (keyCode === 13 || keyCode === 32)) {
      setIsHidden(false);
    }
  }

  const appClass = classNames('app', {
    'app--pause-stars': isPaused,
  });
  const pauseClass = classNames('button-no-style button-pause-stars', {
    'button-pause-stars--color': !hideStuff,
  });

  return (
    <main
      tabIndex='0'
      className={ appClass }
      onClick={ (e) => { setIsHidden(false); } }>
      <NightSky />
      <Stuff isHidden={ hideStuff } _setIsHidden={ setIsHidden } />

      <button
        className={ pauseClass }
        onClick={ (e) => { e.stopPropagation(); pauseStars(!isPaused); } }>
        { isPaused ? 'Restart Stars' : 'Pause stars' }
      </button>
    </main>
  );
}

export default App;

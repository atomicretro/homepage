import React, { useState } from 'react';
import classNames from 'classnames';

import NightSky from './night_sky';
import Stuff from './stuff';

import '../css/general.css';

const App = () => {
  const [hideStuff, setIsHidden] = useState(true);
  const appClass = classNames('app', {
    'app--pause-stars': !hideStuff,
  });

  return (
    <main
      className={ appClass }
      onClick={ (e) => { setIsHidden(false); } }>
      <NightSky />
      <Stuff isHidden={ hideStuff } setIsHidden={ setIsHidden } />
    </main>
  );
}

export default App;

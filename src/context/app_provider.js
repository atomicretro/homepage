import React, { useState } from 'react';
import AppContext from './app_context';

import palettes from '../utils/palettes';

const defaultPalette = palettes[0];

const AppProvider = (props) => {
  const [comingFromOddsAndEnds, setComingFromOddsAndEnds] = useState(false);
  const [currentPalette, setPalette] = useState(defaultPalette);
  const value = {
    comingFromOddsAndEnds,
    currentPalette,
    setComingFromOddsAndEnds,
    setPalette,
  };

  return (
    <AppContext.Provider value={ value }>
      { props.children }
    </AppContext.Provider>
  );
}

export default AppProvider;

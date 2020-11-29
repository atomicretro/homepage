import React, { useState } from 'react';
import AppContext from './app_context';

import palettes from '../utils/palettes';

const defaultPalette = palettes[0];

const AppProvider = (props) => {
  const [currentPalette, _setPalette] = useState(defaultPalette);

  const value = {
    currentPalette,
    _setPalette,
  };

  return (
    <AppContext.Provider value={ value }>
      { props.children }
    </AppContext.Provider>
  );
}

export default AppProvider;

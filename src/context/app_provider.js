import React, { createContext, useContext, useMemo, useState } from 'react';

import { palettes } from '../utils/palettes';

const defaultPalette = palettes.NIGHTSKY;

const AppContext = createContext();

export const AppProvider = (props) => {
  const [currentPalette, setPalette] = useState(defaultPalette);
  const [showContent, setShowContent] = useState(false);

  const tabIndex = useMemo(() => showContent ? '0' : '-1', [showContent]);

  const value = {
    currentPalette,
    setPalette,
    setShowContent,
    showContent,
    tabIndex,
  };

  return (
    <AppContext.Provider value={ value }>
      { props.children }
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('App context misconfigured');
  }

  return context;
};

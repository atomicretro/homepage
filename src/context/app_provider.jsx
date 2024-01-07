import React from 'react';

import { palettes } from '../utils/palettes';

const defaultPalette = palettes.NIGHTSKY;

const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [currentPalette, setPalette] = React.useState(defaultPalette);
  const [showContent, setShowContent] = React.useState(false);

  const tabIndex = React.useMemo(() => showContent ? '0' : '-1', [showContent]);

  const value = {
    currentPalette,
    setPalette,
    setShowContent,
    showContent,
    tabIndex,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('App context misconfigured');
  }

  return context;
};

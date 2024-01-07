import React, { createContext, useCallback, useContext, useState } from 'react';

import { palettes } from '../utils/palettes';
import { randomIntMinMax } from '../utils/math';

const PaletteContext = createContext(null);

const defaultPalette = palettes[0];

export const PaletteProvider = (props) => {
  const [currentPalette, setPalette] = useState(defaultPalette);

  const pickRandomPalette = useCallback(() => {
    const currentIdx = palettes.findIndex((el) => el === currentPalette);
    const duplicatedPalettes = [ ...palettes ];
    duplicatedPalettes.splice(currentIdx, 1);
    const nextIdx = randomIntMinMax(0, duplicatedPalettes.length);
    const nextPalette = duplicatedPalettes[nextIdx];
    setPalette(nextPalette);
  }, [currentPalette, setPalette]);

  const value = {
    currentPalette,
    palettes,
    pickRandomPalette,
    setPalette,
  };

  return (
    <PaletteContext.Provider value={ value }>
      { props.children }
    </PaletteContext.Provider>
  );
};

export const usePaletteContext = () => {
  const context = useContext(PaletteContext);
  if (!context) {
    throw new Error('Palette context misconfigured');
  }

  return context;
};

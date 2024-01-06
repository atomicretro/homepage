import React, { createContext, useContext, useState } from 'react';

import { palettes, paletteNames } from '../utils/palettes';
import { randomIntMinMax } from '../utils/math';

const PaletteContext = createContext(null);

const defaultPalette = palettes.NIGHTSKY;

export const PaletteProvider = (props) => {
  const [currentPalette, setPalette] = useState(defaultPalette);

  const pickRandomPalette = () => {
    const currentIdx = paletteNames.findIndex((el) => el === currentPalette);
    const duplicatedPalettes = [ ...paletteNames ];
    duplicatedPalettes.splice(currentIdx, 1);
    const nextIdx = randomIntMinMax(0, duplicatedPalettes.length);
    const nextPalette = duplicatedPalettes[nextIdx];
    setPalette(nextPalette);
  };

  const value = {
    currentPalette,
    ...currentPalette,
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

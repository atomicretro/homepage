import React, { createContext, useCallback, useContext, useState } from 'react';

import { palettes } from '../utils/palettes';
import { randomIntMinMax } from '../utils/math';

const PaletteContext = createContext(null);

const defaultPalette = palettes[0];
const paletteNames = palettes.map((palette) => palette.name);

export const PaletteProvider = (props) => {
  const [currentPalette, setPalette] = useState(defaultPalette);

  const setPaletteByName = useCallback((paletteName) => {
    setPalette(palettes[paletteName]);
  }, [setPalette]);

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
    ...currentPalette,
    palettes,
    paletteNames,
    pickRandomPalette,
    setPalette,
    setPaletteByName,
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

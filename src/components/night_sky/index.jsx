import React from 'react';

import { usePaletteContext } from '../../context/palette_provider';

import { Background } from './background';
import { StarField } from './stars';

export function NightSky() {
  const { currentPalette } = usePaletteContext();

  return (
    <>
      <Background currentPalette={currentPalette} />
      <StarField currentPalette={currentPalette} />
    </>
  );
}

export default NightSky;

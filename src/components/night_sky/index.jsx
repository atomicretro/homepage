import React from 'react';

import Background from './background';
import Stars from './stars';

const NightSky = React.memo(({ currentPalette, isCrazy }) => {
  return (
    <>
      <Background currentPalette={ currentPalette } />

      <Stars currentPalette={ currentPalette } isCrazy={ isCrazy } />
    </>
  );
});

export default NightSky;

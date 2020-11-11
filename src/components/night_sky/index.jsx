import React from 'react';

import Background from './background';
import Stars from './stars';

const NightSky = React.memo((props) => {
  const { currentPalette } = props;

  return (
    <>
      <Background currentPalette={ currentPalette } />
      <Stars currentPalette={ currentPalette } />
    </>
  );
});

export default NightSky;

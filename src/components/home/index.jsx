import React from 'react';

import PaletteCard from './palette_card';
import allPalettes from '../../utils/palettes';

import '../../css/home.css';

const Home = ({ isHidden, palette: currentPalette, _setPalette }) => {
  return (
    <div className='home'>
      <h2 className='home__title'>Paint the sky</h2>
      <div className='home__grid'>
        {
          allPalettes.map((palette) => (
            <PaletteCard
              isHidden={ isHidden }
              isSelected={ palette === currentPalette }
              key={ palette }
              palette={ palette }
              _setPalette={ _setPalette } />
          ))
        }
      </div>
    </div>
  );
}

export default Home;

// TO DO:
//  - touch event (onTouchEnd) not blurring button presses

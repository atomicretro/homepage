import React from 'react';

import PaletteCard from './palette_card';
import allPalettes from '../../utils/palettes';

import '../../css/home.css';

const midIdx = Math.ceil(allPalettes.length / 2);
const col1 = allPalettes.slice(0, midIdx);
const col2 = allPalettes.slice(midIdx, allPalettes.length);

const Home = ({ palette: currentPalette, _setPalette }) => {
  return (
    <div className='home'>
      <div className='home__col home__col--one'>
        {
          col1.map((palette) => (
            <PaletteCard
              isSelected={ palette === currentPalette }
              palette={ palette }
              _setPalette={ _setPalette } />
          ))
        }
      </div>
      <div className='home__col home__col--two'>
        {
          col2.map((palette) => (
            <PaletteCard
              isSelected={ palette === currentPalette }
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
//  - CONTACT

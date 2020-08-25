import React from 'react';

import PaletteCard from './palette_card';
import allPalettes from '../../utils/palettes';

import '../../css/home.css';

const firstIdx = Math.ceil(allPalettes.length / 3);
const secondIdx = firstIdx * 2;
const col1 = allPalettes.slice(0, firstIdx);
const col2 = allPalettes.slice(firstIdx, secondIdx);
const col3 = allPalettes.slice(secondIdx, allPalettes.length);

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
      <div className='home__col home__col--three'>
        {
          col3.map((palette) => (
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
// Above is DUMB ------- CAN PROBS DO ALL THAT EITH CSS GRID

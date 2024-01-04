import React from 'react';

import PaletteCard from './palette_card';
import allPalettes from '../../utils/palettes';

import '../../scss/home.css';

const Home = ({ isHidden, currentPalette, _setPalette }) => {
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
      <span className='home__acknowledgment'>
        Color palettes inspired by <a href='https://downwellgame.com/' rel='noopener noreferrer' tabIndex={ isHidden ? '-1' : '0' } target='_blank'>downwell</a>
      </span>
    </div>
  );
}

export default Home;

import React from 'react';

import allPalettes from '../../utils/palettes';

const Home = ({ palette, _setPalette }) => {
  return (
    <div className='home'>
      <select
        onChange={ (e) => { _setPalette(e.target.value); } }
        value={ palette }>
        { allPalettes.map((p) => <option key={ p } value={ p }>{ p }</option>) }
      </select>
    </div>
  );
}

export default Home;

// TO DO:
//  - touch event (onTouchEnd) not blurring button presses
//  - CONTACT
//  - what's in home? nothing?
//  - change sky color button?
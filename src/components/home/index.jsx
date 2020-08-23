import React from 'react';

const Home = () => {
  return (
    <div className='home'>
    </div>
  );
}

export default Home;

// TO DO:
//  - separate header and non-header background for performance?
//  - mobile
//  - keyboard press stargaze focus doesn't persist through animation (probs because display set to none)
//  - keyboard press pause stars from full screen unhides stuff
//  - make color change button? .night-sky--${color} .star { background: $color; }???
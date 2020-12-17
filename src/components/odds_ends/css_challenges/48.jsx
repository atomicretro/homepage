import React from 'react';

import '../../../scss/css_challenges/48.scss';

const Challenges48 = () => {
  return (
    <div className='css-challenges-48'>
      {
        [ ...Array(400).keys() ].map((idx) => (
          <div
            className={ `css-challenges-48__square css-challenges-48__square--${idx}` }
            key={ idx } />
        ))
      }
      <div className='css-challenges-48__monster' />
    </div>
  );
};

export default Challenges48;

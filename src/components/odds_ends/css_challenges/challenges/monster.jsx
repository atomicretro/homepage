import React from 'react';

import '../../../../scss/css_challenges/monster.css';

const Monster = () => {
  return (
    <div className='css-monster'>
      {
        [ ...Array(400).keys() ].map((idx) => (
          <div
            className={ `css-monster__square css-monster__square--${idx}` }
            key={ idx } />
        ))
      }
      <div className='css-monster__monster' />
    </div>
  );
};

export default Monster;

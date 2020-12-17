import React from 'react';

import '../../../scss/css_challenges/48.scss';

const Challenge48 = () => {
  return (
    <div className='css-challenge-48'>
      <div className='css-challenge-48__field'>
        {
          [ ...Array(400).keys() ].map((idx) => (
            <div
              className={ `css-challenge-48__field__square css-challenge-48__field__square--${idx}` }
              key={ idx } />
          ))
        }
        <div className='css-challenge-48__field__monster' />
      </div>
    </div>
  );
};

export default Challenge48;

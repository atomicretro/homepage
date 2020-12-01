import React, { useEffect } from 'react';

import '../../../scss/css_challenges/59.scss';

const Challenge59 = () => {
  useEffect(() => {
    return () => {
      console.clear();
    };
  });

  return (
    <div className='css-challenge-59'>
      <div className='css-challenge-59__field'>
        {
          [ ...Array(200).keys() ].map((idx) => (
            <div
              className={ `css-challenge-59__field__slice css-challenge-59__field__slice--${idx + 1}` }
              key={ idx }
              onMouseUp={ (e) => { e.target.blur(); } }
              tabIndex='0' />
          ))
        }
        <div className='css-challenge-59__field__overlay' />
        <span className='css-challenge-59__field__text css-challenge-59__field__text--one'>HOVER</span>
        <span className='css-challenge-59__field__text css-challenge-59__field__text--two'>HOVER</span>
      </div>
    </div>
  );
};

export default Challenge59;
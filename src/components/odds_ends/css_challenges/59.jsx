import React from 'react';

import '../../../scss/css_challenges/59.scss';

const Challenges59 = () => {
  return (
    <div className='css-challenges-59'>
      {
        [ ...Array(200).keys() ].map((idx) => (
          <div
            className={ `css-challenges-59__slice css-challenges-59__slice--${idx + 1}` }
            key={ idx }
            onMouseUp={ (e) => { e.target.blur(); } }
            tabIndex='0' />
        ))
      }
      <div className='css-challenges-59__overlay' />
      <span className='css-challenges-59__text css-challenges-59__text--one'>HOVER</span>
      <span className='css-challenges-59__text css-challenges-59__text--two'>HOVER</span>
    </div>
  );
};

export default Challenges59;
import React from 'react';

import '../../../scss/css_challenges/hover.css';

const Hover = () => {
  return (
    <div className='css-hover'>
      {
        [ ...Array(200).keys() ].map((idx) => (
          <div
            className={ `css-hover__slice css-hover__slice--${idx + 1}` }
            key={ idx }
            onMouseUp={ (e) => { e.target.blur(); } }
            tabIndex='0' />
        ))
      }
      <div className='css-hover__overlay' />
      <span className='css-hover__text css-hover__text--one'>HOVER</span>
      <span className='css-hover__text css-hover__text--two'>HOVER</span>
    </div>
  );
};

export default Hover;

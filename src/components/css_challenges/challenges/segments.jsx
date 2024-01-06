import React from 'react';

import '../../../scss/css_challenges/segments.css';

const Segments = () => {
  return (
    <div className='css-segments'>
      <div
        className='css-segments__box css-segments__dark'
        onMouseUp={ (e) => { e.target.blur(); } }
        tabIndex='0'>
        <span>FIRST</span>
      </div>
      <div
        className='css-segments__box css-segments__light'
        onMouseUp={ (e) => { e.target.blur(); } }
        tabIndex='0'>
        <span>SECOND</span>
      </div>
      <div
        className='css-segments__box css-segments__dark'
        onMouseUp={ (e) => { e.target.blur(); } }
        tabIndex='0'>
        <span>THIRD</span>
      </div>
      <div
        className='css-segments__box css-segments__light'
        onMouseUp={ (e) => { e.target.blur(); } }
        tabIndex='0'>
        <span>FOURTH</span>
      </div>
    </div>
  );
};

export default Segments;

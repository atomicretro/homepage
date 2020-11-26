import React from 'react';

import '../../../scss/css_challenges/79.scss';

const Experiment79 = () => {
  return (
    <div className='css-challenge-79'>
      <div
        className='css-challenge-79__box css-challenge-79__dark'
        onMouseUp={ (e) => { e.target.blur(); } }
        tabIndex='0'>
        <span>FIRST</span>
      </div>
      <div
        className='css-challenge-79__box css-challenge-79__light'
        onMouseUp={ (e) => { e.target.blur(); } }
        tabIndex='0'>
        <span>SECOND</span>
      </div>
      <div
        className='css-challenge-79__box css-challenge-79__dark'
        onMouseUp={ (e) => { e.target.blur(); } }
        tabIndex='0'>
        <span>THIRD</span>
      </div>
      <div
        className='css-challenge-79__box css-challenge-79__light'
        onMouseUp={ (e) => { e.target.blur(); } }
        tabIndex='0'>
        <span>FOURTH</span>
      </div>
    </div>
  );
};

export default Experiment79;

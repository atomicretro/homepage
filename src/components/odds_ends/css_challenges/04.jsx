import React from 'react';
import classNames from 'classnames';

import '../../../scss/css_challenges/04.scss';

const Challenges04 = ({ showExplanation }) => {
  const className = classNames('css-challenges-04', {
    'css-challenges-04--blur': showExplanation,
  });

  return (
    <div className={ className }>
      <div className='css-challenges-04__circle css-challenges-04__circle--1' />
      <div className='css-challenges-04__circle css-challenges-04__circle--2' />
      <div className='css-challenges-04__circle css-challenges-04__circle--3' />
    </div>
  );
};

export default Challenges04;

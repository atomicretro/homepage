import React from 'react';
import classNames from 'classnames';

import '../../../../scss/css_challenges/05.scss';

const Challenges05 = ({ showExplanation }) => {
  const className = classNames('css-challenges-05', {
    'css-challenges-05--blur': showExplanation,
  });

  return (
    <div className={ className }>
      <div className='css-challenges-05__circle css-challenges-05__circle--1' />
      <div className='css-challenges-05__circle css-challenges-05__circle--2' />
      <div className='css-challenges-05__circle css-challenges-05__circle--3' />
    </div>
  );
};

export default Challenges05;

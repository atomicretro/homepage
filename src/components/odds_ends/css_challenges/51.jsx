import React from 'react';
import classNames from 'classnames';

import '../../../scss/css_challenges/51.scss';

const NumbersRibbon = ({ position }) => {
  const className = classNames(
    'css-challenges-51__display__numbers',
    `css-challenges-51__display__numbers__${position}`
  );

  return (
    <div className={ className }>
      <span>0</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
    </div>
  );
};

const Challenges51 = ({ showExplanation }) => {
  const className = classNames('css-challenges-51', {
    'css-challenges-51--blur': showExplanation,
  });

  return (
    <div className={ className }>
      <input
        className='css-challenges-51__pause'
        type='checkbox' />
      <div className='css-challenges-51__display'>
        <NumbersRibbon position='thousands' />
        <NumbersRibbon position='hundreds' />
        <NumbersRibbon position='tens' />
        <NumbersRibbon position='ones' />
      </div>
    </div>
  );
};

export default Challenges51;

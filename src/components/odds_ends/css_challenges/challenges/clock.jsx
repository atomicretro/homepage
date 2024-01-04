import React from 'react';
import classNames from 'classnames';

import '../../../../scss/css_challenges/clock.css';

const NumbersRibbon = ({ position }) => {
  const className = classNames(
    'css-clock__display__numbers',
    `css-clock__display__numbers__${position}`
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

const Clock = () => {
  return (
    <div className='css-clock'>
      <input
        className='css-clock__input'
        type='checkbox' />
      <div className='css-clock__pause' />
      <div className='css-clock__play' />
      <div className='css-clock__display'>
        <NumbersRibbon position='thousands' />
        <NumbersRibbon position='hundreds' />
        <NumbersRibbon position='tens' />
        <NumbersRibbon position='ones' />
      </div>
    </div>
  );
};

export default Clock;

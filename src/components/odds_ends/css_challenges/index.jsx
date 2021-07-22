import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import Challenges from './challenges';
import * as Explanations from './explanations';

import '../../../scss/css_challenges/index.scss';

const explanationSwitcher = (challengeName, className) => {
  try {
    const capitalized = challengeName.slice(0, 1).toUpperCase() + challengeName.slice(1);
    return Explanations[`Explanation${capitalized}`]({ className });
  } catch (err) {
    return null;
  }
}

const CSSChallenges = () => {
  const [showExplanation, toggleExplanation] = useState(false);
  const location = useLocation();

  const submissionClass = classNames('css-challenges__submission', {
    'css-challenges__submission--blur': showExplanation,
  });

  const pathArray = (location.pathname || '').split('/');
  const challengeName = pathArray[pathArray.length - 1];
  const explanationClass = classNames(
    'css-challenges__explanation-text',
    `css-challenges__explanation-text--${challengeName}`,
    {
      'css-challenges__explanation-text--hide': !showExplanation,
    },
  );

  return (
    <div className='css-challenges'>
      <Link
        className='css-challenges__return-link'
        to='/odds-and-ends'>
        Go back
      </Link>

      <div className={ submissionClass }>
        <Challenges />
      </div>

      <button
        className='css-challenges__explanation-button'
        onClick={ () => { toggleExplanation(!showExplanation); } }
        onMouseUp={ (e) => { e.target.blur(); } }>
        { showExplanation ? 'Hide' : 'See' } Explanation
      </button>

      { explanationSwitcher(challengeName, explanationClass) }
    </div>
  );
};

export default CSSChallenges;

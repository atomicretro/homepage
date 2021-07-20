import React, { useState } from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import '../../../scss/css_challenges/index.scss';

import Challenges05 from './05';
import Challenges46 from './46';
import Challenges48 from './48';
import Challenges51 from './51';
import Challenges59 from './59';
import Challenges79 from './79';

import * as Explanations from './explanations';

const explanationSwitcher = (challengeNumber, className) => {
  try {
    return Explanations[`Explanation${challengeNumber}`]({ className });
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
  const challengeNumber = pathArray[pathArray.length - 1];
  const explanationClass = classNames(
    'css-challenges__explanation-text',
    `css-challenges__explanation-text--${challengeNumber}`,
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
        <Switch>
          <Route path='/css/05' component={ Challenges05 } />
          <Route path='/css/46' component={ Challenges46 } />
          <Route path='/css/48' component={ Challenges48 } />
          <Route path='/css/51' component={ Challenges51 } />
          <Route path='/css/59' component={ Challenges59 } />
          <Route path='/css/79' component={ Challenges79 } />
        </Switch>
      </div>

      <button
        className='css-challenges__explanation-button'
        onClick={ () => { toggleExplanation(!showExplanation); } }
        onMouseUp={ (e) => { e.target.blur(); } }>
        { showExplanation ? 'Hide' : 'See' } Explanation
      </button>

      { explanationSwitcher(challengeNumber, explanationClass) }
    </div>
  );
};

export default CSSChallenges;

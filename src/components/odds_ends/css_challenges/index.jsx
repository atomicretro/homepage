import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

import '../../../scss/css_challenges/index.scss';

import Challenge46 from './46';
import Challenge48 from './48';
import Challenge59 from './59';
import Challenge79 from './79';

const CSSChallenges = (props) => {
  const [showExplanation, toggleExplanation] = useState(false);
  const explanationClass = classNames('css-challenge__explanation-text', {
    'css-challenge__explanation-text--hide': !showExplanation,
  });

  return (
    <div className='css-challenge'>
      <Link
        className='css-challenge__return-link'
        to='/odds-and-ends'>
        Go back
      </Link>

      <Switch>
        <Route path='/css/46' component={ Challenge46 } />
        <Route path='/css/48' component={ Challenge48 } />
        <Route path='/css/59' component={ Challenge59 } />
        <Route path='/css/79' component={ Challenge79 } />
      </Switch>
      
      <button
        className='css-challenge__explanation-button'
        onClick={ () => { toggleExplanation(!showExplanation); } }
        onMouseUp={ (e) => { e.target.blur(); } }>
        Explanation
      </button>
      <div className={ explanationClass }>
        hi
      </div>
    </div>
  );
};

export default CSSChallenges;

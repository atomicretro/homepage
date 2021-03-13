import React, { useState } from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import '../../../scss/css_challenges/index.scss';

import Challenges04 from './04';
import Challenges46 from './46';
import Challenges48 from './48';
import Challenges59 from './59';
import Challenges79 from './79';

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
          <Route path='/css/04' component={ Challenges04 } />
          <Route path='/css/46' component={ Challenges46 } />
          <Route path='/css/48' component={ Challenges48 } />
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

const explanationSwitcher = (challengeNumber, className) => {
  switch (challengeNumber) {
    case '46' :
      return (
        <div className={ className }>
          <p>At first I had no idea how I was going to complete this challenge, and walked away from it to do other things. Hours later, thinking about something else entirely, it hit me: "they're all checkboxes!"</p>
          <p>Once I realized that, writing the code was straightforward. I used JS to create the series of checkboxes, but then used vanilla CSS to arrange them and style them into pixels.</p>
          <p>The default image was brute-forced by figuring out which pixels are white in the demo template, and simply marking them "unchecked" as they are generated. It's low-tech, but since the default image is static I don't mind cheesing it a bit.</p>
          <p><a href='https://100dayscss.com/?dayIndex=46' rel='noopener noreferrer' target='_blank'>To the challenge!</a></p>
        </div>
      );
    case '48':
      return (
        <div className={ className }>
          <p>This task was actually a lot simplier than I thought it would be.</p>
          <p>I racked my brain for a while trying to figure out how to pass the cursor position to the chasing circle. Eventually I decided to break the field into a grid of squares, then use SCSS and math to loop through the grid and reverse engineer the coordinate positioning of each square.</p>
          <p>I thought this was cheating, but after looking at how the demo template was created I saw it was done in almost exactly the same way. So... if it is cheating, then teacher cheated too :D</p>
          <p>The only JS used is to create the grid. All positioning data is calculated in SCSS from the index number of each square.</p>
          <p><a href='https://100dayscss.com/?dayIndex=48' rel='noopener noreferrer' target='_blank'>To the challenge!</a></p>
        </div>
      );
    case '59':
      return (
        <div className={ className }>
          <p>After going through some other challenges I've picked up on how to handle pure CSS interactivity.</p>
          <p>The background is a series of horizontal grey slivers which, when hovered, increase the height of the foreground orange overlay. The slivers are created with JS, but that's the only JS used. Each sliver gets an index number, and the height of the orange overlay is simply a multiple of whichever sliver is being hovered at the moment.</p>
          <p>To achieve the blur effect on the text I've stacked two spans on top of each other with different z-indices. The higher z-index text has a blur filter while the lower text does not. The order goes: grey background, non-blurred text, orange overlay, blurred text. This causes the non-blurred text to get hidden by the orange layer, leaving only the blurred effect.</p>
          <p><a href='https://100dayscss.com/?dayIndex=59' rel='noopener noreferrer' target='_blank'>To the challenge!</a></p>
        </div>
      );
    case '79':
      return (
        <div className={ className }>
          <p>I completed this challenge using flexbox and height / width manipulation on CSS events. Flexbox keeps the colored boxes organized and in place while :focus and :hover events increase the hovered box's dimensions.</p>
          <p>The animations are done entirely in CSS; the only JS used is to blur a box on mouse up to ensure wayward clicks don't cause two boxes to expand at once.</p>
          <p>The animations are fully responsive and work with both mouse and keyboard.</p>
          <p><a href='https://100dayscss.com/?dayIndex=79' rel='noopener noreferrer' target='_blank'>To the challenge!</a></p>
        </div>
      );
    default:
      return null;
  }
}

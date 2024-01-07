import React from 'react';

const Explanation = ({ className }) => {
  return (
    <div className={ className }>
      <p>Believe it or not, it was the pause button in this challenge that gave me the least amount of trouble. Once I figured out how to get the clock working pausing the animation was super straight forward.</p>
      <p>But I'm getting ahead of myself! The counter works kind of like an old school flip clock: each digit is actually an absolutely positioned column of the numbers 0–9. The "counting" is simply each column ticking up one place independently of each other. This was accomplished with a CSS animation that changes the vertical positioning of each column. Once a column gets to the number 9, its animation resets. The speed of each column is controlled through its animation's duration.</p>
      <p>To get the pause effect working I turned back to our good friend the checkbox. When you click on the pause button what you're actually doing is filling in an empty checkbox. Using the checkbox's :checked pseudo class and the CSS general sibling combinator I was able to set each column's animation-play-state to paused when the checkbox is checked.</p>
      <p><a href='https://100dayscss.com/days/51/' rel='noopener noreferrer' target='_blank'>To the challenge!</a></p>
    </div>
  );
};

export default Explanation;

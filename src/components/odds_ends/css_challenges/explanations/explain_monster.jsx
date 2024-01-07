import React from 'react';

const Explanation = ({ className }) => {
  return (
    <div className={ className }>
      <p>This task was actually a lot simplier than I thought it would be.</p>
      <p>I racked my brain for a while trying to figure out how to pass the cursor position to the chasing circle. Eventually I decided to break the field into a grid of squares, then use SCSS and math to loop through the grid and reverse engineer the coordinate positioning of each square.</p>
      <p>I thought this was cheating, but after looking at how the demo template was created I saw it was done in almost exactly the same way. So... if it is cheating, then teacher cheated too :D</p>
      <p>The only JS used is to create the grid. All positioning data is calculated in SCSS from the index number of each square.</p>
      <p><a href='https://100dayscss.com/days/49' rel='noopener noreferrer' target='_blank'>To the challenge!</a></p>
    </div>
  );
};

export default Explanation;

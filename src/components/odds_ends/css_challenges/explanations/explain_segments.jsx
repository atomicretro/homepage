import React from 'react';

const Explanation = ({ className }) => {
  return (
    <div className={ className }>
      <p>I completed this challenge using flexbox and height manipulation on CSS events. Flexbox keeps the colored boxes organized and in place while :focus and :hover events increase the hovered box's dimensions.</p>
      <p>The animations are done entirely in CSS; the only JS used is to blur a box on mouse up to ensure wayward clicks don't cause two boxes to expand at once.</p>
      <p>The animations are fully responsive and work with both mouse and keyboard.</p>
      <p><a href='https://100dayscss.com/days/80' rel='noopener noreferrer' target='_blank'>To the challenge!</a></p>
    </div>
  );
};

export default Explanation;

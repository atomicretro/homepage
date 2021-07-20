import React from 'react';

const Explanation = ({ className }) => {
  return (
    <div className={ className }>
      <p>After going through some other challenges I've picked up on how to handle pure CSS interactivity.</p>
      <p>The background is a series of horizontal grey slivers which, when hovered, increase the height of the foreground orange overlay. The slivers are created with JS, but that's the only JS used. Each sliver gets an index number, and the height of the orange overlay is simply a multiple of whichever sliver is being hovered at the moment.</p>
      <p>To achieve the blur effect on the text I've stacked two spans on top of each other with different z-indices. The higher z-index text has a blur filter while the lower text does not. The order goes: grey background, non-blurred text, orange overlay, blurred text. This causes the non-blurred text to get hidden by the orange layer, leaving only the blurred effect.</p>
      <p><a href='https://100dayscss.com/days/60' rel='noopener noreferrer' target='_blank'>To the challenge!</a></p>
    </div>
  );
};

export default Explanation;

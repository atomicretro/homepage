import React from 'react';

const Explanation = ({ className }) => {
  return (
    <div className={ className }>
      <p>At first I had no idea how I was going to complete this challenge, and walked away from it to do other things. Hours later, thinking about something else entirely, it hit me: "they're all checkboxes!"</p>
      <p>Once I realized that, writing the code was straightforward. I used JS to create the series of checkboxes, but then used vanilla CSS to arrange them and style them into pixels.</p>
      <p>The default image was brute-forced by figuring out which pixels are white in the demo template, and simply marking them "unchecked" as they are generated. It's low-tech, but since the default image is static I don't mind cheesing it a bit.</p>
      <p><a href='https://100dayscss.com/days/47' rel='noopener noreferrer' target='_blank'>To the challenge!</a></p>
    </div>
  );
};

export default Explanation;

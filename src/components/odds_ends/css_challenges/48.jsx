import React, { useEffect } from 'react';

import '../../../scss/css_challenges/48.scss';

const Challenge48 = () => {
  useEffect(() => {
    console.log('Oh hello!');
    console.log('This task was actually a lot simplier than I thought it would be.');
    console.log('I racked my brain for a while trying to figure out how to pass the cursor position to the chasing circle. Eventually I decided to break the field into a grid of squares, then use SCSS and math to loop through the grid and reverse engineer the coordinate positioning of each square.');
    console.log('I thought this was cheating, but after looking at how the demo template was created I saw it was done in almost exactly the same way. So... if it is cheating, then teacher cheated too :D');
    console.log('The only JS used is to create the grid. All positioning data is calculated in SCSS from the index number of each square.')
    console.log('If you like what you see check out my other work at https://www.aleccuccia.dev!');
    console.log('Challenge: https://100dayscss.com/?dayIndex=48');
  }, []);

  useEffect(() => {
    return () => {
      console.clear();
    };
  });

  return (
    <div className='css-challenge-48'>
      <div className='css-challenge-48__field'>
        {
          [ ...Array(400).keys() ].map((idx) => (
            <div
              className={ `css-challenge-48__field__square css-challenge-48__field__square--${idx}` }
              key={ idx } />
          ))
        }
        <div className='css-challenge-48__field__monster' />
      </div>
    </div>
  );
};

export default Challenge48;

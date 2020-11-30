import React, { useEffect } from 'react';

import '../../../scss/css_challenges/46.scss';

const unchecked = {
  129: true,    186: true,    212: true,
  130: true,    187: true,    213: true,
  148: true,    189: true,    228: true,
  149: true,    190: true,    231: true,
  150: true,    192: true,    247: true,
  151: true,    193: true,    249: true,
  167: true,    206: true,    250: true,
  168: true,    207: true,    252: true,
  169: true,    208: true,    266: true,
  170: true,    209: true,    268: true,
  171: true,    210: true,    271: true,
  172: true,    211: true,    273: true,
};

const Challenge46 = () => {
  useEffect(() => {
    console.log('Oh hello!');
    console.log('At first I had no idea how I was going to complete this challenge, and walked away from it to do other things. Hours later, thinking about something else entirely, it hit me: "they\'re all checkboxes!"');
    console.log('Once I realized that, writing the code was straightforward. I used JS to create the series of checkboxes, but then used vanilla CSS to arrange them and style them into pixels.');
    console.log('The default image was brute-forced by figuring out which pixels are white in the demo template, and simply marking them "unchecked" as they are generated. It\'s low-tech, but since the default image is static I don\'t mind cheesing it a bit.');
    console.log('If you like what you see check out my other work at https://www.aleccuccia.dev!');
    console.log('Challenge: https://100dayscss.com/?dayIndex=46');
  }, []);

  useEffect(() => {
    return () => {
      console.clear();
    };
  });

  return (
    <div className='css-challenge-46'>
      <div className='css-challenge-46__field'>
        {
          [ ...Array(400).keys() ].map((idx) => (
            <input
              className='pixel'
              defaultChecked={ !unchecked[idx] }
              key={ idx }
              onMouseUp={ (e) => { e.target.blur(); } }
              type='checkbox' />
          ))
        }
      </div>
    </div>
  );
};

export default Challenge46;

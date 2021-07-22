import React from 'react';

import '../../../../scss/css_challenges/alien.scss';

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

const Alien = () => {
  return (
    <div className='css-alien'>
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
  );
};

export default Alien;

import React from 'react';
import classNames from 'classnames';

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

const Challenge46 = ({ showExplanation }) => {
  const fieldClass = classNames('css-challenge-46__field', {
    'css-challenge-46__field--blur': showExplanation,
  });

  return (
    <div className='css-challenge-46'>
      <div className={ fieldClass }>
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

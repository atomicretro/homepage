import React from 'react';
import { Link } from 'react-router-dom';

import '../../scss/odds-ends.scss';

const OddsAndEnds = ({ isHidden }) => {
  const tabIndex = isHidden ? '-1' : '0';

  return (
    <div className='odds-ends'>
      <div className='odds-ends__column'>
        <h2 className='odds-ends__column__header'>CSS Challenges</h2>
        <span className='odds-ends__column__desc'>From <a href='https://100dayscss.com/'>100 Days CSS challenge</a></span>
        <Link tabIndex={ tabIndex } to='/css/79'>79</Link>
      </div>
    </div>
  );
}

export default OddsAndEnds;

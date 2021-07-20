import React from 'react';
import { Link } from 'react-router-dom';

import '../../scss/odds-ends.scss';

const OddsAndEnds = ({ isHidden }) => {
  const tabIndex = isHidden ? '-1' : '0';

  return (
    <div className='odds-ends'>
      <div className='odds-ends__column'>
        <h2 className='odds-ends__column__header'>CSS Challenges</h2>
        <span className='odds-ends__column__link'>
          From <a href='https://100dayscss.com/' rel='noopener noreferrer' target='_blank'>100 Days CSS Challenge</a>
        </span>
        { /* <Link tabIndex={ tabIndex } to='/css/05'>05</Link> */ }
        <Link tabIndex={ tabIndex } to='/css/46'>46</Link>
        <Link tabIndex={ tabIndex } to='/css/48'>48</Link>
        <Link tabIndex={ tabIndex } to='/css/51'>51</Link>
        <Link tabIndex={ tabIndex } to='/css/59'>59</Link>
        <Link tabIndex={ tabIndex } to='/css/79'>79</Link>
      </div>
    </div>
  );
}

export default OddsAndEnds;

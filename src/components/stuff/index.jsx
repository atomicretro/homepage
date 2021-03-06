import React from 'react';
import classNames from 'classnames';

import Header from './header';
import Display from './display';
import Navbar from './navbar';

import '../../scss/stuff.scss';

const Stuff = ({ isHidden, palette, _setIsHidden, _setPalette }) => {
  const stuffClass = classNames('stuff', {
    'stuff--hidden': isHidden,
  });

  return(
    <section className={ stuffClass }>
      <Header isHidden={ isHidden } _setIsHidden={ _setIsHidden } />
      <Navbar isHidden={ isHidden } palette={ palette } _setIsHidden={ _setIsHidden } />
      <Display isHidden={ isHidden } palette={ palette } _setPalette={ _setPalette } />
    </section>
  );
}

export default Stuff;

import React from 'react';
import classNames from 'classnames';

import Header from './header';
import Display from './display';
import Navbar from './navbar';

import '../../css/content.css';

const Stuff = ({ isHidden, _setIsHidden }) => {
  const stuffClass = classNames('stuff', {
    'stuff--hidden': isHidden,
  });

  return(
    <section className={ stuffClass }>
      <Header />
      <Navbar isHidden={ isHidden } _setIsHidden={ _setIsHidden } />
      <Display />
    </section>
  );
}

export default Stuff;

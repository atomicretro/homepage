import React from 'react';
import classNames from 'classnames';

import Header from './header';
import Display from './display';
import Navbar from './navbar';

import '../../css/content.css';

const Stuff = ({ isHidden, setIsHidden }) => {
  const stuffClass = classNames('stuff', {
    'stuff--hidden': isHidden,
  });

  return(
    <section className={ stuffClass }>
      <Header />
      <Navbar isHidden={ isHidden } setIsHidden={ setIsHidden } />
      <Display />
    </section>
  );
}

export default Stuff;

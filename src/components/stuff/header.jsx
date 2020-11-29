import React from 'react';

const Header = ({ isHidden, _setIsHidden }) => {
  return(
    <header
      className='header'
      onClick={ (e) => {
        e.stopPropagation();
        _setIsHidden(!isHidden);
      } }>
      <h1 className='header__title'>Alec Cuccia</h1>
    </header>
  );
}

export default Header;

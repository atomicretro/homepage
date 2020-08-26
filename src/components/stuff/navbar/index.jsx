import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Navbar = ({ isHidden, palette, _setIsHidden }) => {
  const handleMouseUp = (e) => {
    e.currentTarget.blur();
  }

  const tabIndex = isHidden ? '-1' : '0';
  const stargazeClass = classNames(
    'button-no-style',
    `button-stargaze--${palette}`,
  );

  return (
    <nav className={ `navbar navbar--${palette}` } >
      <Link tabIndex={ tabIndex } to='/' onMouseUp={ handleMouseUp }>Home</Link>
      <Link tabIndex={ tabIndex } to='/projects' onMouseUp={ handleMouseUp }>Projects</Link>
      <Link tabIndex={ tabIndex } to='/contact' onMouseUp={ handleMouseUp }>Contact</Link>
      <button
        className={ stargazeClass }
        onClick={ (e) => { e.stopPropagation(); _setIsHidden(!isHidden); } }
        onMouseUp={ handleMouseUp }
        tabIndex={ tabIndex }>
        Stargaze
      </button>
    </nav>
  );
}

export default Navbar;

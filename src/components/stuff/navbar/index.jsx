import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Navbar = ({ isHidden, palette, _setIsHidden }) => {
  const handleMouseUp = (e) => { e.currentTarget.blur(); }
  const stargazeClass = classNames(
    'button-no-style',
    `button-stargaze--${palette}`,
  );

  return (
    <nav className='navbar' >
      <Link to='/' onMouseUp={ handleMouseUp }>Home</Link>
      <Link to='/projects' onMouseUp={ handleMouseUp }>Projects</Link>
      <Link to='/contact' onMouseUp={ handleMouseUp }>Contact</Link>
      <button
        className={ stargazeClass }
        onClick={ (e) => { e.stopPropagation(); _setIsHidden(!isHidden); } }
        onMouseUp={ handleMouseUp }>
        Stargaze
      </button>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isHidden, _setIsHidden }) => {
  const handleMouseUp = (e) => { e.currentTarget.blur(); }

  return (
    <nav className='navbar' >
      <Link to='/' onMouseUp={ handleMouseUp }>Home</Link>
      <Link to='/projects' onMouseUp={ handleMouseUp }>Projects</Link>
      <Link to='/contact' onMouseUp={ handleMouseUp }>Contact</Link>
      <button
        className='button-no-style button-fake-link button-stargaze'
        onClick={ (e) => { e.stopPropagation(); _setIsHidden(!isHidden); } }
        onMouseUp={ handleMouseUp }>
        Stargaze
      </button>
    </nav>
  );
}

export default Navbar;

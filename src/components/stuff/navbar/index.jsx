import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setIsHidden }) => {
  return(
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/resume'>Resume</Link>
      <button
        className='button-no-style button-fake-link'
        onClick={ (e) => { e.stopPropagation(); setIsHidden(true); } }>
        Stargaze
      </button>
    </nav>
  );
}

export default Navbar;

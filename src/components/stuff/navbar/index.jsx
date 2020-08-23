import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isHidden, setIsHidden }) => {
  return(
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
      <a download='alec-cuccia-resume.pdf' href='/alec-cuccia-resume.pdf'>Resume</a>
      <button
        className='button-no-style button-fake-link'
        onClick={ (e) => { e.stopPropagation(); setIsHidden(!isHidden); } }
        onMouseUp={ (e) => { e.currentTarget.blur(); } }>
        Stargaze
      </button>
    </nav>
  );
}

export default Navbar;

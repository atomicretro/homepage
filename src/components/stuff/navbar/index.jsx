import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isHidden, setIsHidden }) => {
  const handleMouseUp = (e) => { e.currentTarget.blur(); }

  return(
    <nav className='navbar'>
      <Link to='/' onMouseUp={ handleMouseUp }>Home</Link>
      <Link to='/projects' onMouseUp={ handleMouseUp }>Projects</Link>
      <Link to='/contact' onMouseUp={ handleMouseUp }>Contact</Link>
      <a download='alec-cuccia-resume.pdf' href='/alec-cuccia-resume.pdf' onMouseUp={ handleMouseUp }>Resume</a>
      <button
        className='button-no-style button-fake-link'
        onClick={ (e) => { e.stopPropagation(); setIsHidden(!isHidden); } }
        onMouseUp={ handleMouseUp }>
        Stargaze
      </button>
    </nav>
  );
}

export default Navbar;

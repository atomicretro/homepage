import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isHidden, palette, _setIsHidden }) => {
  const handleMouseUp = (e) => {
    e.currentTarget.blur();
  }

  const tabIndex = isHidden ? '-1' : '0';

  return (
    <nav className={ `navbar navbar--${palette}` } >
    <span>
      <Link tabIndex={ tabIndex } to='/' onMouseUp={ handleMouseUp }>Home</Link>
      <Link tabIndex={ tabIndex } to='/projects' onMouseUp={ handleMouseUp }>Projects</Link>
      <Link tabIndex={ tabIndex } to='/odds-and-ends' onMouseUp={ handleMouseUp }>Odds And Ends</Link>
      <Link tabIndex={ tabIndex } to='/contact' onMouseUp={ handleMouseUp }>Contact</Link>
      <button
        className={ `button-stargaze button-stargaze--${palette}` }
        onClick={ (e) => { e.stopPropagation(); _setIsHidden(!isHidden); } }
        onMouseUp={ handleMouseUp }
        tabIndex={ tabIndex }>
        Stargaze
      </button>
      </span>
    </nav>
  );
}

export default Navbar;

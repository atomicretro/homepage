import React from 'react';

const PaletteCard = ({ isSelected, palette, _setPalette }) => {
  return (
    <button
      className={ `button-no-style palette_card palette_card--${palette}` }
      onClick={ (e) => { e.stopPropagation(); _setPalette(palette); } }
      onKeyDown={ (e) => { e.stopPropagation(); } }
      onMouseUp={ (e) => { e.currentTarget.blur(); } }>
      <img alt={ palette } className='palette_card__img' src={ `/palettes/${palette}.png` } />
      <span className='palette_card__desc'>{ palette }</span>
    </button>
  );
}

export default PaletteCard;

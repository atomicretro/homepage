import React from 'react';
import classNames from 'classnames';

const PaletteCard = ({ isHidden, isSelected, palette, _setPalette }) => {
  const paletteClass = classNames(`palette_card palette_card--${palette}`, {
    'palette_card--selected': isSelected,
  });

  return (
    <button
      className={ paletteClass }
      onClick={ (e) => { e.stopPropagation(); _setPalette(palette); } }
      onKeyDown={ (e) => { e.stopPropagation(); } }
      onMouseUp={ (e) => { e.currentTarget.blur(); } }
      tabIndex={ isHidden ? '-1' : '0' }>
      <img alt={ palette } className='palette_card__img' src={ `${process.env.PUBLIC_URL}/palettes/${palette}.png` } />
      <span className='palette_card__desc'>{ palette }</span>
    </button>
  );
}

export default PaletteCard;

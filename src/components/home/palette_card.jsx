import React from 'react';
import styled from 'styled-components';

import { usePaletteContext } from '../../context/palette_provider';
import { useAppContext } from '../../context/app_provider';

import { DefaultButton } from '../library/buttons/default';

const StyledPaletteCard = styled(DefaultButton)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ $colors, $selected }) => $selected ? $colors.linksActive : '#000000'};

  &:focus, &:hover {
    color: ${({ $colors }) => $colors.linksActive};
  }

  img {
    max-height: 50px;
    max-width: 50px;
    margin: 0 10px 0 0;
  }

  span {
    font-size: 24px;
  }
`;

export function PaletteCard(props) {
  const { palette } = props;
  const { tabIndex } = useAppContext();
  const { currentPalette, setPalette } = usePaletteContext();

  const handleClick = React.useCallback((e) => {
    e.stopPropagation();
    setPalette(palette);
  }, [palette, setPalette]);

  return (
    <StyledPaletteCard
      onClick={handleClick}
      onKeyDown={(e) => e.stopPropagation()}
      onMouseUp={(e) => e.currentTarget.blur()}
      tabIndex={tabIndex}
      $colors={palette}
      $selected={palette.name === currentPalette.name}
    >
      <img
        alt={palette.name}
        src={`${process.env.PUBLIC_URL}/palettes/${palette.name}.png`}
      />
      <span>{palette.name}</span>
    </StyledPaletteCard>
  );
}

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
  color: ${({ $colors, $selected }) => $selected ? $colors.linkInteraction : '#000000'};

  &:focus, &:hover {
    color: ${({ $colors }) => $colors.linkInteraction};
  }

  .swatch {
    height: 50px;
    width: 50px;
    display: flex;
    flex-direction: column;
    margin: 0 10px 0 0;

    div {
      height: 50%;
      width: 100%;
    }
    .primary {
      background-color: ${({ $colors }) => $colors.primary};
    }
    .secondary {
      background-color: ${({ $colors }) => $colors.secondary};
    }
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
      <div className='swatch'>
        <div className='primary' />
        <div className='secondary' />
      </div>
      <span>{palette.name}</span>
    </StyledPaletteCard>
  );
}

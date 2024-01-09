import React from 'react';
import styled from 'styled-components';

import { usePaletteContext } from '../../../context/palette_provider';

import { DefaultButton } from './default';

const StyledMainButton = styled(DefaultButton)`
  position: absolute;
  top: 10px;
  color: #ffffff;
  font-size: 16px;
  z-index: 100;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;

  ${({ $hidden }) => $hidden && `
    opacity: 0;
    pointer-events: none;
  `}

  &:focus, &:hover {
    color: ${({ $colors }) => $colors.secondary};
  }
`;

export function MainButton(props) {
  const { children, className, onClick, tabIndex } = props;
  const { currentPalette } = usePaletteContext();

  return (
    <StyledMainButton
      className={className}
      onMouseUp={(e) => e.currentTarget.blur()}
      onClick={onClick || null}
      tabIndex={tabIndex || '0'}
      $colors={currentPalette}
      $hidden={tabIndex === '-1'}
    >
      {children}
    </StyledMainButton>
  );
};

import React from 'react';
import styled from 'styled-components';

import { usePaletteContext } from '../../context/palette_provider';

import { StarField } from './stars';

const StyledBackground = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${({ $colors }) => $colors.primary};
  z-index: -5;
`;

export function Background() {
  const { currentPalette } = usePaletteContext();

  return (
    <StyledBackground $colors={currentPalette}>
      <StarField currentPalette={currentPalette} />
    </StyledBackground>
  );
}

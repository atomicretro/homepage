import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${({ $colors }) => $colors.primary};
  z-index: -5;
`;

export function Background(props) {
  const { currentPalette } = props;
  return <StyledBackground $colors={currentPalette} />;
}

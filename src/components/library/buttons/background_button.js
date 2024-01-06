import styled from 'styled-components';

import { usePaletteContext } from '../../../context/palette_provider';

import { DefaultButton } from './default';

const StyledBackgroundButton = styled(DefaultButton)`
  position: absolute;
  top: 10px;
  color: ${({ $colors }) => $colors.linksOverride || $colors.links};
  font-size: 16px;
  z-index: 100;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;

  ${({ $hidden }) => $hidden && `
    opacity: 0;
    pointer-events: none;
  `}

  &:focus, &:hover {
    color: ${({ $colors }) => $colors.linksActive};
  }
`;

export function BackgroundButton(props) {
  const { children, className, onClick, tabIndex } = props;
  const paletteContext = usePaletteContext();

  return (
    <StyledBackgroundButton
      className={className}
      onMouseUp={(e) => e.currentTarget.blur()}
      onClick={onClick || null}
      tabIndex={tabIndex || '0'}
      $colors={paletteContext}
      $hidden={tabIndex === '-1'}
    >
      {children}
    </StyledBackgroundButton>
  );
};

import styled from 'styled-components';

import { usePaletteContext } from '../../../context/palette_provider';

import { DefaultButton } from './default';

const StyledLinkButton = styled(DefaultButton)`
  color: ${({ $colors }) => $colors.links};

  &:active, &:focus, &:hover {
    color: ${({ $colors }) => $colors.linksActive};
  }
`;

export function LinkButton(props) {
  const { children, className, onClick, tabIndex } = props;
  const paletteContext = usePaletteContext();

  return (
    <StyledLinkButton
      className={className}
      onClick={onClick}
      onMouseUp={(e) => e.currentTarget.blur()}
      tabIndex={tabIndex || '0'}
      $colors={paletteContext}
    >
      {children}
    </StyledLinkButton>
  )
}

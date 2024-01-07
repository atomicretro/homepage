import styled from 'styled-components';

import { useAppContext } from '../../../context/app_provider';
import { usePaletteContext } from '../../../context/palette_provider';

import { DefaultButton } from './default';

const StyledLinkButton = styled(DefaultButton)`
  color: ${({ $colors }) => $colors.link};

  &:active, &:focus, &:hover {
    color: ${({ $colors }) => $colors.linkInteraction};
  }
`;

export function LinkButton(props) {
  const { children, className, onClick } = props;
  const { tabIndex } = useAppContext();
  const { currentPalette } = usePaletteContext();

  return (
    <StyledLinkButton
      className={className}
      onClick={onClick}
      onMouseUp={(e) => e.currentTarget.blur()}
      tabIndex={tabIndex}
      $colors={currentPalette}
    >
      {children}
    </StyledLinkButton>
  );
}

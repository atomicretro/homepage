import styled from 'styled-components';

import { useAppContext } from '../../../context/app_provider';
import { usePaletteContext } from '../../../context/palette_provider';

import { DefaultButton } from './default';

const StyledLinkButton = styled(DefaultButton)`
  color: ${({ $colors }) => $colors.links};

  &:active, &:focus, &:hover {
    color: ${({ $colors }) => $colors.linksActive};
  }
`;

export function LinkButton(props) {
  const { children, className, onClick } = props;
  const { tabIndex } = useAppContext();
  const paletteContext = usePaletteContext();

  return (
    <StyledLinkButton
      className={className}
      onClick={onClick}
      onMouseUp={(e) => e.currentTarget.blur()}
      tabIndex={tabIndex}
      $colors={paletteContext}
    >
      {children}
    </StyledLinkButton>
  )
}

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useAppContext } from '../../../context/app_provider';
import { usePaletteContext } from '../../../context/palette_provider';

const StyledRouterLink = styled(Link)`
  &:link, &:visited {
    color: ${({ $colors }) => $colors.links};
  }

  &:active, &:focus, &:hover {
    color: ${({ $colors }) => $colors.linksActive};
  }
`;

export function RouterLink(props) {
  const { children, className, to } = props;
  const { tabIndex } = useAppContext();
  const paletteContext = usePaletteContext();

  return (
    <StyledRouterLink
      className={className}
      onMouseUp={(e) => e.currentTarget.blur()}
      tabIndex={tabIndex}
      to={to}
      $colors={paletteContext}
    >
      {children}
    </StyledRouterLink>
  )
}

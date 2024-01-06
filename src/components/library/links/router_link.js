import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  const { children, className, tabIndex, to } = props;
  const paletteContext = usePaletteContext();

  return (
    <StyledRouterLink
      className={className}
      onMouseUp={(e) => e.currentTarget.blur()}
      tabIndex={tabIndex || '0'}
      to={to}
      $colors={paletteContext}
    >
      {children}
    </StyledRouterLink>
  )
}

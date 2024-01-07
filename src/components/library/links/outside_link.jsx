import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../../context/app_provider';
import { usePaletteContext } from '../../../context/palette_provider';

const StyledOutsideLink = styled.a`
  &:link, &:visited {
    color: ${({ $colors }) => $colors.link};
  }

  &:active, &:focus, &:hover {
    color: ${({ $colors }) => $colors.linkInteraction};
  }
`;

export function OutsideLink(props) {
  const { children, className, tabIndex, to } = props;
  const { tabIndex: tabIndexContext } = useAppContext();
  const { currentPalette } = usePaletteContext();

  let extraProps = {};
  if (to.includes('mailto') === false) {
    extraProps = {
      rel: 'noopener noreferrer',
      target: '_blank',
    };
  }

  return (
    <StyledOutsideLink
      className={className}
      href={to}
      onMouseUp={(e) => e.currentTarget.blur()}
      tabIndex={tabIndex || tabIndexContext}
      {...extraProps}
      $colors={currentPalette}
    >
      {children}
    </StyledOutsideLink>
  );
}

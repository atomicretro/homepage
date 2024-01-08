import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../context/app_provider';

const StyledHeader = styled.header`
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  z-index: 3;

  h1 {
    font-size: 50px;
    color: #FFFFFF;
    line-height: 41px;
    cursor: default;
  }

  @media only screen and (min-width: 768px) {
    height: 100px;
  }
`;

export function Header () {
  const { handleBackgroundInteraction } = useAppContext();

  const handleHeaderClick = (e) => {
    e.stopPropagation();
    handleBackgroundInteraction(false);
  };

  return (
    <StyledHeader onClick={handleHeaderClick}>
      <h1 onClick={(e) => e.stopPropagation()}>
        Alec Cuccia
      </h1>
    </StyledHeader>
  );
}

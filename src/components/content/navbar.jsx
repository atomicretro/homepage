import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../context/app_provider';

import { RouterLink } from '../library/links/router_link';
import { LinkButton } from '../library/buttons/link_button';

const StyledNavBar = styled.nav`
  height: 40px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 2;

  div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  a:link, a:visited, button {
    font-size: 13px;
  }

  @media only screen and (min-width: 576px) {
    div {
      width: 90%;
    }

    a:link, a:visited, button {
      font-size: 15px;
    }
  }

  @media only screen and (min-width: 768px) {
    a:link, a:visited, button {
      font-size: 18px;
    }
  }
`;

export function Navbar() {
  const { tabIndex, setShowContent } = useAppContext();

  const handleStargazeButtonPress = (e) => {
    e.stopPropagation();
    setShowContent((prevShowContent) => !prevShowContent);
  };

  return (
    <StyledNavBar>
      <div>
        <RouterLink tabIndex={tabIndex} to='/'>Home</RouterLink>
        <RouterLink tabIndex={tabIndex} to='/projects'>Projects</RouterLink>
        <RouterLink tabIndex={tabIndex} to='/odds-and-ends'>Odds and Ends</RouterLink>
        <RouterLink tabIndex={tabIndex} to='/contact'>Contact</RouterLink>
        <LinkButton onClick={handleStargazeButtonPress} tabIndex={tabIndex}>Stargaze</LinkButton>
      </div>
    </StyledNavBar>
  );
}

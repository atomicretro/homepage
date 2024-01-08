import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useAppContext } from '../../context/app_provider';

import { Header } from './header';
import { Display } from './display';
import { Navbar } from './navbar';

const StyledContent = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  ${({ $backgroundInteraction }) => $backgroundInteraction && `
    transition: transform 0.5s ease-out;
  `}

  ${({ $hidden }) => $hidden && `
    transform: translate(0, calc(100vh - 100px));
    pointer-events: none;
  `}

  @media only screen and (min-width: 768px) {
    ${({ $hidden }) => $hidden && `
      transform: translate(0, calc(100vh - 110px));
    `}
  }
`;

export function Content () {
  const location = useLocation();
  const { backgroundInteraction, showContent, setShowContent } = useAppContext();

  React.useEffect(() => {
    if (location.pathname !== '/') {
      setShowContent(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StyledContent
      $backgroundInteraction={backgroundInteraction}
      $hidden={!showContent}
    >
      <Header />
      <Navbar />
      <Display />
    </StyledContent>
  );
}

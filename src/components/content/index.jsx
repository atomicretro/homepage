import React from 'react';
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
  transition: transform 0.5s ease-out;

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
  const { showContent } = useAppContext();

  return (
    <StyledContent $hidden={!showContent}>
      <Header />
      <Navbar />
      <Display />
    </StyledContent>
  );
}

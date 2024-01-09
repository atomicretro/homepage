import React from 'react';
import styled from 'styled-components';

import { usePaletteContext } from '../context/palette_provider';
import { useAppContext } from '../context/app_provider';

import { Content } from './content';

import { MainButton } from './library/buttons/main_button';

const StyledApp = styled.main`
  outline: 0;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .main-button {
    position: absolute;
    top: 10px;

    &.random { left: 10px; }
    &.enter { right: 10px; }
  }

  @media only screen and (min-width: 768px) {
    .main-button {
      top: 12px;
      font-size: 18px;

      &.random { left: 12px; }
      &.enter { right: 12px; }
    }
  }
`;

export function App() {
  const { pickRandomPalette } = usePaletteContext();
  const { handleBackgroundInteraction, showContent } = useAppContext();

  const handleRandomPaletteClick = (e) => {
    e.stopPropagation();
    pickRandomPalette();
  };

  return (
    <StyledApp
      onClick={() => handleBackgroundInteraction(true)}
      tabIndex={!showContent ? '0' : '-1'}
    >
      <Content />

      <MainButton
        className='main-button random'
        onClick={handleRandomPaletteClick}
      >
        Random palette
      </MainButton>

      <MainButton
        className='main-button enter'
        tabIndex={!showContent ? '0' : '-1'}
      >
        Click to enter
      </MainButton>
    </StyledApp>
  );
}

import React from 'react';
import styled from 'styled-components';

import { usePaletteContext } from '../context/palette_provider';
import { useAppContext } from '../context/app_provider';

import { NightSky } from './night_sky';
import { Content } from './content';

import { BackgroundButton } from './library/buttons/background_button';

const StyledApp = styled.main`
  outline: 0;
  height: 100vh;
  width: 100vw;
  position: relative;
  font-family: 'Alata', sans-serif;
  overflow: hidden;
  zoom: 100%;

  .background-button {
    position: absolute;
    top: 10px;
  }

  .background-button.random-palette {
    left: 10px;
  }

  .background-button.instructions {
    right: 10px;
  }

  @media only screen and (min-width: 768px) {
    .background-button {
      top: 12px;
      font-size: 18px;
    }

    .background-button.random-palette {
      left: 12px;
    }

    .background-button.instructions {
      right: 12px;
    }
  }
`;

export function App() {
  const { currentPalette, pickRandomPalette } = usePaletteContext();
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
      <NightSky currentPalette={currentPalette} />

      <Content />

      <BackgroundButton
        className='background-button random-palette'
        onClick={handleRandomPaletteClick}
      >
        Random palette
      </BackgroundButton>

      <BackgroundButton
        className='background-button instructions'
        tabIndex={!showContent ? '0' : '-1'}
      >
        Click to enter
      </BackgroundButton>
    </StyledApp>
  );
}

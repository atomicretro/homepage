import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { usePaletteContext } from '../context/palette_provider';
import { useAppContext } from '../context/app_provider';

import NightSky from './night_sky';
import { Content } from './content';

import { BackgroundButton } from './library/buttons/background_button';

import '../scss/palettes.css';

const StyledApp = styled.main`
  outline: 0;
  height: 100vh;
  width: 100vw;
  position: relative;
  font-family: 'Alata', sans-serif;
  overflow: hidden;
  zoom: 100%;

  .main-button {
    position: absolute;
    top: 10px;
  }

  .main-button.random-palette {
    left: 10px;
  }

  .main-button.instructions {
    right: 10px;
  }

  .app--NIGHTSKY {
    a:link, a:visited {
      color: $NIGHTSKY-tertiary;
    }
    a:active, a:focus, a:hover {
      color: $NIGHTSKY-quaternary;
    }
  }

  .app--PASTEL {
    a:link, a:visited {
      color: $PASTEL-primary;
    }
    a:active, a:focus, a:hover {
      color: $PASTEL-secondary;
    }
  }

  .app--GRANDMA {
    a:link, a:visited {
      color: $GRANDMA-primary;
    }
    a:active, a:focus, a:hover {
      color: $GRANDMA-secondary;
    }
  }

  .app--MARS {
    a:link, a:visited {
      color: $MARS-primary;
    }
    a:active, a:focus, a:hover {
      color: $MARS-secondary;
    }
  }

  .app--PURPLY {
    a:link, a:visited {
      color: $PURPLY-primary;
    }
    a:active, a:focus, a:hover {
      color: $PURPLY-secondary;
    }
  }

  .app--VIVID {
    a:link, a:visited {
      color: $VIVID-primary;
    }
    a:active, a:focus, a:hover {
      color: $VIVID-secondary;
    }
  }

  .app--FOREST {
    a:link, a:visited {
      color: $FOREST-primary;
    }
    a:active, a:focus, a:hover {
      color: $FOREST-secondary;
    }
  }

  .app--RHENIUM {
    a:link, a:visited {
      color: $RHENIUM-primary;
    }
    a:active, a:focus, a:hover {
      color: $RHENIUM-secondary;
    }
  }

  .app--SEWERS {
    a:link, a:visited {
      color: $SEWERS-primary;
    }
    a:active, a:focus, a:hover {
      color: $SEWERS-tertiary;
    }
  }

  .app--NIKAIDO {
    a:link, a:visited {
      color: $NIKAIDO-primary;
    }
    a:active, a:focus, a:hover {
      color: $NIKAIDO-secondary;
    }
  }

  .app--SEPIA {
    a:link, a:visited {
      color: $SEPIA-primary;
    }
    a:active, a:focus, a:hover {
      color: $SEPIA-secondary;
    }
  }

  .app--WETLAND {
    a:link, a:visited {
      color: $WETLAND-primary;
    }
    a:active, a:focus, a:hover {
      color: $WETLAND-secondary;
    }
  }

  .app--NOSTALGIA {
    a:link, a:visited {
      color: $NOSTALGIA-primary;
    }
    a:active, a:focus, a:hover {
      color: $NOSTALGIA-secondary;
    }
  }

  @media only screen and (min-width: 768px) {
    .main-button {
      top: 12px;
      font-size: 18px;
    }

    .main-button.random-palette {
      left: 12px;
    }

    .main-button.instructions {
      right: 12px;
    }
  }
`;

const App = () => {
  const location = useLocation();
  const { currentPalette, pickRandomPalette } = usePaletteContext();
  const { showContent, setShowContent } = useAppContext();
  console.log('showContent', showContent);

  useEffect(() => {
    console.log('location.pathname', location.pathname);
    if (location.pathname !== '/') {
      setShowContent(true);
    }
  // }, [location.pathname, setShowContent]);
  }, []);

  const handleRandomPaletteClick = (e) => {
    e.stopPropagation();
    pickRandomPalette();
  };

  return (
    <StyledApp
      onClick={ () => setShowContent(true) }
      tabIndex={ !showContent ? '0' : '-1' }
    >
      <NightSky currentPalette={ currentPalette } />

      <Content />

      <BackgroundButton
        className='main-button random-palette'
        onClick={ handleRandomPaletteClick }
      >
        Random palette
      </BackgroundButton>

      <BackgroundButton
        className='main-button instructions'
        tabIndex={ !showContent ? '0' : '-1' }
      >
        Click to enter
      </BackgroundButton>
    </StyledApp>
  );
}

export default App;

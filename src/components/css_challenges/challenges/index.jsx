import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { useChallengesContext } from '../../../context/challenges_provider';

import { LinkButton } from '../../library/buttons/link_button';
import { RouterLink } from '../../library/links/router_link';

import { Alien } from './alien';
import { Clock } from './clock';
import { Flower } from './flower';
import { Hover } from './hover';
import { LightsOut } from './lights_out';
import { Monster } from './monster';
import { Segments } from './segments';

const StyledChallenges = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffffff;
    margin: 0 0 10px 0;
    z-index: 20;
  }

  .return-link {
    font-size: 16px;
    margin: 0 0 0 10px;
  }

  .explanation-button {
    font-size: 16px;
    margin: 0 10px 0 0;
  }

  @media only screen and (min-width: 576px) {
    .return-link,
    .explanation-button {
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 768px) {
    .return-link,
    .explanation-button {
      font-size: 24px;
    }
  }
`;

export function Challenges() {
  const { showExplanation, toggleExplanation } = useChallengesContext();

  return (
    <StyledChallenges $blur={showExplanation}>
      <Routes>
        <Route path='/alien' element={<Alien />} />
        <Route path='/clock' element={<Clock />} />
        <Route path='/flower' element={<Flower />} />
        <Route path='/hover' element={<Hover />} />
        <Route path='/lights-out' element={<LightsOut />} />
        <Route path='/monster' element={<Monster />} />
        <Route path='/segments' element={<Segments />} />
      </Routes>

      <div className='buttons'>
        <RouterLink className='return-link' to='/css-challenges'>
          Go back
        </RouterLink>

        <LinkButton className='explanation-button' onClick={toggleExplanation}>
          {showExplanation ? 'Hide' : 'See'} Explanation
        </LinkButton>
      </div>
    </StyledChallenges>
  );
}

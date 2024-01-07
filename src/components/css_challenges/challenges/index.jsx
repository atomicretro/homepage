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
import { Monster } from './monster';
import { Segments } from './segments';

const StyledChallenges = styled.div`
  position: relative;
  width: 100%;

  .return-link {
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 20px;
  }

  .explanation-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 20px;
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
        <Route path='/monster' element={<Monster />} />
        <Route path='/segments' element={<Segments />} />
      </Routes>

      <RouterLink className='return-link' to='/odds-and-ends'>
        Go back
      </RouterLink>

      <LinkButton className='explanation-button' onClick={toggleExplanation}>
        {showExplanation ? 'Hide' : 'See'} Explanation
      </LinkButton>
    </StyledChallenges>
  );
};

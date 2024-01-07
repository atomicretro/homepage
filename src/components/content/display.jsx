import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { ChallengesProvider } from '../../context/challenges_provider';

import { Contact } from '../contact';
import { Challenges } from '../css_challenges/challenges';
import { Home } from '../home';
import { Projects } from '../projects';
import { OddsAndEnds } from '../odds_ends';

const StyledDisplay = styled.section`
  position: relative;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  background-color: #ffffff;
  padding: 25px 0 0 0;
  overflow: auto;
  z-index: 1;
`;

export function Display() {
  return (
    <StyledDisplay tabIndex='-1'>
      <Routes>
        <Route element={<Contact />} path='/contact' />
        <Route
          element={
            <ChallengesProvider>
              <Challenges />
            </ChallengesProvider>
          }
          path='/css/*'
        />
        <Route element={<OddsAndEnds />} path='/odds-and-ends' />
        <Route element={<Projects />} path='/projects' />
        <Route element={<Home />} path='/' />
      </Routes>
    </StyledDisplay>
  );
}

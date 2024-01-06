import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Contact } from '../contact';
import { CSSChallenges } from '../css_challenges';
import { Home } from '../home';
import { Projects } from '../projects';
import { OddsAndEnds } from '../odds_ends';

const StyledDisplay = styled.section`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  background-color: #ffffff;
  overflow: auto;
  z-index: 1;
`;

export function Display() {
  return (
    <StyledDisplay>
      <Routes>
        <Route element={<Contact />} path='/contact' />
        <Route element={<OddsAndEnds />} path='/odds-and-ends' />
        <Route element={<Projects />} path='/projects' />
        <Route element={<CSSChallenges />} path='/css' />
        <Route element={<Home />} path='/' />
      </Routes>
    </StyledDisplay>
  );
}

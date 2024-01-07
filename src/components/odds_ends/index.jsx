import React from 'react';
import { styled } from 'styled-components';

import { CSSChallenges } from '../css_challenges';

const StyledOddsAndEnds = styled.div`
  display: flex;
  flex-direction: column;
`;

export function OddsAndEnds() {
  return (
    <StyledOddsAndEnds>
      <CSSChallenges />
    </StyledOddsAndEnds>
  );
}

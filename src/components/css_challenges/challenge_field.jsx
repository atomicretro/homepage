import React from 'react';
import styled from 'styled-components';

import { useChallengesContext } from '../../context/challenges_provider';

const StyledChallengeField = styled.div`
  ${({ $blur }) => $blur && 'filter: blur(5px);'}
  transition: filter 0.5s ease;
`;

export function ChallengeField(props) {
  const { children, className } = props;
  const { showExplanation } = useChallengesContext();

  return (
    <StyledChallengeField className={className} $blur={showExplanation}>
      {children}
    </StyledChallengeField>
  )
}
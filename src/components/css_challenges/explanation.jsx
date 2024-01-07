import React from 'react';
import styled from 'styled-components';

import { useChallengesContext } from '../../context/challenges_provider';

import { OutsideLink } from '../library/links/outside_link';

const StyledExplanation = styled.div`
  position: absolute;
  top: -10px;
  height: 460px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 24px;
  background: rgba(255, 255, 255, 0.8);
  overflow: auto;
  opacity: 0;
  pointer-events: none;
  z-index: 10;
  transition: opacity 0.5s ease;

  ${({ $show }) => $show && `
    opacity: 1;
    pointer-events: auto;
  `}

  a {
    font-size: 16px;
  }

  p {
    width: 80%;
    text-align: center;
    margin-bottom: 15px;
  }
`;

export function Explanation(props) {
  const { children, number } = props;
  const { showExplanation } = useChallengesContext();

  return (
    <StyledExplanation $show={showExplanation}>
      {children}
      <p>
        <OutsideLink to={`https://100dayscss.com/days/${number}`}>
          To the challenge!
        </OutsideLink>
      </p>
    </StyledExplanation>
  )
};

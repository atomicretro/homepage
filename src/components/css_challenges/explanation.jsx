import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../context/app_provider';
import { useChallengesContext } from '../../context/challenges_provider';

import { OutsideLink } from '../library/links/outside_link';

const StyledExplanation = styled.div`
  position: absolute;
  top: -10px;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  line-height: 24px;
  background: rgba(255, 255, 255, 0.8);
  overflow: auto;
  opacity: 0;
  pointer-events: none;
  z-index: 10;
  transition: opacity 0.5s ease;

  .reading {
    width: 80%;
    font-size: 12px;
    text-align: center;
    overflow: auto;

    @media only screen and (min-width: 576px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  ${({ $show }) => $show && `
    opacity: 1;
    pointer-events: auto;
  `}

  a {
    font-size: 16px;
  }

  p {
    width: 100%;
    margin: 0 0 15px 0;

    &:first-of-type {
      margin: 0;
    }
  }

  .explanation-line {
    width: 60%;
    display: inline-block;
    min-height: 2px;
    background: black;
    margin: 20px 0;
  }
`;

export function Explanation(props) {
  const { children, number } = props;
  const { showContent } = useAppContext();
  const { showExplanation } = useChallengesContext();

  return (
    <StyledExplanation $show={showExplanation}>
      <div className='reading'>
        {children}
        {number &&
          <p>
            <OutsideLink
              tabIndex={showContent && showExplanation ? '0' : '-1'}
              to={`https://100dayscss.com/days/${number}`}
            >
              To the challenge!
            </OutsideLink>
          </p>
        }
      </div>
    </StyledExplanation>
  );
};

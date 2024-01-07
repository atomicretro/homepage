import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { usePaletteContext } from '../../../context/palette_provider';

import { ChallengeField } from '../challenge_field';
import { Explanation } from '../explanation';

const tick = keyframes`
  0%   { top: -6px; }
  10%  { top: -56px; }
  20%  { top: -106px; }
  30%  { top: -156px; }
  40%  { top: -206px; }
  50%  { top: -256px; }
  60%  { top: -306px; }
  70%  { top: -356px; }
  80%  { top: -406px; }
  90%  { top: -456px; }
  100% { top: -506px; }
`;

const clockAnimation = css`
  animation-name: ${tick};
  animation-iteration-count: infinite;
  animation-timing-function: steps(1, jump-end);
`;

const StyledClock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .clock {
    position: relative;
    height: 400px;
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${({ $colors }) => $colors.primary};
    border-radius: 3px;
    z-index: 1;
  }

  .display {
    position: relative;
    height: 40px;
    width: 110px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.3);
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .input {
    position: absolute;
    top: 236px;
    left: calc(50% - 15px);
    width: 27px;
    height: 27px;
    opacity: 0;
    cursor: pointer;
    z-index: 5;

    &:checked ~ .pause {
      opacity: 0;
      transform: scale(0, 0);
    }
    &:checked ~ .play {
      opacity: 1;
      transform: scale(1, 1);
    }
    &:checked ~ .display {
      & .ribbon {
        animation-play-state: paused;
      }
    }
  }

  .pause {
    position: absolute;
    top: 240px;
    left: calc(50% - 11px);
    height: 25px;
    width: 9px;
    opacity: 1;
    transition:
      opacity 0.25s,
      transform 0.25s;

    border-style: solid;
    border-width: 0 8px 0 8px;
    border-color: ${({ $colors }) => $colors.secondary};
  }

  .play {
    position: absolute;
    top: 240px;
    left: calc(50% - 11px);
    opacity: 0;
    transform: scale(0, 0);
    transition:
      opacity 0.25s,
      transform 0.25s;

    border-style: solid;
    border-width: 13px 0px 13px 25px;
    border-color: transparent transparent transparent ${({ $colors }) => $colors.secondary};
  }

  .ribbon {
    position: absolute;
    top: -6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ $colors }) => $colors.primary};
    font-size: 32px;
    line-height: 50px;

    &.thousands {
      left: 7px;
      ${clockAnimation}
      animation-duration: 10000s;
    }

    &.hundreds {
      left: 32px;
      ${clockAnimation}
      animation-duration: 1000s;
    }

    &.tens {
      left: 57px;
      ${clockAnimation}
      animation-duration: 100s;
    }

    &.ones {
      left: 82px;
      ${clockAnimation}
      animation-duration: 10s;
    }
  }
`;

const NumbersRibbon = ({ position }) => {
  return (
    <div className={`ribbon ${position}`}>
      <span>0</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
    </div>
  );
};

const description = <>
  <p>Believe it or not, it was the pause button in this challenge that gave me the least amount of trouble. Once I figured out how to get the clock working pausing the animation was super straight forward.</p>
  <p>But I'm getting ahead of myself! The counter works kind of like an old school flip clock: each digit is actually an absolutely positioned column of the numbers 0&endash;9. The "counting" is simply each column ticking up one place independently of each other. This was accomplished with a CSS animation that changes the vertical positioning of each column. Once a column gets to the number 9, its animation resets. The speed of each column is controlled through its animation's duration.</p>
  <p>To get the pause effect working I turned back to our good friend the checkbox. When you click on the pause button what you're actually doing is filling in an empty checkbox. Using the checkbox's :checked pseudo class and the CSS general sibling combinator I was able to set each column's animation-play-state to paused when the checkbox is checked.</p>
</>;

const Clock = () => {
  const { currentPalette } = usePaletteContext();

  return (
    <StyledClock $colors={currentPalette}>
      <Explanation number='51'>{description}</Explanation>

      <ChallengeField className='clock'>
        <input className='input' type='checkbox' />
        <div className='pause' />
        <div className='play' />
        <div className='display'>
          <NumbersRibbon position='thousands' />
          <NumbersRibbon position='hundreds' />
          <NumbersRibbon position='tens' />
          <NumbersRibbon position='ones' />
        </div>
      </ChallengeField>
    </StyledClock>
  );
};

export default Clock;

import React from 'react';
import styled, { css } from 'styled-components';

import { usePaletteContext } from '../../../context/palette_provider';

import { ChallengeField } from '../challenge_field';
import { Explanation } from '../explanation';

const petalAnimation = (petalNumber) => css`
  animation-name: fade, move_${petalNumber};
  animation-duration: 0.7s, 0.7s;
  animation-delay: 0s, 0s;
  animation-iteration-count: 1, 1;
`;

const StyledFlower = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .flower {
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

  @keyframes fade {
    0%   { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes move_01 { // 0
    0%   { left: 0; bottom: 10px; }
    100% { left: 0; bottom: 60px; }
  }
  @keyframes move_02 { // 30
    0%   { left: 10px; bottom: 7px; }
    100% { left: 35px; bottom: 51px; }
  }
  @keyframes move_03 { // 60
    0%   { left: 17px; bottom: 0px; }
    100% { left: 61px; bottom: 25px; }
  }
  @keyframes move_04 { // 90
    0%   { left: 20px; bottom: -10px; }
    100% { left: 70px; bottom: -10px; }
  }
  @keyframes move_05 { // 120
    0%   { left: 17px; bottom: -20px; }
    100% { left: 61px; bottom: -45px; }
  }
  @keyframes move_06 { // 150
    0%   { left: 10px; bottom: -27px; }
    100% { left: 35px; bottom: -71px; }
  }
  @keyframes move_07 { // 180
    0%   { left: 0; bottom: -30px; }
    100% { left: 0; bottom: -80px; }
  }
  @keyframes move_08 { // 210
    0%   { left: -10px; bottom: -27px; }
    100% { left: -35px; bottom: -71px; }
  }
  @keyframes move_09 { // 240
    0%   { left: -17px; bottom: -20px; }
    100% { left: -61px; bottom: -45px; }
  }
  @keyframes move_10 { // 270
    0%   { left: -20px; bottom: -10px; }
    100% { left: -70px; bottom: -10px; }
  }
  @keyframes move_11 { // 300
    0%   { left: -17px; bottom: 0; }
    100% { left: -61px; bottom: 25px; }
  }
  @keyframes move_12 { // 330
    0%   { left: -10px; bottom: 7px; }
    100% { left: -35px; bottom: 51px; }
  }

  .stem {
    appearance: none;
    height: 50px;
    width: 50px;
    background: ${({ $colors }) => $colors.secondary};
    border-radius: 50%;
    box-shadow: inset 0 0 0 3px ${({ $colors }) => $colors.tertiary};
    cursor: pointer;
    z-index: 3;
    transition:
      background 0.3s,
      box-shadow 0.3s;

    &:checked {
      box-shadow: inset 0 0 0 18px ${({ $colors }) => $colors.tertiary};
    }

    &:checked ~ .petals .n01 { ${petalAnimation('01')} }
    &:checked ~ .petals .n02 { ${petalAnimation('02')} }
    &:checked ~ .petals .n03 { ${petalAnimation('03')} }
    &:checked ~ .petals .n04 { ${petalAnimation('04')} }
    &:checked ~ .petals .n05 { ${petalAnimation('05')} }
    &:checked ~ .petals .n06 { ${petalAnimation('06')} }
    &:checked ~ .petals .n07 { ${petalAnimation('07')} }
    &:checked ~ .petals .n08 { ${petalAnimation('08')} }
    &:checked ~ .petals .n09 { ${petalAnimation('09')} }
    &:checked ~ .petals .n10 { ${petalAnimation('10')} }
    &:checked ~ .petals .n11 { ${petalAnimation('11')} }
    &:checked ~ .petals .n12 { ${petalAnimation('12')} }
  }

  .petals {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  .petal {
    height: 20px;
    width: 2px;
    position: absolute;
    background: ${({ $colors }) => $colors.tertiary};

    &.n02 { transform: rotate(30deg); }
    &.n03 { transform: rotate(60deg); }
    &.n04 { transform: rotate(90deg); }
    &.n05 { transform: rotate(120deg); }
    &.n06 { transform: rotate(150deg); }
    &.n07 { transform: rotate(180deg); }
    &.n08 { transform: rotate(210deg); }
    &.n09 { transform: rotate(240deg); }
    &.n10 { transform: rotate(270deg); }
    &.n11 { transform: rotate(300deg); }
    &.n12 { transform: rotate(330deg); }
  }
`;

const description = <>
  <p>Click the circle to watch a flower bloom.</p>
  <div className='explanation-line' />
  <p>This one was deceptively easy.</p>
  <p>The main part of the flower — the circle — is simply a checkbox; unfilled is unchecked, filled is checked. The petals that fly off are just divs styled to be short lines. I got them to move using a series of animations that trigger when the checkbox gets clicked (thank you general sibling combinator!).</p>
  <p>The hard part was all the trigonometry I had to do to get the petals in the right positions. Each petal is basically the same line rotated around the center of the flower; using trig I was able to plot their trajectories away from the center evenly. There might be a less math-heavy way of doing this, but because the animations are just moving along straight lines that I already calculated, this way is definitely efficient!</p>
</>;

export function Flower() {
  const { currentPalette } = usePaletteContext();

  return (
    <StyledFlower $colors={currentPalette}>
      <Explanation number='66'>{description}</Explanation>

      <ChallengeField className='flower'>
        <input
          className='stem'
          defaultChecked={false}
          onMouseUp={(e) => e.target.blur()}
          type='checkbox'
        />

        <div className='petals'>
          <div className='petal n01' />
          <div className='petal n02' />
          <div className='petal n03' />
          <div className='petal n04' />
          <div className='petal n05' />
          <div className='petal n06' />
          <div className='petal n07' />
          <div className='petal n08' />
          <div className='petal n09' />
          <div className='petal n10' />
          <div className='petal n11' />
          <div className='petal n12' />
        </div>
      </ChallengeField>
    </StyledFlower>
  );
}

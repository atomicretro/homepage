import React from 'react';
import styled from 'styled-components';

import { usePaletteContext } from '../../../context/palette_provider';

import { ChallengeField } from '../challenge_field';
import { Explanation } from '../explanation';

const StyledSegments = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .segments {
    position: relative;
    height: 300px;
    width: 300px;
    display: flex;
    flex-direction: column;
    background: #34495e;
    border-radius: 3px;
    overflow: hidden;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0);
    cursor: pointer;
    outline: 0;
    transition:
      height 0.75s ease,
      font-size 0.75s ease,
      color 0.75s ease;

    -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
        -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;

    &:focus,
    &:hover {
      height: 75%;
      font-size: 26px;
      color: rgba(255, 255, 255, 1);
      transition:
        height 0.75s ease,
        font-size 0.75s ease,
        color 0.75s ease;
    }

    &.dark {
      height: 25%;
      width: 100%;
      background: ${({ $colors }) => $colors.primary};
    }

    &.light {
      height: 25%;
      width: 100%;
      background: ${({ $colors }) => $colors.secondary};
    }
  }

  @media only screen and (min-width: 768px) {
    .segments {
      height: 400px;
      width: 400px;
    }

    .box {
      &:focus,
      &:hover {
        font-size: 30px;
      }
    }
  }
`;

const description = <>
  <p>I completed this challenge using flexbox and height manipulation on CSS events. Flexbox keeps the colored boxes organized and in place while :focus and :hover events increase the hovered box's dimensions.</p>
  <p>The animations are done entirely in CSS; the only JS used is to blur a box on mouse up to ensure wayward clicks don't cause two boxes to expand at once.</p>
  <p>The animations are fully responsive and work with both mouse and keyboard.</p>
</>;

const Segments = () => {
  const { currentPalette } = usePaletteContext();

  return (
    <StyledSegments $colors={currentPalette}>
      <Explanation number='80'>{description}</Explanation>
      <ChallengeField className='segments'>
        <div
          className='box dark'
          onMouseUp={ (e) => { e.target.blur(); } }
          tabIndex='0'>
          <span>FIRST</span>
        </div>
        <div
          className='box light'
          onMouseUp={ (e) => { e.target.blur(); } }
          tabIndex='0'>
          <span>SECOND</span>
        </div>
        <div
          className='box dark'
          onMouseUp={ (e) => { e.target.blur(); } }
          tabIndex='0'>
          <span>THIRD</span>
        </div>
        <div
          className='box light'
          onMouseUp={ (e) => { e.target.blur(); } }
          tabIndex='0'>
          <span>FOURTH</span>
        </div>
      </ChallengeField>
    </StyledSegments>
  );
};

export default Segments;

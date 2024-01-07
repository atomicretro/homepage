import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../../context/app_provider';
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
    user-select: none;

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

    &:focus,
    &:hover {
      height: 75%;
      font-size: 26px;
      color: #ffffff;
      transition:
        height 0.75s ease,
        font-size 0.75s ease,
        color 0.75s ease;
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
  <p>Hover over the segments to watch them expand.</p>
  <div className='explanation-line' />
  <p>I completed this challenge using flexbox and height manipulation on CSS events. Flexbox keeps the colored boxes organized and in place while :focus and :hover events increase the hovered box's dimensions.</p>
  <p>The animations are done entirely in CSS; the only JS used is to blur a box on mouse up to ensure wayward clicks don't cause two boxes to expand at once.</p>
  <p>The animations are fully responsive and work with both mouse and keyboard.</p>
</>;

const Box = (props) => {
  const { children, color } = props;
  const { tabIndex } = useAppContext();

  return (
    <div
      className={`box ${color}`}
      onMouseUp={(e) => e.target.blur()}
      tabIndex={tabIndex}
    >
      <span>{children}</span>
    </div>
  );
};

export function Segments() {
  const { currentPalette } = usePaletteContext();

  return (
    <StyledSegments $colors={currentPalette}>
      <Explanation number='80'>{description}</Explanation>

      <ChallengeField className='segments'>
        <Box color='dark'>FIRST</Box>
        <Box color='light'>SECOND</Box>
        <Box color='dark'>THIRD</Box>
        <Box color='light'>FOURTH</Box>
      </ChallengeField>
    </StyledSegments>
  );
};

export default Segments;

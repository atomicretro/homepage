import React from 'react';
import styled from 'styled-components';

import { usePaletteContext } from '../../../context/palette_provider';

import { ChallengeField } from '../challenge_field';
import { Explanation } from '../explanation';

const StyledHover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .hover {
    position: relative;
    height: 300px;
    width: 300px;
    display: flex;
    flex-direction: column;
    background: #34495e;
    border-radius: 3px;
    overflow: hidden;
  }

  .slice {
    outline: 0;
    height: 1.5px;
    width: 100%;
    cursor: pointer;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 150px;
    width: 100%;
    background: #e67e22;
    pointer-events: none;
    z-index: 2;
    transition: height 1s ease;
  }

  /* @media only screen and (max-width: 767px) {
    @for $idx from 1 through 400 {
      .slice--#{$idx}:focus ~ .overlay,
      .slice--#{$idx}:hover ~ .overlay {
        $size: $idx * 1.5;
        height: #{$size}px;
        transition: none;
      }
    }
  } */

  .text {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    color: white;
    font-family: sans-serif;
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 3px;
    text-align: center;
    pointer-events: none;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);

    &.one {
      z-index: 1;
    }

    &.two {
      filter: blur(5px);
      z-index: 3;
    }
  }

  @media only screen and (min-width: 768px) {
    .hover {
      height: 400px;
      width: 400px;
    }

    .slice {
      height: 2px;
      width: 100%;
      cursor: pointer;
    }

    .overlay {
      height: 200px;
    }

    /* @for $idx from 1 through 400 {
      .slice--#{$idx}:focus ~ .overlay,
      .slice--#{$idx}:hover ~ .overlay {
        $size: $idx * 2;
        height: #{$size}px;
        transition: none;
      }
    } */
  }
`;

const description = <>
  <p>After going through some other challenges I've picked up on how to handle pure CSS interactivity.</p>
  <p>The background is a series of horizontal grey slivers which, when hovered, increase the height of the foreground orange overlay. The slivers are created with JS, but that's the only JS used. Each sliver gets an index number, and the height of the orange overlay is simply a multiple of whichever sliver is being hovered at the moment.</p>
  <p>To achieve the blur effect on the text I've stacked two spans on top of each other with different z-indices. The higher z-index text has a blur filter while the lower text does not. The order goes: grey background, non-blurred text, orange overlay, blurred text. This causes the non-blurred text to get hidden by the orange layer, leaving only the blurred effect.</p>
</>;

const Hover = () => {
  const { currentPalette } = usePaletteContext();

  return (
    <StyledHover $colors={currentPalette}>
      <Explanation number='60'>{description}</Explanation>

      <ChallengeField className='hover'>
        {
          [ ...Array(200).keys() ].map((idx) => (
            <div
              className='slice'
              key={idx}
              onMouseUp={(e) => e.target.blur() }
              tabIndex='0'
            />
          ))
        }
        <div className='overlay' />
        <span className='text one'>HOVER</span>
        <span className='text two'>HOVER</span>
      </ChallengeField>
    </StyledHover>
  );
};

export default Hover;

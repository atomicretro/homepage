import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../../context/app_provider';
import { usePaletteContext } from '../../../context/palette_provider';

import { ChallengeField } from '../challenge_field';
import { Explanation } from '../explanation';

const NUM_SLICES = 200;

const sliceGenerator = (factor) => {
  let slices = '';
  for (let idx = 1; idx <= (NUM_SLICES * 2); idx++) {
    slices += `
      .slice.n${idx}:focus ~ .overlay,
      .slice.n${idx}:hover ~ .overlay {
        height: ${idx * factor}px;
        transition: none;
      }
    `;
  }

  return slices;
};

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
    background: ${({ $colors }) => $colors.primary};
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
    background: ${({ $colors }) => $colors.secondary};
    pointer-events: none;
    z-index: 2;
    transition: height 1s ease;
  }

  ${sliceGenerator(1.5)}

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

    ${sliceGenerator(2)}
  }
`;

const description = <>
  <p>Hover over the word to obfuscate the message.</p>
  <div className='explanation-line' />
  <p>After going through some other challenges I've picked up on how to handle pure CSS interactivity.</p>
  <p>The background is a series of horizontal grey slivers which, when hovered, increase the height of the foreground orange overlay. The slivers are created with JS, but that's the only JS used. Each sliver gets an index number, and the height of the orange overlay is simply a multiple of whichever sliver is being hovered at the moment.</p>
  <p>To achieve the blur effect on the text I've stacked two spans on top of each other with different z-indices. The higher z-index text has a blur filter while the lower text does not. The order goes: grey background, non-blurred text, orange overlay, blurred text. This causes the non-blurred text to get hidden by the orange layer, leaving only the blurred effect.</p>
</>;

export function Hover() {
  const { tabIndex } = useAppContext();
  const { currentPalette } = usePaletteContext();

  return (
    <StyledHover $colors={currentPalette}>
      <Explanation number='60'>{description}</Explanation>

      <ChallengeField className='hover'>
        {
          [ ...Array(NUM_SLICES).keys() ].map((idx) => (
            <div
              className={`slice n${idx + 1}`}
              key={idx}
              onMouseUp={(e) => e.target.blur() }
              tabIndex={tabIndex}
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

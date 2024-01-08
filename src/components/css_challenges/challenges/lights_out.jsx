import React from 'react';
import styled from 'styled-components';

import { usePaletteContext } from '../../../context/palette_provider';

import { ChallengeField } from '../challenge_field';
import { Explanation } from '../explanation';

const NUM_SQUARES = 12;
const LENGTH = 25;
const PADDING = 10;

const makeRows = (color) => {
  let rows = '';
  for (let row = 1; row < NUM_SQUARES; row++) {
    for (let col = 1; col < NUM_SQUARES; col++) {
      rows += `
        .n${row * NUM_SQUARES}:checked {
          & ~ .n${(row * NUM_SQUARES) + col}::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: ${LENGTH}px;
            width: ${LENGTH}px;
            background: ${color};
            opacity: 0.6;
          }
        }
      `;
    }
  }
  return rows;
};

const makeColumns = (color) => {
  let columns = '';
  for (let col = 1; col < NUM_SQUARES; col++) {
    for (let row = 1; row < NUM_SQUARES; row++) {
      columns += `
        .n${col}:checked {
          & ~ .n${(row * NUM_SQUARES) + col}::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: ${LENGTH}px;
            width: ${LENGTH}px;
            background: ${color};
            opacity: 0.6;
          }
        }
      `;
    }
  }
  return columns;
};

const StyledLightsOut = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .lights-out {
    height: ${(NUM_SQUARES * LENGTH) + (NUM_SQUARES * PADDING) + PADDING}px;
    width: ${(NUM_SQUARES * LENGTH) + (NUM_SQUARES * PADDING) + PADDING}px;
    position: relative;
    background: white;
    border: 2px solid lightgray;
    border-radius: 8px;
  }

  .square{
    position: absolute;
  }

  ${() => {
    let positioning = '';
    for (let idx = 0; idx <= (NUM_SQUARES * NUM_SQUARES); idx++) {
      positioning += `
        .n${idx} {
          top: ${Math.floor(idx / NUM_SQUARES) * (LENGTH + PADDING) + PADDING}px;
          left: ${(idx % NUM_SQUARES) * (LENGTH + PADDING) + PADDING}px;
        }
      `;
    }
    return positioning;
  }}

  .lights-out input {
    appearance: none;
    height: ${LENGTH}px;
    width: ${LENGTH}px;
    background: lightgray;
    border-radius: 0;
    margin: 0;
    cursor: pointer;

    &:checked {
      background: darkgray;
    }
  }

  ${({ $colors }) => makeRows($colors.secondary)}
  ${({ $colors }) => makeColumns($colors.tertiary)}
`;

const description = <>
  <p>Click the edges to create a light show.</p>
  <div className='explanation-line' />
  <p>I thought this up while trying to create a CSS-only game of battleship.</p>
  <p>My original idea was to use the CSS sibling combinator to link checkbox "cells" together to make ships. That idea fell apart though after I realized that the sibling combinator is actually the <strong>subsequent</strong> sibling combinator — there's no way for a child element to affect its previous siblings in pure CSS. I still think the idea has merit, and using checkboxes and ::before and ::after pseudo-elements you can definitely make a low-JS battleship. But these aren't mostly-CSS challenges, they're only-CSS challenges! So that will have to wait.</p>
  <p>As for the light board here in front of you, it's just a little bit of salvage from trying to make battleship. I liked the way that colors blended together when a not-fully-opaque ::before element overlapped with a not-fully-opaque ::after element. The only JavaScript used here is to bulk-create and position the elements that the pseudo-elements attach to; everything you actually see is pure CSS.</p>
</>;

export function LightsOut() {
  const { currentPalette } = usePaletteContext();

  const inputRefs = [];
  const setRef = (ref) => {
    inputRefs.push(ref);
  };

  const toggleOrigin = () => {
    const originRef = inputRefs[0];
    if (originRef.checked) {
      for (const input of inputRefs) {
        input.checked = true;
      }
    } else {
      for (const input of inputRefs) {
        input.checked = false;
      }
    }
  };

  return (
    <StyledLightsOut $colors={currentPalette}>
    <Explanation>{description}</Explanation>

      <ChallengeField className='lights-out'>
        {
          [ ...Array(NUM_SQUARES * NUM_SQUARES).keys() ].map((n) => {
            if (n === 0) {
              return(
                <input
                  className={`square n${n} origin`}
                  key={n}
                  onClick={toggleOrigin}
                  onMouseUp={(e) => e.target.blur()}
                  ref={setRef}
                  type='checkbox'
                />
                );
            } else if (n <= (NUM_SQUARES - 1) || n % NUM_SQUARES === 0) {
              return (
                <input
                  className={`square n${n}`}
                  key={n}
                  onMouseUp={(e) => e.target.blur()}
                  ref={setRef}
                  type='checkbox'
                />
              );
            } else {
              return (
                <div className={`square n${n}`} key={n} />
              );
            }
          })
        }
      </ChallengeField>
    </StyledLightsOut>
  );
}

import React from 'react';
import styled from 'styled-components';

import { usePaletteContext } from '../../../context/palette_provider';

import { ChallengeField } from '../challenge_field';
import { Explanation } from '../explanation';

const NUM_CELLS = 400;

const StyledMonster = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .maze {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: ${({ $colors }) => $colors.primary};
    border-radius: 3px;
    overflow: hidden;
  }

  .monster {
    position: absolute;
    background: ${({ $colors }) => $colors.secondary};
    border-radius: 50%;
    z-index: 1;
    pointer-events: none;
    transition: all 0.5s ease-out;
  }

  .monster:after{
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    height: 25px;
    width: 25px;
    border: 1px solid ${({ $colors }) => $colors.secondary};
    border-radius: 50%;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    animation-name: ping;
  }

  @keyframes ping {
    from {
      transform: scale(1);
      opacity: 1;
    }

    to {
      transform: scale(3);
      opacity: 0;
    }
  }

  @media only screen and (max-width: 576px) {
    .maze {
      height: 300px;
      width: 300px;
    }

    .cell {
      height: 15px;
      width: 15px;
    }

    ${() => {
      let cells = '';
      for (let idx = 1; idx < NUM_CELLS; idx++) {
        let vertical = ((idx % 20) * 15) - 138;
        let horizontal = (Math.floor(idx / 20) * 15) - 138;

        if (vertical > 140) {
          vertical = vertical - 15;
        }
        if (horizontal > 140) {
          horizontal = horizontal - 15;
        }

        cells += `
          .cell.n${idx}:hover ~ .monster {
            transform: translate(${vertical}px, ${horizontal}px);
            transition: all 0.3s ease-out;
          }
        `;
      }

      return cells;
    }}

    .monster {
      top: 138px;
      left: 138px;
      height: 30px;
      width: 30px;
    }

    .monster:after {
      top: -1px;
      left: -1px;
      height: 30px;
      width: 30px;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 767px) {
    .maze {
      height: 400px;
      width: 400px;
    }

    .cell {
      height: 20px;
      width: 20px;
    }

    ${() => {
      let cells = '';
      for (let idx = 1; idx < NUM_CELLS; idx++) {
        let vertical = ((idx % 20) * 20) - 190;
        let horizontal = (Math.floor(idx / 20) * 20) - 190;

        if (vertical > 180) {
          vertical = vertical - 5;
        }
        if (horizontal > 180) {
          horizontal = horizontal - 5;
        }

        cells += `
          .cell.n${idx}:hover ~ .monster {
            transform: translate(${vertical}px, ${horizontal}px);
            transition: all 0.3s ease-out;
          }
        `;
      }

      return cells;
    }}

    .monster {
      top: 190px;
      left: 190px;
      height: 25px;
      width: 25px;
    }

    .monster:after {
      top: -1px;
      left: -1px;
      height: 25px;
      width: 25px;
    }
  }

  @media only screen and (min-width: 768px) {
    .maze {
      height: 500px;
      width: 500px;
    }

    .cell {
      height: 25px;
      width: 25px;
    }

    ${() => {
      let cells = '';
      for (let idx = 1; idx < NUM_CELLS; idx++) {
        let vertical = ((idx % 20) * 25) - 238;
        let horizontal = (Math.floor(idx / 20) * 25) - 238;

        cells += `
          .cell.n${idx}:hover ~ .monster {
            transform: translate(${vertical}px, ${horizontal}px);
            transition: all 0.3s ease-out;
          }
        `;
      }

      return cells;
    }}

    .monster {
      top: 238px;
      left: 238px;
      height: 25px;
      width: 25px;
    }

    .monster:after {
      top: -1px;
      left: -1px;
      height: 25px;
      width: 25px;
    }
  }
`;

const description = <>
  <p>Hover over the playing field to flee!</p>
  <p>(works best in Chromium-based browsers)</p>
  <div className='explanation-line' />
  <p>This challenge was actually a lot simplier than I thought it would be.</p>
  <p>I racked my brain for a while trying to figure out how to pass the cursor position to the chasing circle. Eventually I decided to break the field into a grid of squares, then use SCSS and math to loop through the grid and reverse engineer the coordinate positioning of each square.</p>
  <p>I thought this was cheating, but after looking at how the demo template was created I saw it was done in almost exactly the same way. So... if it is cheating, then teacher cheated too :D</p>
  <p>The only JS used is to create the grid. All positioning data is calculated in CSS from the index number of each square.</p>
</>;

export function Monster() {
  const { currentPalette } = usePaletteContext();

  return (
    <StyledMonster $colors={currentPalette}>
      <Explanation number='49'>{description}</Explanation>

      <ChallengeField className='maze'>
        {
          [ ...Array(NUM_CELLS).keys() ].map((idx) => (
            <div
              className={`cell n${idx}`}
              key={idx}
            />
          ))
        }
        <div className='monster' />
      </ChallengeField>
    </StyledMonster>
  );
};

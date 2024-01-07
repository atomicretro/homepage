import React from 'react';
import styled from 'styled-components';

import { usePaletteContext } from '../../../context/palette_provider';

import { ChallengeField } from '../challenge_field';
import { Explanation } from '../explanation';

const StyledAlien = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .alien {
    height: 300px;
    width: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #ffffff;
    border: 1px solid ${({ $colors }) => $colors.primary};
  }

  .pixel {
    appearance: none;
    outline: 0;
    height: 15px;
    width: 15px;
    background: #ffffff;
    margin: 0;
    cursor: pointer;

    &:checked {
      background: ${({ $colors }) => $colors.secondary};
      border: 1px solid ${({ $colors }) => $colors.primary};
    }
    &:focus {
      background: ${({ $colors }) => $colors.tertiary};
      border: 1px solid ${({ $colors }) => $colors.primary};
    }
  }

  @media only screen and (min-width: 768px) {
    .alien {
      height: 400px;
      width: 400px;
    }

    .pixel {
      height: 20px;
      width: 20px;
    }
  }
`;

const unchecked = {
  129: true,    186: true,    212: true,
  130: true,    187: true,    213: true,
  148: true,    189: true,    228: true,
  149: true,    190: true,    231: true,
  150: true,    192: true,    247: true,
  151: true,    193: true,    249: true,
  167: true,    206: true,    250: true,
  168: true,    207: true,    252: true,
  169: true,    208: true,    266: true,
  170: true,    209: true,    268: true,
  171: true,    210: true,    271: true,
  172: true,    211: true,    273: true,
};

const description = <>
  <p>Click the squares to swap them on and off.</p>
  <div className='explanation-line' />
  <p>At first I had no idea how I was going to complete this challenge, and walked away from it to do other things. Hours later, thinking about something else entirely, it hit me: "they're all checkboxes!"</p>
  <p>Once I realized that, writing the code was straightforward. I used JS to create the series of checkboxes, but then used vanilla CSS to arrange them and style them into pixels.</p>
  <p>The default image was brute-forced by figuring out which pixels are white in the demo template, and simply marking them "unchecked" as they are generated. It's low-tech, but since the default image is static I don't mind cheesing it a bit.</p>
</>;

export function Alien() {
  const { currentPalette } = usePaletteContext();

  return (
    <StyledAlien $colors={currentPalette}>
      <Explanation number='47'>{description}</Explanation>

      <ChallengeField className='alien'>
        {
          [ ...Array(400).keys() ].map((idx) => (
            <input
              className='pixel'
              defaultChecked={!unchecked[idx]}
              key={idx}
              onMouseUp={(e) => e.target.blur()}
              type='checkbox'
            />
          ))
        }
      </ChallengeField>
    </StyledAlien>
  );
};

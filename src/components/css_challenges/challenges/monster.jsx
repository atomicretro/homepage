import React from 'react';
import styled from 'styled-components';

import { usePaletteContext } from '../../../context/palette_provider';

import { ChallengeField } from '../challenge_field';
import { Explanation } from '../explanation';

const StyledMonster = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .monster {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #2c3e50;
    border-radius: 3px;
    overflow: hidden;
  }

  .chaser {
    position: absolute;
    background: #2ecc71;
    border-radius: 50%;
    z-index: 1;
    pointer-events: none;
    transition: all 0.5s ease-out;
  }

  .chaser:after{
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    height: 25px;
    width: 25px;
    border: 1px solid #2ecc71;
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
    .css-monster {
      height: 300px;
      width: 300px;
    }

    .css-monster__square {
      height: 15px;
      width: 15px;
    }

    /* @for $idx from 0 to 400 {
      .css-monster__square--#{$idx}:hover ~ .chaser {
        $vert: (($idx % 20) * 15) - 138;
        $horz: (floor($idx / 20) * 15) - 138;

        @if $vert > 140 {
          $vert: $vert - 15;
        }
        @if $horz > 140 {
          $horz: $horz - 15;
        }

        transform: translate(#{$vert}px, #{$horz}px);
        transition: all 0.3s ease-out;
      }
    } */

    .chaser {
      top: 138px;
      left: 138px;
      height: 30px;
      width: 30px;
    }

    .chaser:after {
      top: -1px;
      left: -1px;
      height: 30px;
      width: 30px;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 767px) {
    .css-monster {
      height: 400px;
      width: 400px;
    }

    .css-monster__square {
      height: 20px;
      width: 20px;
    }

    /* @for $idx from 0 to 400 {
      .css-monster__square--#{$idx}:hover ~ .chaser {
        $vert: (($idx % 20) * 20) - 190;
        $horz: (floor($idx / 20) * 20) - 190;

        @if $vert > 180 {
          $vert: $vert - 5;
        }
        @if $horz > 180 {
          $horz: $horz - 5;
        }

        transform: translate(#{$vert}px, #{$horz}px);
        transition: all 0.3s ease-out;
      }
    } */

    .chaser {
      top: 190px;
      left: 190px;
      height: 25px;
      width: 25px;
    }

    .chaser:after {
      top: -1px;
      left: -1px;
      height: 25px;
      width: 25px;
    }
  }

  @media only screen and (min-width: 768px) {
    .css-monster {
      height: 500px;
      width: 500px;
    }

    .css-monster__square {
      height: 25px;
      width: 25px;
    }

    /* @for $idx from 0 to 400 {
      .css-monster__square--#{$idx}:hover ~ .chaser {
        $vert: (($idx % 20) * 25) - 238;
        $horz: (floor($idx / 20) * 25) - 238;

        transform: translate(#{$vert}px, #{$horz}px);
        transition: all 0.3s ease-out;
      }
    } */

    .chaser {
      top: 238px;
      left: 238px;
      height: 25px;
      width: 25px;
    }

    .chaser:after {
      top: -1px;
      left: -1px;
      height: 25px;
      width: 25px;
    }
  }
`;

const description = <>
  <p>This challenge was actually a lot simplier than I thought it would be.</p>
  <p>I racked my brain for a while trying to figure out how to pass the cursor position to the chasing circle. Eventually I decided to break the field into a grid of squares, then use SCSS and math to loop through the grid and reverse engineer the coordinate positioning of each square.</p>
  <p>I thought this was cheating, but after looking at how the demo template was created I saw it was done in almost exactly the same way. So... if it is cheating, then teacher cheated too :D</p>
  <p>The only JS used is to create the grid. All positioning data is calculated in SCSS from the index number of each square.</p>
</>;

const Monster = () => {
  const { currentPalette } = usePaletteContext();

  return (
    <StyledMonster $colors={currentPalette}>
      <Explanation number='49'>{description}</Explanation>
      <ChallengeField className='monster'>
        {
          [ ...Array(400).keys() ].map((idx) => (
            <div
              className={ `css-monster__square css-monster__square--${idx}` }
              key={idx}
            />
          ))
        }
        <div className='chaser' />
      </ChallengeField>
    </StyledMonster>
  );
};

export default Monster;

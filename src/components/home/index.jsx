import React from 'react';
import styled from 'styled-components';

import { usePaletteContext } from '../../context/palette_provider';

import PaletteCard from './palette_card';
import { OutsideLink } from '../library/links/outside_link';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20px 0 0 0;

  &::after {
    content: 'buffer zone';
    height: 10px;
    width: 100%;
    background: #ffffff;
    opacity: 0;
  }

  h2 {
    font-size: 30px;
    text-align: center;
  }

  .paints {
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: 30px;
    margin: 40px 0 0 0;
  }

  .acknowledgment {
    align-self: flex-end;
    font-size: 12px;
    margin: 30px 0 0 0;
  }

  .palette_card {
    @include button-no-style;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }

  .palette_card__img {
    max-height: 50px;
    max-width: 50px;
    margin: 0 10px 0 0;
  }

  .palette_card__desc {
    font-size: 24px;
  }

  .palette_card.palette_card--NIGHTSKY {
    color: #000000;
    &:focus, &:hover,
    &.palette_card--selected {
      color: $NIGHTSKY-quaternary;
    }
  }

  .palette_card.palette_card--PASTEL {
    color: #000000;
    &:focus, &:hover,
    &.palette_card--selected {
      color: $PASTEL-secondary;
    }
  }

  .palette_card.palette_card--GRANDMA {
    color: #000000;
    &:focus, &:hover,
    &.palette_card--selected {
      color: $GRANDMA-secondary;
    }
  }

  .palette_card.palette_card--MARS {
    color: #000000;
    &:focus, &:hover,
    &.palette_card--selected {
      color: $MARS-secondary;
    }
  }

  .palette_card.palette_card--PURPLY {
    color: #000000;
    &:focus, &:hover,
    &.palette_card--selected {
      color: $PURPLY-secondary;
    }
  }

  .palette_card.palette_card--VIVID {
    color: #000000;
    &:focus, &:hover,
    &.palette_card--selected {
      color: $VIVID-secondary;
    }
  }

  .palette_card.palette_card--FOREST {
    color: #000000;
    &:focus, &:hover,
    &.palette_card--selected {
      color: $FOREST-secondary;
    }
  }

  .palette_card.palette_card--RHENIUM {
    color: #000000;
    &:focus, &:hover,
    &.palette_card--selected {
      color: $RHENIUM-secondary;
    }
  }

  .palette_card.palette_card--SEWERS {
    color: #000000;
    &:focus, &:hover,
    &.palette_card--selected {
      color: $SEWERS-tertiary;
    }
  }

  .palette_card.palette_card--NIKAIDO {
    color: #000000;
    &:focus, &:hover,
    &.palette_card--selected {
      color: $NIKAIDO-secondary;
    }
  }

  .palette_card.palette_card--SEPIA {
    color: #000000;
    &:focus, &:hover,
    &.palette_card--selected {
      color: $SEPIA-secondary;
    }
  }

  .palette_card.palette_card--WETLAND {
    color: #000000;
    &:focus, &:hover,
    &.palette_card--selected {
      color: $WETLAND-secondary;
    }
  }

  .palette_card.palette_card--NOSTALGIA {
    color: #000000;
    &:focus, &:hover,
    &.palette_card--selected {
      color: $NOSTALGIA-secondary;
    }
  }

  @media only screen and (min-width: 768px) {
    .paints {
      grid-template-columns: repeat(2, auto);
      grid-column-gap: 60px;
    }

    .acknowledgment {
      margin: 20px 0 0 0;
    }
  }

  @media only screen and (min-width: 992px) {
    .paints {
      grid-template-columns: repeat(3, auto);
      grid-row-gap: 40px;
    }
  }

  @media only screen and (min-width: 1200px) {
    .paints {
      grid-template-columns: repeat(4, auto);
      grid-row-gap: 50px;
    }
  }

  @media only screen and (min-width: 1440px) {
    .paints {
      grid-template-columns: repeat(5, auto);
      grid-row-gap: 60px;
    }
  }
`;

export function Home({ isHidden, currentPalette, setPalette }) {
  const { paletteNames } = usePaletteContext();

  return (
    <StyledHome>
      <h2>Paint the sky</h2>

      <div className='paints'>
        {
          paletteNames.map((palette) => (
            <PaletteCard
              isHidden={isHidden}
              isSelected={palette === currentPalette}
              key={palette}
              palette={palette}
              setPalette={setPalette}
            />
          ))
        }
      </div>

      <span className='acknowledgment'>
        Color palettes inspired by <OutsideLink to='https://downwellgame.com/'>downwell</OutsideLink>
      </span>
    </StyledHome>
  );
}

import React from 'react';
import styled from 'styled-components';

import { usePaletteContext } from '../../context/palette_provider';

import { PaletteCard } from './palette_card';
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

export function Home() {
  const { palettes } = usePaletteContext();

  return (
    <StyledHome>
      <h2>Paint the sky</h2>

      <div className='paints'>
        { palettes.map((palette) => (
          <PaletteCard key={palette.name} palette={palette} />
        )) }
      </div>

      <span className='acknowledgment'>
        Color palettes inspired by <OutsideLink to='https://downwellgame.com/'>downwell</OutsideLink>
      </span>
    </StyledHome>
  );
}

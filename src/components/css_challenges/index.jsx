import React from 'react';
import styled from 'styled-components';

import { OutsideLink } from '../library/links/outside_link';
import { RouterLink } from '../library/links/router_link';

const StyledCSSChallenges = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    "header header"
    "column1 column2";
  row-gap: 25px;

  .header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 28px;
      margin: 0 0 10px 0;
    }

    span {
      width: 60%;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
    }
  }

  .column {
    display: flex;
    flex-direction: column;
    align-items: center;

    &.c1 { grid-area: column1; }
    &.c2 { grid-area: column2; }

    span {
      font-size: 10px;
      margin: 0 0 20px 0;

      a {
        font-size: 10px;
      }
    }

    a {
      font-size: 30px;
      margin: 0 0 20px 0;
    }
  }
`;

export function CSSChallenges() {
  return (
    <StyledCSSChallenges>
      <div className='header'>
        <h2>CSS-Only Challenges</h2>
        <span>
          Each of the below images, animations, and interactions was made entirely in CSS, unless otherwise stated in its explanation.
        </span>
      </div>

      <div className='column c1'>
        <span>
          From <OutsideLink to='https://100dayscss.com/'>100 Days CSS Challenge</OutsideLink>
        </span>

        <RouterLink to='/css/alien'>alien</RouterLink>
        <RouterLink to='/css/clock'>clock</RouterLink>
        <RouterLink to='/css/flower'>flower</RouterLink>
        <RouterLink to='/css/hover'>hover</RouterLink>
        <RouterLink to='/css/monster'>monster</RouterLink>
        <RouterLink to='/css/segments'>segments</RouterLink>
      </div>

      <div className='column c2'>
        <span>
          From my brain
        </span>

        <RouterLink to='/css/lights-out'>light board</RouterLink>
      </div>
    </StyledCSSChallenges>
  );
};

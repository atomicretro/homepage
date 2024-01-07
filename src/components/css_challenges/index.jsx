import React from 'react';
import styled from 'styled-components';

import { OutsideLink } from '../library/links/outside_link';
import { RouterLink } from '../library/links/router_link';

const StyledCSSChallenges = styled.div`
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 28px;
      margin: 0 0 10px 0;
    }

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
      <div className='column'>
        <h2>CSS Challenges</h2>

        <span>
          From <OutsideLink to='https://100dayscss.com/'>100 Days CSS Challenge</OutsideLink>
        </span>

        <RouterLink to='/css/alien'>alien</RouterLink>
        <RouterLink to='/css/clock'>clock</RouterLink>
        <RouterLink to='/css/hover'>hover</RouterLink>
        <RouterLink to='/css/monster'>monster</RouterLink>
        <RouterLink to='/css/segments'>segments</RouterLink>
      </div>
    </StyledCSSChallenges>
  );
};

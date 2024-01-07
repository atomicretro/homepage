import React from 'react';
import styled from 'styled-components';

import { OutsideLink } from '../library/links/outside_link';

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-size: 30px;
    margin: 0 0 60px 0;

    &:last-child {
      margin: 0;
    }
  }
`;

export function Contact() {
  return (
    <StyledContact>
      <OutsideLink to='mailto:ajcuccia+dev@gmail.com'>Email</OutsideLink>
      <OutsideLink to='https://www.github.com/atomicretro'>GitHub</OutsideLink>
      <OutsideLink to='https://www.linkedin.com/in/alec-cuccia'>LinkedIn</OutsideLink>
    </StyledContact>
  );
}

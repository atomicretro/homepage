import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 0 0;

  a {
    font-size: 30px;
    margin: 0 0 60px 0;

    &:last-child {
      margin: 0;
    }
  }
`;

export function Contact({ isHidden }) {
  const handleMouseUp = (e) => {
    e.currentTarget.blur();
  }

  const tabIndex = isHidden ? '-1' : '0';

  return(
    <StyledContact>
      <a
        href='mailto:ajcuccia+dev@gmail.com'
        onMouseUp={ handleMouseUp }
        tabIndex={ tabIndex }
      >
        Email
      </a>

      <a
        href='https://www.github.com/atomicretro'
        onMouseUp={ handleMouseUp }
        rel='noopener noreferrer'
        tabIndex={ tabIndex }
        target='_blank'
      >
        GitHub
      </a>

      <a
        href='https://www.linkedin.com/in/alec-cuccia'
        onMouseUp={ handleMouseUp }
        rel='noopener noreferrer'
        tabIndex={ tabIndex }
        target='_blank'
      >
        LinkedIn
      </a>
    </StyledContact>
  );
}

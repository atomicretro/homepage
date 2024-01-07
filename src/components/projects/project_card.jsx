import React from 'react';
import styled from 'styled-components';

import { OutsideLink } from '../library/links/outside_link';

const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 40px 0;

  img {
    max-width: 100%;
    object-fit: contain;
    margin: 0 0 10px 0;
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 28px;
    margin: 0 0 10px 0;
  }

  .description p {
    font-size: 16px;
    margin: 0 0 10px 0;
  }
  .description p:last-child {
    margin: 0;
  }

  @media only screen and (min-width: 768px) {
    img {
      max-width: 400px;
    }
  }

  @media only screen and (min-width: 992px) {
    flex-direction: row;

    img {
      max-width: 300px;
      margin: 0 20px 0 0;
    }
  }
`;

export function ProjectCard(props) {
  const {
    desc,
    imgDesc,
    imgSrc,
    link,
    title,
  } = props;

  return (
    <StyledProjectCard>
      <OutsideLink to={link}>
        <img
          alt={imgDesc}
          className='project_card__img'
          src={`${process.env.PUBLIC_URL}/projects/${imgSrc}`}
        />
      </OutsideLink>

      <div className='info'>
        <h2 className='title'>{title}</h2>
        <div className='description'>
          {desc}
          <p>Live link: <OutsideLink to={link}>{title}</OutsideLink></p>
        </div>
      </div>
    </StyledProjectCard>
  );
}

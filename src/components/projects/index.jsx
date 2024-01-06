import React from 'react';
import styled from 'styled-components';

import { ProjectCard } from './project_card';

const StyledProjects = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 0;

  @media only screen and (min-width: 992px) {
    .projects {
      margin: 40px 0 0 0;
    }
  }
`;

const projectsList = [
  {
    desc: <>
      <p>Neon Circles is a claustrophobic shoot-em-up in the likeness of Space Invaders and Asteroids. You are stuck on the inside of a circle and can only point towards the center. To shoot the demons shooting you, you must aim through the circle and out the other side.</p>
      <p>Designed and built in a week, Neon Circles is both a love letter to the shoot-em-up genre and the first draft of a larger idea. It was coded solely in JS and is drawn on Canvas. All game mechanics and sprites were designed from scratch.</p>
    </>,
    imgDesc: 'The words "Neon Circles" in an 80\'s style font, inside a thin circle',
    imgSrc: 'neon_circles.png',
    link: 'https://atomicretro.github.io/neon_circles/',
    title: 'Neon Circles',
  },
];

export function Projects({ isHidden }) {
  const tabIndex = isHidden ? '-1' : '0';

  return (
    <StyledProjects>
      { projectsList.map((project) => (
        <ProjectCard {...project} key={project.title} tabIndex={ tabIndex } />
      )) }
    </StyledProjects>
  );
}

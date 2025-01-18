import React from 'react';
import styled from 'styled-components';

import { ProjectCard } from './project_card';

const StyledProjects = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const projectsList = [
  {
    desc: <>
      <p>Nonograms are puzzles that are kind of like a half-way point between sudoku and minesweeper. They are incredibly fun! While there are a lot of nonogram apps and websites out there, none played exactly how I wanted them to. Thus, I made my own.</p>
      <p>My nonograms web app is made entirely in React, leveraging the React component lifecycle to act a game engine. Why? No other reason than to see if I could. The results are pretty good, if I do say so myself!</p>
    </>,
    imgDesc: 'The word \'nonograms\' in a pixelated font.',
    imgSrc: 'nonograms.png',
    link: 'https://scarygrapefruit.gitlab.io/nonograms/',
    title: 'Nonograms',
  },
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
  {
    desc: <>
      <p>I like CSS. I like CSS <strong>a lot</strong>. I've found various CSS-only challenges across the Internet, and when one piques my interest I can't help but take a stab at it.</p>
    </>,
    imgDesc: 'The CSS3 Logo',
    imgSrc: 'css.png',
    link: '/css-challenges',
    title: 'CSS-Only Challenges',
  },
];

export function Projects() {
  return (
    <StyledProjects>
      { projectsList.map((project) => (
        <ProjectCard key={project.title} {...project} />
      )) }
    </StyledProjects>
  );
}

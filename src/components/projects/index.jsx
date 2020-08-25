import React from 'react';

import ProjectCard from './project_card';

import '../../css/projects.css';

const neonCirclesDesc = (
  <React.Fragment>
    <p>Neon Circles is a claustrophobic shoot-em-up in the likeness of Space Invaders and Asteroids. You are stuck on the inside of a circle and can only point towards the center. To shoot the demons shooting you, you must aim through the circle and out the other side.</p>
    <p>Designed and built in a week, Neon Circles is both a love letter to the shoot-em-up genre of games and the first draft of a larger idea. It was coded solely in JS and is drawn on Canvas. All game mechanics and sprites were designed by scratch. Background music credit goes to Pedro Santiago.</p>
    <p>Live link: <a href='http://aleccuccia.com/neon_circles'>Neon Circles</a></p>
  </React.Fragment>
);

const Projects = () => {
  return (
    <div className='projects'>
      <ProjectCard
        desc={ neonCirclesDesc }
        header='Neon Circles'
        imgDesc='Logo for Neon Circles'
        imgSrc='/neon_circles-logo.png'
      />
      <ProjectCard
        desc={ neonCirclesDesc }
        header='Neon Circles'
        imgDesc='Logo for Neon Circles'
        imgSrc='/neon_circles-logo.png'
      />
      <ProjectCard
        desc={ neonCirclesDesc }
        header='Neon Circles'
        imgDesc='Logo for Neon Circles'
        imgSrc='/neon_circles-logo.png'
      />
    </div>
  );
}

export default Projects;

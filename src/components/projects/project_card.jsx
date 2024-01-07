import React from 'react';

const ProjectCard = ({ desc, header, imgDesc, imgSrc, projectLink }) => {
  return (
    <div className='project_card'>
      <a href={ projectLink } rel='noopener noreferrer' target='_blank'>
        <img alt={ imgDesc } className='project_card__img' src={ imgSrc } />
      </a>
      <div className='project_card__info'>
        <h2 className='project_card__info__title'>{ header }</h2>
        <div className='project_card__info__desc'>{ desc }</div>
      </div>
    </div>
  );
}

export default ProjectCard;

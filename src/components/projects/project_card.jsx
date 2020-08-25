import React from 'react';

const ProjectCard = ({ desc, header, imgDesc, imgSrc }) => {
  return (
    <div className='project_card'>
      <img alt={ imgDesc } className='project_card__img' src={ imgSrc } />
      <div className='project_card__info'>
        <h2 className='project_card__info__title'>{ header }</h2>
        <div className='project_card__info__desc'>{ desc }</div>
      </div>
    </div>
  );
}

export default ProjectCard;

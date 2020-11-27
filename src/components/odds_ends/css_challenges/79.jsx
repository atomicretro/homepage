import React, { useContext, useEffect } from 'react';

import AppContext from '../../../context/app_context';

import '../../../scss/css_challenges/79.scss';

const Challenge79 = () => {
  useEffect(() => {
    console.log('Oh hello!');
    console.log('I completed this challenge using flexbox and height / width manipulation on CSS events. Flexbox keeps the colored boxes organized and in place while :focus and :hover events increase the hovered box\'s dimensions.');
    console.log('The animations are done entirely in CSS; the only JS used is to blur a box on mouse up to ensure wayward clicks don\'t cause two boxes to expand at once.');
    console.log('The animations are fully responsive and work with both mouse and keyboard.');
    console.log('If you like what you see please check out my other work at https://www.aleccuccia.dev!');
    console.log('Challenge: https://100dayscss.com/?dayIndex=79');
  }, []);

  const { setComingFromOddsAndEnds } = useContext(AppContext);
  useEffect(() => {
    return () => {
      setComingFromOddsAndEnds(true);
      console.clear();
    }
  });

  return (
    <div className='css-challenge-79'>
      <div
        className='css-challenge-79__box css-challenge-79__dark'
        onMouseUp={ (e) => { e.target.blur(); } }
        tabIndex='0'>
        <span>FIRST</span>
      </div>
      <div
        className='css-challenge-79__box css-challenge-79__light'
        onMouseUp={ (e) => { e.target.blur(); } }
        tabIndex='0'>
        <span>SECOND</span>
      </div>
      <div
        className='css-challenge-79__box css-challenge-79__dark'
        onMouseUp={ (e) => { e.target.blur(); } }
        tabIndex='0'>
        <span>THIRD</span>
      </div>
      <div
        className='css-challenge-79__box css-challenge-79__light'
        onMouseUp={ (e) => { e.target.blur(); } }
        tabIndex='0'>
        <span>FOURTH</span>
      </div>
    </div>
  );
};

export default Challenge79;

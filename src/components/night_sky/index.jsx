import React from 'react';

import '../../css/night-time.css';

const randomIntMinMax = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomFloatMinMax = (min, max) => {
  return Math.random() * (max - min) + min;
}

class NightTime extends React.PureComponent {
  render() {
    const NUM_STARS = 1000;
    const stars = [];
    for (let idx = 0; idx < NUM_STARS; idx++) {
      const size = randomIntMinMax(1, 3);
      stars.push(
        <div
          className='star'
          key={ `star-${idx}` }
          style={{
            height: `${size}px`,
            width: `${size}px`,
            top: `${randomFloatMinMax(1, 99.7)}vh`,
            left: `${randomFloatMinMax(1, 99.6)}vw`,
            animationDuration: `${randomFloatMinMax(10, 21)}s`,
            animationIterationCount: 'infinite',
          }}
        />
      );
    }

    return (
      <section className='night-sky'>
        { stars }
        { /* <div className='comet' /> */ }
      </section>
    );
  }
}

export default NightTime;

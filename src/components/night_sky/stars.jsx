import React, { useEffect, useRef, useState } from 'react';

import { primaryColors, secondaryColors } from '../../utils/colors';
import { randomFloatMinMax, randomIntMinMax } from '../../utils/math';
import { setCanvasDimensions } from '../../utils/canvas';

import '../../scss/night-sky.scss';

const NUM_STARS = 1000;

class Star {
  constructor({ x, y, size, alpha, alphaStep }) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.alpha = alpha;
    this.alphaStep = alphaStep;
  }

  updateAlpha = () => {
    let newAlpha = this.alpha + this.alphaStep;

    if (newAlpha >= 1) {
      newAlpha = 1;
      this.alphaStep = this.alphaStep * -1;
    } else if (newAlpha <= 0) {
      newAlpha = 0;
      this.alphaStep = this.alphaStep * -1;
    }

    this.alpha = newAlpha;
    // this.x = this.x + 1;
    // this.y = this.y + 1;
  }
}

const StarField = React.memo((props) => {
  const { currentPalette } = props;
  const ref = useRef();
  const [allStars, populateAllStars] = useState([]);

  useEffect(() => {
    console.log('1');
    // Set aspect ratio
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    setCanvasDimensions(canvas, ctx);
  }, []);

  useEffect(() => {
    console.log('2');
    // Determine star coordinates
    const canvas = ref.current;
    const stars = [];

    for (let idx = 0; idx < NUM_STARS; idx++) {
      const star = new Star({
        x: randomIntMinMax(1, canvas.width),
        y: randomIntMinMax(1, canvas.height),
        size: randomIntMinMax(1, 5),
        alpha: randomFloatMinMax(0, 1),
        alphaStep: randomIntMinMax(1, 11) / 2000,
      });
      stars.push(star);
    }

    populateAllStars(stars);
  }, []);

  useEffect(() => {
    console.log('3');
    // Animate stars
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let requestId;

    const render = () => {
      for (let idx = 0; idx < allStars.length; idx++) {
        const star = allStars[idx];

        // Erase previous frame's star
        ctx.fillStyle = primaryColors[currentPalette];
        ctx.fillRect(star.x, star.y, star.size, star.size);
        ctx.fill();

        // Update current star's alpha
        star.updateAlpha();

        // Draw star
        ctx.fillStyle = secondaryColors[currentPalette];
        ctx.globalAlpha = star.alpha;
        ctx.fillRect(star.x, star.y, star.size, star.size);
        ctx.fill();
      }

      // Request the next animation frame
      requestId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return (
    <canvas
      className='night-sky'
      ref={ ref }
    />
  );
});

export default StarField;

import React, { useEffect, useRef, useState } from 'react';

import { primaryColors, secondaryColors } from '../../utils/colors';
import { randomIntMinMax } from '../../utils/math';
import { setCanvasDimensions } from '../../utils/canvas';

import '../../scss/night-sky.css';

const NUM_STARS = 1000;

class Star {
  constructor({ x, y, size, alpha, alphaStep, alphaDirection }) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.alpha = alpha;
    this.alphaStep = alphaStep;
    this.alphaDirection = alphaDirection;
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
  }
}

const StarField = React.memo(({ currentPalette }) => {
  const ref = useRef();
  const [allStars, populateAllStars] = useState([]);

  useEffect(() => {
    // Set aspect ratio
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    setCanvasDimensions(canvas, ctx);
  }, []);

  useEffect(() => {
    // Determine star coordinates
    const canvas = ref.current;
    const stars = [];

    for (let idx = 0; idx < NUM_STARS; idx++) {
      let alphaStep = randomIntMinMax(5, 11) / 3000;
      alphaStep *= randomIntMinMax(1, 3) === 1 ? -1 : 1;
      const star = new Star({
        x: randomIntMinMax(1, canvas.width),
        y: randomIntMinMax(1, canvas.height),
        size: randomIntMinMax(1, 5),
        alpha: 0,
        alphaStep,
      });
      stars.push(star);
    }

    populateAllStars(stars);
  }, []);

  useEffect(() => {
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

  return <canvas className='stars' ref={ ref } />;
});

export default StarField;

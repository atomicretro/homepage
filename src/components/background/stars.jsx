import React from 'react';
import styled from 'styled-components';

import { randomIntMinMax } from '../../utils/math';
import { setCanvasDimensions } from '../../utils/canvas'

const NUM_STARS = 1000;

const StyledStarField = styled.canvas`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -4;
`;

class Star {
  constructor({ alpha, alphaStep, size, x, y }) {
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
  }
}

export function StarField(props) {
  const { currentPalette } = props;
  const ref = React.useRef();
  const [allStars, populateAllStars] = React.useState([]);

  React.useEffect(() => {
    // Set aspect ratio
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    setCanvasDimensions(canvas, ctx);
  }, []);

  React.useEffect(() => {
    // Determine star coordinates
    const canvas = ref.current;
    const stars = [];

    for (let idx = 0; idx < NUM_STARS; idx++) {
      let alphaStep = randomIntMinMax(5, 12) / 3000;
      alphaStep *= randomIntMinMax(1, 3) === 1 ? -1 : 1;
      const star = new Star({
        alpha: Math.random(),
        alphaStep,
        size: randomIntMinMax(1, 5),
        x: randomIntMinMax(1, canvas.width),
        y: randomIntMinMax(1, canvas.height),
      });
      stars.push(star);
    }

    populateAllStars(stars);
  }, []);

  React.useEffect(() => {
    // Animate stars
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let requestId;

    const render = () => {
      for (let idx = 0; idx < allStars.length; idx++) {
        const star = allStars[idx];

        // Erase previous frame's star
        ctx.fillStyle = currentPalette.primary;
        ctx.fillRect(star.x, star.y, star.size, star.size);
        ctx.fill();

        // Update current star's alpha
        star.updateAlpha();

        // Draw star
        ctx.fillStyle = currentPalette.secondary;
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

  return <StyledStarField className='stars' ref={ref} />;
}

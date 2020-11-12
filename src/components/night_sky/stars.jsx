import React, { useEffect, useRef, useState } from 'react';

import { primaryColors, secondaryColors } from '../../utils/colors';
import { randomFloatMinMax, randomIntMinMax } from '../../utils/math';
import { setCanvasDimensions } from '../../utils/canvas';

import '../../scss/night-sky.scss';

const NUM_STARS = 3;

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
    // this.y = this.y + 1;
  }
  
  updatePos = ({ x: mouseX, y: mouseY, }) => {
    const slope = (mouseY - this.y) / (mouseX - this.x);
    const distance = Math.sqrt((this.x - mouseX) ** 2 + (this.y - mouseY) ** 2);
    const slopeX = this.x >= mouseX ? slope * -1 : slope;
    const slopeY = this.y >= mouseY ? slope * -1 : slope;
    console.log('mouseX - this.x', mouseX - this.x)
    this.x = this.x - mouseX;
    this.y = this.y - mouseY;
    // console.log('mouseX', mouseX)
    // console.log('mouseY', mouseY)
    // console.log('this.x', this.x)
    // console.log('this.y', this.y)
    // console.log('slope', slope)
    // console.log('distance', distance)
    // console.log('---')
  }
}

const StarField = React.memo(({ currentPalette, isCrazy }) => {
  const ref = useRef();
  const [allStars, populateAllStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    // Animate stars
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let requestId;

    const render = () => {

      const {
        top: canvasTop,
        right: canvasRight,
        bottom: canvasBottom,
        left: canvasLeft,
      } = canvas.getBoundingClientRect()
      const canvasX = (mousePosition.x - canvasLeft) / (canvasRight - canvasLeft) * canvas.width;
      const canvasY = (mousePosition.y - canvasTop) / (canvasBottom - canvasTop) * canvas.height;
      // ctx.fillStyle = 'green';
      // ctx.fillRect(canvasX, canvasY, 50, 50);
      // ctx.fill();

      for (let idx = 0; idx < allStars.length; idx++) {
        const star = allStars[idx];

        // Erase previous frame's star
        ctx.fillStyle = primaryColors[currentPalette];
        ctx.fillRect(star.x, star.y, star.size, star.size);
        ctx.fill();

        // Update current star's alpha
        star.updateAlpha();
        if (isCrazy) {
          star.updatePos({x:canvasX, y:canvasY});
          // console.log('canvasX, canvasY', canvasX, canvasY)
          // ctx.strokeStyle = 'green';
          // ctx.beginPath();
          // ctx.moveTo(star.x, star.y);
          // ctx.lineTo(canvasX, canvasY);
          // ctx.stroke();
          // console.log('star', star.x, star.y)
        }

        // Draw star
        ctx.fillStyle = secondaryColors[currentPalette];
        ctx.globalAlpha = star.alpha;
        ctx.fillRect(star.x, star.y, star.size, star.size);
        ctx.fill();
      }

      // Request the next animation frame
      requestId = requestAnimationFrame(render);
      // cancelAnimationFrame(requestId);
    };

    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  // onMouseMove={ (e) => { setMousePosition({ x: e.screenX, y: e.screenY }); } }
  return (
    <canvas
      className='stars'
      onMouseMove={ (e) => { setMousePosition({ x: e.clientX, y: e.clientY }); } }
      ref={ ref }
      />
  );
});

export default StarField;

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Noise } from 'noisejs';

import { randomIntMinMax } from '../../../utils/math';

import '../../../scss/squeebs.scss';

const canvasLength = 400;
const maxImages = 29;

const Squeebs = () => {
  const canvasRef = useRef();
  const anchorPointRef = useRef();
  const squeebRef = useRef();
  // const tabIndex = isHidden ? '-1' : '0';
  const [numImagesLoaded, setNumImagesLoaded] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 2, canvasLength);
    ctx.fillRect(0, 0, canvasLength, 2);
    ctx.fillRect(canvasLength - 2, 0, 2, canvasLength);
    ctx.fillRect(0, canvasLength - 2, canvasLength, 2);
    ctx.fill();

    anchorPointRef.current = drawAnchorPoints(ctx);
    squeebRef.current = loadSqueebs(setNumImagesLoaded);
  }, []);

  if (numImagesLoaded === maxImages) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    for (const [xPoint, yPoint] of anchorPointRef.current) {
      const imageIdx = randomIntMinMax(0, squeebRef.current.length);
      ctx.drawImage(squeebRef.current[imageIdx], xPoint - 50, yPoint - 50, 100, 100);
    }
  }

  return (
    <div>
      <canvas
        className='squeebs__canvas'
        height={ canvasLength }
        ref={ canvasRef }
        width={ canvasLength } />
      { numImagesLoaded } / 29
    </div>
  );
};

const drawAnchorPoints = (ctx) => {
  const allPoints = [];
  ctx.font = '30px Arial';
  for (let idx = 1; idx < 7; idx++) {
    const anchorPoint = [randomIntMinMax(10, 390), randomIntMinMax(10, 390)];
    ctx.fillText(idx, anchorPoint[0], anchorPoint[1]);
    allPoints.push(anchorPoint);
  }
  return allPoints;
};

const loadSqueebs = (setNumImagesLoaded) => {
  const allImages = [];
  for (let idx = 1; idx < 30; idx++) {
    const img = new Image();
    img.onload = function() {
      setNumImagesLoaded((prevNum) => prevNum += 1);
    };
    const src = `./squeebs/${idx < 10 ? `000${idx}` : `00${idx}`}.png`;
    img.src = src;
    allImages.push(img);
  }
  return allImages;
}

export default Squeebs;


// drawIslands = () => {
//   const {
//     thresholdValue,
//     dimensions: {
//       width,
//       height,
//     },
//   } = this.state;
// 
//   const noise = new Noise(Math.random());
//   for (let widthIdx = 0; widthIdx < width; widthIdx++) {
//     for (let heightIdx = 0; heightIdx < height; heightIdx++) {
//       let value = noise.simplex2(widthIdx / 100, heightIdx / 100);
//       this.ctx.fillStyle = value > thresholdValue ? '#f1e9d6' : '#a7c9e8';
//       this.ctx.fillRect(widthIdx, heightIdx, 1, 1);
//     }
//   }
// }

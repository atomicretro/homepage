import React, { useEffect, useMemo, useRef } from 'react';

import Maze from './maze';

import '../../scss/maze-runner.scss';

const mazeNodeLength = 7;
const mazePixelLength = 700;

const Background = React.memo(({ isHidden }) => {
  const ref = useRef();
  const tabIndex = isHidden ? '-1' : '0';
  const maze = useMemo(() => new Maze(mazeNodeLength, mazePixelLength), []);

  useEffect(() => {
    const canvas = ref.current;
    maze.setCanvas(canvas);
    maze.generate();

    window.maze = maze;
    // console.log(maze);
  }, [maze]);

  return (
    <canvas
      className='maze-runner__canvas'
      height={ mazePixelLength }
      ref={ ref }
      width={ mazePixelLength } />
  );
});

export default Background;

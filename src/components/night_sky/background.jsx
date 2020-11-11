import React, { useEffect, useRef} from 'react';

import { primaryColors } from '../../utils/colors';

import '../../scss/night-sky.scss';

const Background = React.memo((props) => {
  const { currentPalette } = props;
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = primaryColors[currentPalette];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill();
  }, [currentPalette]);

  return (
    <canvas
      className='night-sky'
      ref={ ref }
      style={ { width: '100vw', height: '100vh' } }
    />
  );
});

export default Background;

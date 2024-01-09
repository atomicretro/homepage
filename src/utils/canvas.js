const getPixelRatio = (ctx) => {
  const backingStore =
    ctx.backingStorePixelRatio ||
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1;

  return (window.devicePixelRatio || 1) / backingStore;
};

export const setCanvasDimensions = (canvas, ctx) => {
  const ratio = getPixelRatio(ctx);
  const width = getComputedStyle(canvas)
    .getPropertyValue('width')
    .slice(0, -2);
  const height = getComputedStyle(canvas)
    .getPropertyValue('height')
    .slice(0, -2);

  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
};

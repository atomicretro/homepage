export const randomIntMinMax = (min, max) => {
  // Inclusive of min, exclusive of max
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const randomFloatMinMax = (min, max) => {
  return Math.random() * (max - min) + min;
}

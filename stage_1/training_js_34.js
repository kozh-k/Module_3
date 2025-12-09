function cutCube(volume, n) {
   const bigSide = Math.cbrt(volume);
   const smallSide = Math.cbrt(volume / n);

   return Math.round(bigSide) === bigSide && Math.round(smallSide) === smallSide;
}

function oddBall(arr) {
   const indexOfOdd = arr.findIndex((element) => element === "odd");

   const hasArrayIndexOfOdd = arr.find((index) => index === indexOfOdd);

   return hasArrayIndexOfOdd === undefined
      ? false
      : true;
}

function sortIt(arr) {
   const sortedArr = [...arr].sort((a, b) => b - a);

   let matrix = [];

   for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] !== sortedArr[i + 1]) {
         matrix.push(sortedArr.slice(0, i + 1));

         sortedArr.splice(0, i + 1);
         
         i = -1;
      }
   }

   return matrix.sort((a, b) => a.length - b.length).flat();
}

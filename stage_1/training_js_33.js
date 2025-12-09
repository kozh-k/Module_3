function maxMin(arr1, arr2) {
   let differenceArray = [];
   let maxMinArray = [];

   for (let i = 0; i < arr1.length; i++) {
      differenceArray.push(Math.abs(arr1[i] - arr2[i]));
   }

   maxMinArray.push(Math.max(...differenceArray));
   maxMinArray.push(Math.min(...differenceArray));

   return maxMinArray;
}

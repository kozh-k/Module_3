function howManySmaller(arr, n) {
   let quantityOfSmallerNumbers = 0;

   for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i].toFixed(2)) < n) {
         quantityOfSmallerNumbers++;
      }
   }

   return quantityOfSmallerNumbers;
}

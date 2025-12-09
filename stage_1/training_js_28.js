function mirrorImage(arr) {
   let firstNumberOfResult = 0;
   let secondNumberOfResult = 0;

   const result = arr.some((number, index) => {
      firstNumberOfResult = number;
      const reverseNumber = number.toString().split("").reverse().join("");

      secondNumberOfResult = arr[index + 1];

      return (
         Number(reverseNumber) === secondNumberOfResult &&
         reverseNumber.length === secondNumberOfResult.toString().length
      );
   });

   return result ? [firstNumberOfResult, secondNumberOfResult] : [-1, -1];
}

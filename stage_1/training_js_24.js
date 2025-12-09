function threeInOne(arr) {
   let result = [];

   for (let i = 0; i < arr.length; i += 3) {
      [a, b, c] = arr.slice(i, i + 3);
      result.push(a + b + c);
   }

   return result;
}

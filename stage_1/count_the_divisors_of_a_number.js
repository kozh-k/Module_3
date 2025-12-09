function getDivisorsCnt(n) {
   if (n === 1) {
      return 1;
   }

   let numberOfDivisors = 0;

   const sqrt = Math.sqrt(n);

   for (let i = 1; i <= sqrt; i++) {
      if (n % i === 0) {
         i === sqrt ? (numberOfDivisors += 1) : (numberOfDivisors += 2);
      }
   }

   return numberOfDivisors;
}

"use strict";

async function findPrimes(start, end, chunkSize = 10000) {
   const startTime = performance.now();
   let primeNumbers = [];
   let processedCount = 0;
   const totalNumbers = end - start + 1;

   //only 6k ± 1 numbers are primes
   function isPrime(num) {
      if (num < 2) return false;
      if (num === 2 || num === 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;

      const limit = Math.sqrt(num);
      for (let i = 5; i <= limit; i += 6) {
         if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
   }

   async function* primesGenerator() {
      let lastProgress = 0;

      for (let i = start; i <= end; i++) {
         if (isPrime(i)) {
            yield i;
         }

         processedCount++;

         const progress = Math.floor((processedCount / totalNumbers) * 100);
         if (progress >= lastProgress + 10) {
            console.log(
               `Progress: ${progress}%, finded numbers: ${primeNumbers.length}`
            );
            lastProgress = progress;
         }

         // event loop clearing every chunkSize 
         if ((i - start) % chunkSize === 0) {
            await new Promise((resolve) => setTimeout(resolve, 0));
         }
      }
   }

   for await (const primeNumber of primesGenerator()) {
      primeNumbers.push(primeNumber);
   }

   const endTime = performance.now();
   const executionTime = (endTime - startTime).toFixed(2);

   console.log(`Number of finded primes: ${primeNumbers.length}`);
   console.log(`Execution time: ${executionTime} мс`);

   return primeNumbers.length;
}


findPrimes(1, 1000000)
   .then((result) => console.log(result))
   .catch((error) => console.error(error));

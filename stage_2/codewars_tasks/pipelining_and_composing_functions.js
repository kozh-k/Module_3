function pipeline(seed, ...functions) {
   return functions.reduce((currentValue, fn) => fn(currentValue), seed);
}

function compose(...functions) {
   return function (seed) {
      return functions.reduceRight(
         (currentValue, fn) => fn(currentValue),
         seed
      );
   };
}

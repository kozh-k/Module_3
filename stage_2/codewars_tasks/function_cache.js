function cache(func) {
   const cache = {};

   return function () {
      const args = JSON.stringify(arguments);

      if (cache.hasOwnProperty(args)) {
         return cache[args];
      } else {
         return (cache[args] = func(...arguments));
      }
   };
}

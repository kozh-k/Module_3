function roundIt(n) {
   const [leftNumbers, rigthNumbers] = n.toString().split(".");

   if (leftNumbers.length < rigthNumbers.length) {
      return Math.ceil(n);
   }

   if (leftNumbers.length > rigthNumbers.length) {
      return Math.floor(n);
   }

   return Math.round(n);
}

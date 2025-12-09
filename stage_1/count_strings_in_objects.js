function strCount(obj) {
   let sumOfStrings = 0;

   for (key in obj) {
      if (typeof obj[key] === "string") {
         sumOfStrings++;
      }

      if (typeof obj[key] === "object") {
         sumOfStrings += strCount(obj[key]);
      }
   }

   return sumOfStrings;
}

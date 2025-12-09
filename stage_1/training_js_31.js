function blackAndWhite(arr) {
   if (Array.isArray(arr)) {
      if (
         arr.some((element) => element === 5) &&
         arr.some((element) => element === 13)
      ) {
         return "It's a black array";
      }

      return "It's a white array";
   }

   return "It's a fake array";
}

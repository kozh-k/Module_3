function isolateIt(arr) {
   const char = "|";

   return arr.map((element) => {
      const index = element.length / 2;

      if (element.length % 2 === 0) {
         return element.slice(0, index) + char + element.slice(index);
      } else {
         return element.slice(0, index) + char + element.slice(index + 1);
      }
   });
}

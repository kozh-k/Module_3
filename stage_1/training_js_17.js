function firstToLast(str, c) {
   const gap = str.lastIndexOf(c) - str.indexOf(c);

   if (str.lastIndexOf(c) === -1) {
      return -1;
   } else {
      return gap;
   }
}

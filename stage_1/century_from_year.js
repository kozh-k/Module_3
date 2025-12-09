function century(year) {
   if (year % 100 === 0) {
      return year / 100;
   } else {
      return Math.ceil(year / 100);
   }
}

function saleHotdogs(n) {
   if (n < 5) {
      return n * 100;
   } else if (n >= 10) {
      return n * 90;
   } else {
      return n * 95;
   }
}

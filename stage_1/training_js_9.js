function padIt(str, n) {
   let i = 1;

   while (i <= n) {
      i % 2 === 0 
         ? str += "*"
         : str = "*" + str;

      i++;
   }

   return str;
}

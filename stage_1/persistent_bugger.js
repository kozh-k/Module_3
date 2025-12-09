function persistence(num) {
   let counter = 0;

   while (num.toString().length > 1) {
      const arrayFromString = num.toString().split("");

      num = arrayFromString.reduce((acc, element) => acc * Number(element), 1);
      
      counter++;
   }

   return counter;
}

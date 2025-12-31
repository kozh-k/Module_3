function* generator() {
   let counter = 1;

   while (true) {
      const arg = yield counter;

      if (arg !== undefined) {
         counter = arg;
      } else {
         counter++;
      }
   }
}

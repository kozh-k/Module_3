function* fibonacci() {
   let [currentNumber, nextNumber] = [0, 1];

   while (true) {
      yield currentNumber;

      [currentNumber, nextNumber] = [nextNumber, currentNumber + nextNumber];
   }
}

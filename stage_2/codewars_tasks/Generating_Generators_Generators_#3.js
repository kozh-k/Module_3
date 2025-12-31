function* generator(a, b) {
   for (let i = a; i <= b; i++) {
      yield (function* () {
         for (let j = 1; j <= 10; j++) {
            yield `${i} x ${j} = ${i * j}`;
         }
      })();
   }
}

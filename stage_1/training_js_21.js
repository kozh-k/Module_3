function fiveLine(s) {
   s = s.trim();

   let fiveLineString = s;

   for (let i = 0; i < 4; i++) {
      fiveLineString += `\n${s.repeat(i + 2)}`;
   }

   return fiveLineString;
}

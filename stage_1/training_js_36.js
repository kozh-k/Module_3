function rndCode() {
   let randomCode = "";

   const letters = "ABCDEFGHIJKLM";
   const symbols = "~!@#$%^&*";

   for (let i = 0; i < 8; i++) {
      if (i < 2) {
         randomCode += letters[~~Math.random()];
      } else if (i > 1 && i < 6) {
         randomCode += ~~(10 * Math.random());
      } else {
         randomCode += symbols[~~Math.random()];
      }
   }

   return randomCode;
}

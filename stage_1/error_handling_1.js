function getCount(words) {
   const vowels = ["a", "e", "i", "o", "u"];
   const consonants = [
      "b",
      "c",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "v",
      "w",
      "x",
      "y",
      "z",
   ];

   const result = {
      vowels: 0,
      consonants: 0,
   };

   if (typeof words !== "string") {
      return result;
   }

   words
      .toLowerCase()
      .split("")
      .forEach((letter) => {
         if (vowels.includes(letter)) {
            result.vowels++;
         } else if (consonants.includes(letter)) {
            result.consonants++;
         }
      });

   return result;
}

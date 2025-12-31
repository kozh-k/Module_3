function findSimilarity(str, word) {
   const wordLength = word.length;
   const firstLetterOfWord = word[0];
   const lastLetterOfWord = word[word.length - 1];

   const regExp = new RegExp(
      `\\b${firstLetterOfWord}\\w{${wordLength - 2}}${lastLetterOfWord}\\b`,
      "g"
   );

   const result = str.match(regExp);

   return result ? result.join(" ") : "";
}

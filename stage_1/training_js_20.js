function topSecret(str) {
   return str
      .split(" ")
      .map((word) => {
         let decryptedWordArray = [];

         for (let i = 0; i < word.length; i++) {
            let decryptedUnicode = word.charCodeAt(i) - 3;

            if (decryptedUnicode > 119 || decryptedUnicode < 62) {
               decryptedWordArray.push(word[i]);
               continue;
            }

            if (decryptedUnicode < 97 && decryptedUnicode > 93) {
               decryptedUnicode += 26;
            }

            if (decryptedUnicode < 65) {
               decryptedUnicode += 26;
            }

            const decryptedLetter = String.fromCharCode(decryptedUnicode);
            decryptedWordArray.push(decryptedLetter);
         }

         return decryptedWordArray.join("");
      })
      .join(" ");
}

//question1: The top secret file number is...
answer1 = "2581";
//question2: Super agent's name is...
answer2 = "LMYp";
//question3: He stole the treasure is...
answer3 = "John's wife";

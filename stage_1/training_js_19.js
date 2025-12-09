function alienLanguage(str) {
   return str
      .toUpperCase()
      .split(" ")
      .map((word) => (word = word.slice(0, -1) + word.slice(-1).toLowerCase()))
      .join(" ");
}

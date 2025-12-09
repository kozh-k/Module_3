function splitAndMerge(string, separator) {
   return string
      .split(" ")
      .map((element) => element.split("").join(separator))
      .join(" ");
}

function colorOf(r, g, b) {
   const convertRGBToHex = (color) => {
      if (color.toString(16).length === 1) {
         return "0" + color.toString(16);
      } else {
         return color.toString(16);
      }
   };

   return "#" + convertRGBToHex(r) + convertRGBToHex(g) + convertRGBToHex(b);
}

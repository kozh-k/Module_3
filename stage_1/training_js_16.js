function cutIt(arr) {
   let minStringLength = arr[0].length;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i].length < minStringLength) {
         minStringLength = arr[i].length;
      }
   }

   return arr.map((element) => element.slice(0, minStringLength));
}

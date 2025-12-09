function shuffleIt(arr, ...indexArrays) {
   let result = [...arr];

   indexArrays.forEach(element => {
      const temp = result[element[0]];

      result[element[0]] = result[element[1]];
      result[element[1]] = temp;
   });

   return result;
}

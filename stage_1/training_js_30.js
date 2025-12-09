function tailAndHead(arr) {
   return arr
      .reduce((acc, number, index) => {
         if (index < arr.length - 1) {
            const currentStringNumber = number.toString();
            const nextStringNumber = arr[index + 1].toString();

            acc.push(
               Number(currentStringNumber[currentStringNumber.length - 1]) +
               Number(nextStringNumber[0])
            );
         }

         return acc;
      }, [])
      .reduce((acc, number) => (acc *= number), 1);
}

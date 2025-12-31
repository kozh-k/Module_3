function splitTheBill(x) {
   const copyOfX = { ...x };

   const totalSum = Object.values(x).reduce((acc, bill) => acc + bill, 0);
   const averageSum = totalSum / Object.values(x).length;

   for (key in copyOfX) {
      copyOfX[key] -= averageSum;
      copyOfX[key] = Number(copyOfX[key].toFixed(2));
   }

   return copyOfX;
}

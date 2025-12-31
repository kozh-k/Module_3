function countAnimals(animals, count) {
   const result = [];

   count.forEach((animalCount) => {
      const quantity = animals
         .split(",")
         .filter((animal) => animal === animalCount).length;
      result.push(quantity);
   });

   return result;
}

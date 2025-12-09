function findSenior(list) {
   const agesList = list.map((developer) => developer.age);

   const maxAge = Math.max(...agesList);

   return list.filter((developer) => developer.age === maxAge);
}

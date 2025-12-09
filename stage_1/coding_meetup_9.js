function isAgeDiverse(list) {
   const agesList = list.map((developer) => developer.age);

   const ageGroupsCheck = {
      teens: agesList.some((age) => age >= 0 && age < 20),
      twenties: agesList.some((age) => age >= 20 && age < 30),
      thirties: agesList.some((age) => age >= 30 && age < 40),
      forties: agesList.some((age) => age >= 40 && age < 50),
      fifties: agesList.some((age) => age >= 50 && age < 60),
      sixties: agesList.some((age) => age >= 60 && age < 70),
      seventies: agesList.some((age) => age >= 70 && age < 80),
      eighties: agesList.some((age) => age >= 80 && age < 90),
      nineties: agesList.some((age) => age >= 90 && age < 100),
      centenarian: agesList.some((age) => age >= 100 && age < 200),
   };

   return !Object.values(ageGroupsCheck).includes(false);
}

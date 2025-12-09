function countDevelopers(list) {
   return list.reduce((acc, developer) => {
      if (developer.continent === "Europe" && developer.language === "JavaScript") {
         acc++;
      }

      return acc;
   }, 0);
}

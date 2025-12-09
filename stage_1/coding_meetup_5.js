function countLanguages(list) {
   return list.reduce((acc, developer) => {
      const language = developer.language;

      if (!acc.hasOwnProperty(language)) {
         acc[language] = 0;
      }

      acc[language]++;

      return acc;
   }, {});
}

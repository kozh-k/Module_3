function askForMissingDetails(list) {
   return list.reduce((acc, developer) => {
      for (key in developer) {
         if (developer[key] === null) {
            developer.question = `Hi, could you please provide your ${key}.`;

            acc.push(developer);
            
            break;
         }
      }

      return acc;
   }, []);
}

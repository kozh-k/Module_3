function findAdmin(list, lang) {
   return list.filter((developer) =>
      developer.language === lang && developer.githubAdmin === "yes"
   );
}

function isSameLanguage(list) {
   return list.every((developer) => developer.language === list[0].language);
}

function nouveau(Constructor, ...args) {
   const instance = Object.create(Constructor.prototype);
   const expression = Constructor.apply(instance, args);

   if (
      (typeof expression === "object" || typeof expression === "function") &&
      expression !== null
   ) {
      return expression;
   } else {
      return instance;
   }
}

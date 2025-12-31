Object.deepFreeze = function (object) {
   Object.freeze(object);

   for (key in object) {
      if (typeof object[key] === "object") {
         Object.deepFreeze(object[key]);
      }
   }

   return;
};

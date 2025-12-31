Object.defineProperty(Person.prototype, "name", {
   get: function () {
      return this.firstName + " " + this.lastName;
   },

   set: function (name) {
      [this.firstName, this.lastName] = name.split(" ");
   },
});

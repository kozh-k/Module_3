Function.prototype.bind = function (ctx) {
   const func = this;

   return function () {
      return func.call(this === global ? ctx : this);
   };
};

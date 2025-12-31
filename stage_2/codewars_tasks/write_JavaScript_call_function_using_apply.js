Function.prototype.call = function (context, ...args) {
   const func = this;

   return (function () {
      return func.apply(context, [...args]);
   })();
};

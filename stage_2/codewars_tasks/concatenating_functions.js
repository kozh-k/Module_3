Function.prototype.pipe = function (rightFunc) {
   const leftFunc = this;

   return function (...args) {
      return rightFunc(leftFunc(...args));
   };
};

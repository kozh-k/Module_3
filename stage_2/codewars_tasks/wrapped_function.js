Function.prototype.wrap = function wrap(callback) {
   return (...args) => callback(this, ...args);
};

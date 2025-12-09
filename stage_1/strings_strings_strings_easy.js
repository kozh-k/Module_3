function toString() {
   return JSON.stringify(this);
}

Boolean.prototype.toString =
Number.prototype.toString =
Array.prototype.toString = toString;

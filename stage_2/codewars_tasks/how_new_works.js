const myObj = {};

myObj.__proto__ = MyObject.prototype;

MyObject.call(myObj);

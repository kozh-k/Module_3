class Person {
   constructor(myName) {
      this.name = myName;
   }

   greet(yourName) {
      return `Hello ${yourName}, my name is ${this.name}`;
   }
}

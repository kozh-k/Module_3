class Human {}
class Man extends Human {}
class Woman extends Human {}

class God {
   static create() {
      const adam = new Man();
      const eve = new Woman();
      return [adam, eve];
   }
}

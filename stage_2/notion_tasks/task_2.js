"use strict";

const ProductsDiscount = {};
let productIdCounter = 0;

class Product {
   constructor(name, price) {
      this.name = name;
      this.price = price;
      this.id = ++productIdCounter;
   }

   setDiscount(discountValue) {
      ProductsDiscount[this.id] = discountValue;
   }

   getDiscount() {
      return ProductsDiscount[this.id];
   }

   removeDiscount() {
      delete ProductsDiscount[this.id];
   }
}

let apple = new Product("Apple", 10);
const banana = new Product("Banana", 15);
const orange = new Product("Orange", 20);

apple.setDiscount(20);
banana.setDiscount(15);
orange.setDiscount(30);

console.log(apple.getDiscount());
console.log(ProductsDiscount[apple.id]);

apple.removeDiscount();
apple = null;

//TypeError
console.log(ProductsDiscount[apple.id]);
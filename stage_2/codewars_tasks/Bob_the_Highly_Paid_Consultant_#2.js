ShoppingCart.prototype.addButtonClicked = function (item) {
   this.checkQuantityAsync(item, this.addButtonClicked1.bind(this));
};

ShoppingCart.prototype.addButtonClicked1 = function ({ item, quantity }) {
   if (quantity > 0) {
      this.addToCartAsync(item, 1, this.addButtonClicked2(this));
   }
};

ShoppingCart.prototype.addButtonClicked2 = function (self) {
   return (success) => {
      if (success) {
         this.updateCartDisplayAsync((...args) =>
            self.addButtonClicked3(...args)
         );
      }
   };
};

ShoppingCart.prototype.addButtonClicked3 = function (success) {
   this.showMessage(
      `${success ? "Successfully" : "Unsuccessfully"} added item to cart`
   );
};

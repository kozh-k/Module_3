async function submitOrder(user) {
   const shoppingCart = await OrderAPI.getShoppingCartAsync(user);

   const zipCode = (await CustomerAPI.getProfileAsync(user)).zipCode;

   const shippingRate = calculateShipping(shoppingCart, zipCode);

   const orderSuccessful = await OrderAPI.placeOrderAsync(
      shoppingCart,
      shippingRate
   );

   console.log(
      `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`
   );
}

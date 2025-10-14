import { useState } from "react";

import products from "../data/products";

import NavBar from "./NavBar";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";

export default function GrociariesAppContainer() {
  /* an array populated by ProcuctCard,
   * each index contains a product, quantity, and totalPrice */
  const [cartItems, setCartItems] = useState([]);

  // adds a cartItem via ProductCard
  const addToCart = (cartIndex, quantity) => {
    /* I opted for a for loop, I was using .map(), but I fugured since
     * I don't need to go through the full loop, this would be better */
    let repeatIndex = 0;
    for (;repeatIndex < cartItems.length; repeatIndex++) {
      if (cartItems[repeatIndex].product.id === products[cartIndex].id) {
        setItemQuantity(repeatIndex, quantity);
        break;
      }
    }

    if (repeatIndex === cartItems.length) {
      let cartItemsCopy = [...cartItems];
      
      cartItemsCopy.push({
        product: products[cartIndex],
        quantity: quantity,
        totalPrice: quantity * products[cartIndex].price.replace("$", "")});
    
        setCartItems(cartItemsCopy);
    }
  }

  /* sets quantity if a repeat cartItem is being added to,
   * either via ProductCard or the QuantityCounter in CartCard,
   * totalPrice is updated to reflect the quantity */
  const setItemQuantity = (index, quantity) => {
    let cartItemsCopy = [...cartItems];
    cartItemsCopy[index].quantity += quantity;
    cartItemsCopy[index].totalPrice += quantity * cartItems[index].product.price.replace("$", "");
    setCartItems(cartItemsCopy);
  }

  // removes a cartItem via CartCard
  const removeFromCart = (index) => {
    let cartItemsCopy = [...cartItems];
    cartItemsCopy.splice(index, 1);
    setCartItems(cartItemsCopy);
  }

  /* resets cartItems[] via CartContainer,
   * y'know I'm kinda linking the word via today */
  const emptyCart = () => {
    setCartItems([]);
  }

  return <>
  {/* hasItems determintes if the cart shows up or not,
    * I figured this woud be the easiest way to set up a ternary */}
  <NavBar hasItems={cartItems.length > 0}/>
  <div className="GroceriesApp-Container">
    {/* I don't know if you had mentioned passing functions,
      * but I couldn't think of a better way */}
    <ProductsContainer products={products} addToCart={addToCart}/>
    <CartContainer cartItems={cartItems} setItemQuantity={setItemQuantity} removeFromCart={removeFromCart} emptyCart={emptyCart}/>
  </div></>;
}

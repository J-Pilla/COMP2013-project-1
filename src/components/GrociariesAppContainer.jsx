import { useState } from "react";

import products from "../data/products";

import NavBar from "./NavBar";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";

export default function GrociariesAppContainer() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (index, quantity) => {
    let cartItemsCopy = [...cartItems];

    let i = 0;
    for (; i < cartItemsCopy.length; i++) {
      if (cartItemsCopy[i][0] === index) {
        cartItemsCopy[i][1] += quantity;
        break;
      } }

    if (i == cartItemsCopy.length) {
      cartItemsCopy.push([index, quantity]);
    }

    setCartItems(cartItemsCopy);
    console.log(cartItems[0]);
  }

  const removeFromCart = (index) => {
    let cartItemsCopy = [...cartItems];
    cartItemsCopy.splice(index, 1);
    setCartItems(cartItemsCopy);
  }

  return <>
  <NavBar hasItems={cartItems.length > 0}/>
  <div className="GroceriesApp-Container">
    <ProductsContainer products={products} addToCart={addToCart}/>
    <CartContainer products={products} cartItems={cartItems} removeFromCart={removeFromCart} />
  </div></>;
}

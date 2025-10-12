import { useState } from "react";

import products from "../data/products";

import NavBar from "./NavBar";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";

export default function GrociariesAppContainer() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (index, quantity) => {
    let cartItemsCopy = [...cartItems];
    cartItemsCopy.push([index, quantity]);
    setCartItems(cartItemsCopy);
  }

  const removeFromCart = () => {
    let cartItemsCopy = [...cartItems];
    cartItemsCopy.pop();
    setCartItems(cartItemsCopy);
  }

  return <>
  <NavBar hasItems={cartItems.length > 0}/>
  <div className="GroceriesApp-Container">
    <ProductsContainer products={products} addToCart={addToCart}/>
    <CartContainer products={products} cartItems={cartItems} removeFromCart={removeFromCart} />
  </div></>;
}

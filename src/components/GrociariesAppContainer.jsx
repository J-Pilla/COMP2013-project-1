import { useState } from "react";

import products from "../data/products";

import NavBar from "./NavBar";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";

export default function GrociariesAppContainer() {
  const [cartItems, setCartItems] = useState([]);
  let cartItemsCopy = [...cartItems];

  const addToCart = (index, quantity) => {
    cartItemsCopy.push([index, quantity]);
    setCartItems(cartItemsCopy);
  }
  const removeFromCart = () => {
    cartItemsCopy.pop();
    setCartItems(cartItemsCopy);
  }
  return <>
  <NavBar hasItems={cartItems.length > 0}/>
  <div className="GroceriesApp-Container">
    <ProductsContainer products={products} addToCart={addToCart}/>
    <CartContainer products={products} removeFromCart={removeFromCart} />
    <p>{cartItems[cartItems.length - 1]}</p>
    <button onClick={() => removeFromCart()}>-</button>
  </div></>;
}

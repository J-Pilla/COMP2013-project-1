import { useState } from "react";

import products from "../data/products";

import NavBar from "./NavBar";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";

export default function GrociariesAppContainer() {
  const [cartItems, setCartItems] = useState([]);
  const [counter, setCounter] = useState(0);
  let cartItemsCopy = [...cartItems];

  const addToCart = () => {
    setCounter(counter + 5);
    cartItemsCopy.push(counter);
    setCartItems(cartItemsCopy);
  }
  const removeFromCart = () => {
    cartItemsCopy.pop();
    setCartItems(cartItemsCopy);
  }
  return <>
  <NavBar hasItems={cartItems.length > 0}/>
  <div className="GroceriesApp-Container">
    <ProductsContainer products={products} />
    <CartContainer />
    <p>{cartItems[cartItems.length - 1]}</p>
    <button onClick={() => addToCart()}>+</button>
    <button onClick={() => removeFromCart()}>-</button>
  </div></>;
}

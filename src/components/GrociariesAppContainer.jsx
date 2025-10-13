import { useState } from "react";

import products from "../data/products";

import NavBar from "./NavBar";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";

export default function GrociariesAppContainer() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (cartIndex, quantity) => {
    let cartItemsCopy = [...cartItems];
    let repeatIndex;

    cartItems.map((cartItem, index) => {
      if (cartItem.product.id === products[cartIndex].id)
        repeatIndex = index;
    });

    if (repeatIndex === undefined)
      cartItemsCopy.push({
        product: products[cartIndex],
        quantity: quantity});
    else
      cartItemsCopy[repeatIndex].quantity += quantity;
    
    setCartItems(cartItemsCopy);
  }

  const removeFromCart = (index) => {
    let cartItemsCopy = [...cartItems];
    cartItemsCopy.splice(index, 1);
    setCartItems(cartItemsCopy);
  }

  const emptyCart = () => {
    setCartItems([]);
  }

  return <>
  <NavBar hasItems={cartItems.length > 0}/>
  <div className="GroceriesApp-Container">
    <ProductsContainer products={products} addToCart={addToCart}/>
    <CartContainer cartItems={cartItems} removeFromCart={removeFromCart} emptyCart={emptyCart} useState={useState}/>
  </div></>;
}

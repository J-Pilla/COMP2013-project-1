import { useState } from "react";

import products from "../data/products";

import NavBar from "./NavBar";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";

export default function GrociariesAppContainer() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (cartIndex, quantity) => {
    let cartItemsCopy = [...cartItems];
    let totalPrice = quantity * products[cartIndex].price.replace("$", "");
    let repeatIndex = 0;
    
    for (;repeatIndex < cartItems.length; repeatIndex++) {
      if (cartItems[repeatIndex].product.id === products[cartIndex].id) {
        cartItemsCopy[repeatIndex].quantity += quantity;
        cartItemsCopy[repeatIndex].totalPrice += totalPrice;
        break;
      }
    }

    if (repeatIndex === cartItems.length)
      cartItemsCopy.push({
        product: products[cartIndex],
        quantity: quantity,
        totalPrice: totalPrice});
    
    setCartItems(cartItemsCopy);
  }

  const setItemQuantity = (index, quantity) => {
    let cartItemsCopy = [...cartItems];
    cartItemsCopy[index].quantity += quantity;
    cartItemsCopy[index].totalPrice += quantity * cartItems[index].product.price.replace("$", "");
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
    <CartContainer cartItems={cartItems} setItemQuantity={setItemQuantity} removeFromCart={removeFromCart} emptyCart={emptyCart}/>
  </div></>;
}

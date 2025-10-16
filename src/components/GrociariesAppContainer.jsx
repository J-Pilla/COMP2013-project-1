import { useState } from "react";

import products from "../data/products";

import NavBar from "./NavBar";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";

export default function GrociariesAppContainer() {
  // an array of objects that contain a product id and a quantity
  const [productQuantities, setProductQuantities] = useState(products.map((product) => {
    return {
      id: product.id,
      quantity: 0
    };
  }));

  // set one quantity in productQuantities
  const setProductQuantity = (id, quantity) => {
    const newProductQuantities = productQuantities.map((productQuantity) => {
      let newProductQuantity = {...productQuantity};
      
      if (productQuantity.id === id)
        newProductQuantity.quantity += quantity;

      return newProductQuantity;
    });

    setProductQuantities(newProductQuantities);
  };

  /* an array populated by ProcuctCard,
   * each index contains a product, quantity, and totalPrice */
  const [cartItems, setCartItems] = useState([]);

  // adds a cartItem via ProductCard
  const addToCart = (id, quantity) => {
    let cartId = cartItems.find((cartItem) => cartItem.product.id === id);
    
    if (cartId === undefined) {
      let newCartItems = [...cartItems];
      const addedProduct = products.find((product) => product.id === id);
      
      newCartItems.push({
        product: {...addedProduct},
        quantity: quantity,
        totalPrice: quantity * addedProduct.price.replace("$", "")
      });
      
      setCartItems(newCartItems);
    }
    else {
      setItemQuantity(id, quantity);
    }
  }

  /* sets a cartItem's quantity if a cartItem is being added to,
   * either via ProductCard or the QuantityCounter in CartCard,
   * totalPrice is updated to reflect the quantity */
  const setItemQuantity = (id, quantity) => {
    const newCartItems = cartItems.map((cartItem) => {
      let newCartItem = {...cartItem};

      if (cartItem.product.id === id)
      {
        newCartItem.quantity += quantity;
        newCartItem.totalPrice += quantity * cartItem.product.price.replace("$", "")
      }

      return newCartItem;
    });

    setCartItems(newCartItems);
  }

  // removes a cartItem via CartCard
  const removeFromCart = (id) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.product.id !== id);
    setCartItems(newCartItems);
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
    <ProductsContainer
      products={products}
      productQuantities={productQuantities}
      setProductQuantity={setProductQuantity}
      addToCart={addToCart}/>
    <CartContainer
      cartItems={cartItems}
      setItemQuantity={setItemQuantity}
      removeFromCart={removeFromCart}
      emptyCart={emptyCart}/>
  </div></>;
}

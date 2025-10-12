import { useState } from "react";

import QuantityCounter from "./QuantityCounter";

export default function ProductCard({index, productName, image, brand, price, addToCart}) {
  const [quantity, setQuantity] = useState(0)
  
  return <div className="ProductCard">
    <h3>{productName}</h3>
    <img src={image} alt={productName + brand} />
    <p>{brand}</p>
    <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
    <h3>{price}</h3>
    <button onClick={() => quantity > 0 && addToCart(index, quantity)}>Add to Cart</button>
  </div>;
}

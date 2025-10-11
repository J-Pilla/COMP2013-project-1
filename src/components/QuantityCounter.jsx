import { useState } from "react"; 

export default function QuantityCounter() {
  const minQuantity = 0;
  const maxQuantity = 10;
  const [quantity, setQuantity] = useState(0);

  return <div className="ProductQuantityDiv">
    <button onClick={() =>
    quantity > minQuantity &&
    setQuantity(quantity - 1)}>-</button>
    <p>{quantity}</p>
    <button onClick={() =>
    quantity < maxQuantity &&
    setQuantity(quantity + 1)}>+</button>
  </div>;
}

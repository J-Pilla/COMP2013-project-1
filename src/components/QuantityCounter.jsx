import { useState } from "react"; 

export default function QuantityCounter({minQuantity = 0, initQuantity = 0}) {
  const maxQuantity = 99;
  const [quantity, setQuantity] = useState(initQuantity);

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

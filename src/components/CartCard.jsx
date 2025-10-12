import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

export default function CartCard({index, productName, image, price, initQuantity, removeFromCart}) {
  const [quantity, setQuantity] = useState(initQuantity);

  return <div className="CartCard">
    <div className="CartCardInfo">
    <img src={image} />
    <p>{productName}</p>
    <p>{price}</p>
    <QuantityCounter minQuantity={1} quantity={quantity} setQuantity={setQuantity} />
    </div>
    <div className="CartCardInfo">
    <h3>Total: ${(quantity * price.replace("$", "")).toFixed(2)}</h3>
    <button className="RemoveButton" onClick={() => removeFromCart(index)}>Remove</button>
    </div>
  </div>;
}

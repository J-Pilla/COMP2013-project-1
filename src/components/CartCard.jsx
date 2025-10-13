import { useState } from "react";

import QuantityCounter from "./QuantityCounter";

export default function CartCard({index, productName, image, price, initQuantity, checkoutPrice, setCheckoutPrice, removeFromCart}) {
  const [quantity, setQuantity] = useState(0);
  let totalPrice = (initQuantity + quantity) * price.replace("$", "");
  // setCheckoutPrice(checkoutPrice + totalPrice);

  return <div className="CartCard">
    <div className="CartCardInfo">
    <img src={image} />
    <p>{productName}</p>
    <p>{price}</p>
    <QuantityCounter quantity={quantity} setQuantity={setQuantity} initQuantity={initQuantity} minQuantity={1} />
    </div>
    <div className="CartCardInfo">
    <h3>Total: ${totalPrice.toFixed(2)}</h3>
    <button className="RemoveButton" onClick={() => removeFromCart(index)}>Remove</button>
    </div>
  </div>;
}

import QuantityCounter from "./QuantityCounter";

export default function CartCard({productName, image, price, quantity, removeFromCart}) {
  let total = quantity * price.replace("$", "");

  return <div className="CartCard">
    <div className="CartCardInfo">
    <img src={image} />
    <p>{productName}</p>
    <p>{price}</p>
    <QuantityCounter minQuantity={1} initQuantity={quantity} />
    </div>
    <div className="CartCardInfo">
    <h3>Total: ${total.toFixed(2)}</h3>
    <button className="RemoveButton" onClick={() => removeFromCart()}>Remove</button>
    </div>
  </div>;
}

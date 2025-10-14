import QuantityCounter from "./QuantityCounter";

export default function CartCard({index, productName, image, price, quantity, totalPrice, setItemQuantity, removeFromCart}) {
  return <div className="CartCard">
    <div className="CartCardInfo">
      <img src={image} />
      <p>{productName}</p>
      <p>{price}</p>
      {/* I could feel my brain expanding when I thought of sending a different function as setQuantity */}
      <QuantityCounter quantity={quantity} setQuantity={setItemQuantity} minQuantity={1} index={index} />
    </div>
    <div className="CartCardInfo">
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button className="RemoveButton" onClick={() => removeFromCart(index)}>Remove</button>
    </div>
  </div>;
}

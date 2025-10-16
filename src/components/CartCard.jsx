import QuantityCounter from "./QuantityCounter";

export default function CartCard({
  id,
  productName,
  image,
  price,
  quantity,
  totalPrice,
  setItemQuantity,
  removeFromCart
}) {
  return <div className="CartCard">
    <div className="CartCardInfo">
      <img src={image} />
      <p>{productName}</p>
      <p>{price}</p>
      <QuantityCounter
        id={id}
        quantity={quantity}
        setQuantity={setItemQuantity}
        minQuantity={1} />
    </div>
    <div className="CartCardInfo">
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button className="RemoveButton" onClick={
        () => removeFromCart(id)
      }>Remove</button>
    </div>
  </div>;
}

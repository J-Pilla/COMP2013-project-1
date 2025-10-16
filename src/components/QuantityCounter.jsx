/* I've decided to give minQuantity a default,
 * that way the call is simpler in ProductCard */
export default function QuantityCounter({
  id,
  quantity,
  setQuantity,
  minQuantity = 0
}) {
  return <div className="ProductQuantityDiv">
    <button onClick={() =>
    quantity > minQuantity &&
    setQuantity(id, -1)}>-</button>
    <p>{quantity}</p>
    <button onClick={() =>
    setQuantity(id, 1)}>+</button>
  </div>;
}

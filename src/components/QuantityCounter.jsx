export default function QuantityCounter({quantity, setQuantity, minQuantity = 0, index = -1}) {
  const maxQuantity = 99;

  return <div className="ProductQuantityDiv">
    <button onClick={() =>
    quantity > minQuantity &&
    setQuantity(index < 0 ? quantity - 1 : index, -1)}>-</button>
    <p>{quantity}</p>
    <button onClick={() =>
    quantity < maxQuantity &&
    setQuantity(index < 0 ? quantity + 1 : index, 1)}>+</button>
  </div>;
}

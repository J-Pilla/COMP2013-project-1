export default function QuantityCounter({quantity, setQuantity, initQuantity = 0, minQuantity = 0}) {
  const maxQuantity = 99;

  return <div className="ProductQuantityDiv">
    <button onClick={() =>
    quantity + initQuantity > minQuantity &&
    setQuantity(quantity - 1)}>-</button>
    <p>{quantity + initQuantity}</p>
    <button onClick={() =>
    quantity + initQuantity < maxQuantity &&
    setQuantity(quantity + 1)}>+</button>
  </div>;
}

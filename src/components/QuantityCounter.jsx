/* I've decided to give minQuantity a default, that way the call is simpler in ProductCard
 * I also bring in index from CartCard, also defaulted so the call is simpler in ProductCard */
export default function QuantityCounter({quantity, setQuantity, minQuantity = 0, index = -1}) {
  return <div className="ProductQuantityDiv">
    <button onClick={() =>
    quantity > minQuantity &&
    /* now when I thought to use ternary to decide the parameters in setQuantity,
     * thats when the real brain expansion happend, I felt it all came together */
    setQuantity(index < 0 ? quantity - 1 : index, -1)}>-</button>
    <p>{quantity}</p>
    <button onClick={() =>
    setQuantity(index < 0 ? quantity + 1 : index, 1)}>+</button>
  </div>;
}

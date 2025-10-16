import QuantityCounter from "./QuantityCounter";

export default function ProductCard({
  id,
  productName,
  image,
  brand,
  price,
  quantity,
  setProductQuantity,
  addToCart
}) {
  return <div className="ProductCard">
    <h3>{productName}</h3>
    <img src={image} alt={`productName, brand`} />
    <p>{brand}</p>
    <QuantityCounter
      id={id}
      quantity={quantity}
      setQuantity={setProductQuantity} />
    <h3>{price}</h3>
    <button onClick={
      () => quantity > 0 && addToCart(id, quantity)
    }>Add to Cart</button>
  </div>;
}

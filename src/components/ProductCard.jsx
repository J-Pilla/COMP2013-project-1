import QuantityCounter from "./QuantityCounter";

export default function ProductCard({index, productName, image, brand, price, addToCart}) {
  return <div className="ProductCard">
    <h3>{productName}</h3>
    <img src={image} alt={productName + brand} />
    <p>{brand}</p>
    <QuantityCounter />
    <h3>{price}</h3>
    <button onClick={() => addToCart(index, 2)}>Add to Cart</button>
  </div>;
}

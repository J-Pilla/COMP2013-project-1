import QuantityCounter from "./QuantityCounter";

export default function ProductCard({productName, image, brand, price}) {
  return <div className="ProductCard">
    <h3>{productName}</h3>
    <img src={image} alt={productName + brand} />
    <p>{brand}</p>
    <QuantityCounter />
    <h3>{price}</h3>
    <button>Add to Cart</button>
  </div>;
}
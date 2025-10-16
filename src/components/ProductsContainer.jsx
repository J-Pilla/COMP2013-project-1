import ProductCard from "./ProductCard";

export default function ProductsContainer({
  products,
  productQuantities,
  setProductQuantity,
  addToCart
}) {
  return <div className="ProductsContainer">
    {products.map((product) =>
    <ProductCard key={product.id}
      {...product}
      quantity={productQuantities.find((quantity) => quantity.id === product.id).quantity}
      setProductQuantity={setProductQuantity}
      addToCart={addToCart}/>)}
  </div>;
}

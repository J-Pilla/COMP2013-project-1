import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductsContainer() {
    return <div className="ProductsContainer">
      {products.map((product, index) =>
      <ProductCard key={index} productName={product.productName}
      image={product.image} brand={product.brand} price={product.price}/>)}
      </div>;
}

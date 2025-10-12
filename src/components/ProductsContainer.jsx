import ProductCard from "./ProductCard";

export default function ProductsContainer({products, addToCart}) {
    return <div className="ProductsContainer">
      {products.map((product, index) => <ProductCard key={index} index={index} {...product} addToCart={addToCart}/>)}
    </div>;
}

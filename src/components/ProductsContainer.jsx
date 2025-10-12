import ProductCard from "./ProductCard";

export default function ProductsContainer({products}) {
    return <div className="ProductsContainer">
      {products.map((product, index) => <ProductCard key={index} {...product}/>)}
    </div>;
}

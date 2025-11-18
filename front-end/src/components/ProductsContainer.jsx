import ProductCard from "./ProductCard";

export default function ProductsContainer({
	products,
	setProductQuantity,
	addToCart,
}) {
	return (
		<div className="ProductsContainer">
			{products.map((product) => (
				<ProductCard
					key={product._id}
					{...product}
					setProductQuantity={setProductQuantity}
					addToCart={addToCart}
				/>
			))}
		</div>
	);
}

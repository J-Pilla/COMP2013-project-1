import ProductCard from "./ProductCard";

export default function ProductsContainer({
	products,
	quantities,
	setQuantity,
	addToCart,
	deleteProduct,
}) {
	return (
		<div className="ProductsContainer">
			{products.map((product) => (
				<ProductCard
					key={product._id}
					{...product}
					quantity={
						quantities.find(
							(quantity) => quantity._id === product._id
						).quantity
					}
					setQuantity={setQuantity}
					addToCart={addToCart}
					deleteProduct={deleteProduct}
				/>
			))}
		</div>
	);
}

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
			{products.map((product) => {
				const quantity = quantities.find(
					(quantity) => quantity._id === product._id
				);
				return (
					<ProductCard
						key={product._id}
						{...product}
						quantity={
							/*
							 * for such a simple solution to have to smash my head on the computer for an hour or two,
							 * when deleting, the index of the quantities array with the _id is deleted before the server
							 * is done fetching the refreshed products, this prevents reading quantity when it's undefined
							 */
							quantity !== undefined ? quantity.quantity : 0
						}
						setQuantity={setQuantity}
						addToCart={addToCart}
						deleteProduct={deleteProduct}
					/>
				);
			})}
		</div>
	);
}

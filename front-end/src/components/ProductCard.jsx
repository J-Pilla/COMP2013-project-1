import QuantityCounter from "./QuantityCounter";

export default function ProductCard({
	_id,
	productName,
	image,
	brand,
	price,
	quantity,
	setQuantity,
	addToCart,
}) {
	return (
		<div className="ProductCard">
			<h3>{productName}</h3>
			{image && <img src={image} alt={`productName, brand`} />}
			<p>{brand}</p>
			<QuantityCounter
				_id={_id}
				quantity={quantity}
				setQuantity={setQuantity}
			/>
			<h3>{price}</h3>
			<button
				onClick={() =>
					quantity > 0
						? addToCart(_id, quantity)
						: alert(
								"Please increase the quantity to before adding to the cart!"
						  )
				}>
				Add to Cart
			</button>
		</div>
	);
}

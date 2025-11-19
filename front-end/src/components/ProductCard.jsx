import noImage from "../assets/no-image.png";

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
	editProduct,
	deleteProduct,
}) {
	return (
		<div className="ProductCard">
			<h3>{productName}</h3>
			<img src={image ? image : noImage} alt={`productName, brand`} />
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
			<button className="EditButton" onClick={() => editProduct(_id)}>
				Edit
			</button>
			<button className="RemoveButton" onClick={() => deleteProduct(_id)}>
				Delete
			</button>
		</div>
	);
}

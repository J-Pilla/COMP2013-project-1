import noImage from "../assets/no-image.png";

import QuantityCounter from "./QuantityCounter";

export default function CartCard({
	_id,
	productName,
	image,
	price,
	quantity,
	totalPrice,
	setQuantity,
	removeFromCart,
}) {
	return (
		<div className="CartCard">
			<div className="CartCardInfo">
				<img src={image ? image : noImage} />
				<p>{productName}</p>
				<p>{price}</p>
				<QuantityCounter
					_id={_id}
					quantity={quantity}
					setQuantity={setQuantity}
					minQuantity={1}
				/>
			</div>
			<div className="CartCardInfo">
				<h3>Total: ${totalPrice.toFixed(2)}</h3>
				<button
					className="RemoveButton"
					onClick={() => removeFromCart(_id)}>
					Remove
				</button>
			</div>
		</div>
	);
}

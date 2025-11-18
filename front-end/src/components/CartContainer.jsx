import CartCard from "./CartCard";

export default function CartContainer({
	cartItems,
	setQuantity,
	removeFromCart,
	emptyCart,
}) {
	let checkoutPrice = 0;
	cartItems.map((cartItem) => (checkoutPrice += cartItem.totalPrice));

	return (
		<div className="CartContainer">
			<h3>Cart items: {cartItems.length}</h3>
			{cartItems.map((cartItem) => (
				<CartCard
					key={cartItem.product._id}
					{...cartItem.product}
					quantity={cartItem.quantity}
					totalPrice={cartItem.totalPrice}
					setQuantity={setQuantity}
					removeFromCart={removeFromCart}
				/>
			))}
			{cartItems.length > 0 ? (
				<div className="CartListBtns">
					<button
						className="RemoveButton"
						onClick={() => emptyCart()}>
						Empty Cart
					</button>
					<button
						_id="BuyButton"
						onClick={() =>
							alert(
								`You spent $${checkoutPrice.toFixed(
									2
								)}! Thank you for shopping with us!`
							)
						}>
						Checkout: ${checkoutPrice.toFixed(2)}
					</button>
				</div>
			) : (
				<p>No items in cart</p>
			)}
		</div>
	);
}

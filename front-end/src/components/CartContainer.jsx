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
			<div className="CartListBtns">
				<button className="RemoveButton" onClick={() => emptyCart()}>
					Empty Cart
				</button>
				<button
					_id="BuyButton"
					onClick={() =>
						checkoutPrice > 0
							? alert(
									`You spent $${checkoutPrice.toFixed(
										2
									)}! Thank you for shopping with us!`
							  )
							: alert(
									"Please add items to the cart before checking out!"
							  )
					}>
					Checkout: ${checkoutPrice.toFixed(2)}
				</button>
			</div>
		</div>
	);
}

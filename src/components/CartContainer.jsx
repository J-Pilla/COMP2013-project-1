import CartCard from "./CartCard";

export default function CartContainer({
    cartItems,
    setItemQuantity,
    removeFromCart,
    emptyCart
}) {
    let checkoutPrice = 0;
    cartItems.map((cartItem) => checkoutPrice += cartItem.totalPrice);

    return <div className="CartContainer">
        <h3>Cart items: {cartItems.length}</h3>
              {cartItems.map((cartItem) =>
                <CartCard key={cartItem.product.id}
                {...cartItem.product}
                quantity={cartItem.quantity}
                totalPrice={cartItem.totalPrice}
                setItemQuantity={setItemQuantity}
                removeFromCart={removeFromCart} />)}
        <div className="CartListBtns">
            <button className="RemoveButton" onClick={
                () => emptyCart()
            }>Empty Cart</button>
            <button id="BuyButton">Checkout: ${checkoutPrice.toFixed(2)}</button>
        </div>
    </div>;
}

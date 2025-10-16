/* I don't know why but this file has 4 space tab, I wish all my files were like this,
 * and I don't know what I did to make this happen, if you have any insight, please let me know,
 * also, the only "challenge" I did was add functionality to the checkout button,
 * because it felt wrong to me that the button gave no feedback */
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
            <button id="BuyButton" onClick={
                () => checkoutPrice > 0 ?
                    alert(`You spent $${checkoutPrice.toFixed(2)}! Thank you for shopping with us!`) :
                    alert("Please add items to the cart before checking out!")
            }>Checkout: ${checkoutPrice.toFixed(2)}</button>
        </div>
    </div>;
}

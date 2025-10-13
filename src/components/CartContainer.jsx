import { useState } from "react";

import CartCard from "./CartCard";

export default function CartContainer({cartItems, removeFromCart, emptyCart}) {
    const [checkoutPrice, setCheckoutPrice] = useState(0);

    return <div className="CartContainer">
        <h3>Cart items: {cartItems.length}</h3>
              {cartItems.map((cartItem, index) =>
                <CartCard key={index}
                index={index}
                {...cartItem.product}
                initQuantity={cartItem.quantity}
                checkoutPrice={checkoutPrice}
                setCheckoutPrice={setCheckoutPrice}
                removeFromCart={removeFromCart} />)}
        <div className="CartListBtns">
            <button className="RemoveButton" onClick={() => {
                emptyCart();
                setCheckoutPrice(0);
                }}>Empty Cart</button>
            <button id="BuyButton">Checkout: ${checkoutPrice.toFixed(2)}</button>
        </div>
    </div>;
}
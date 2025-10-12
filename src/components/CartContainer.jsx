import CartCard from "./CartCard";

export default function CartContainer({products, cartItems, removeFromCart}) {
    return <div className="CartContainer">
        <h3>Cart items: {cartItems.length}</h3>
              {cartItems.map((cartItem, index) =>
                <CartCard key={index}
                index={index}
                {...products[cartItem[0]]}
                initQuantity={cartItem[1]}
                removeFromCart={removeFromCart} />)}
        <div className="CartListBtns">
            <button className="RemoveButton">Empty Cart</button>
            <button id="BuyButton">Checkout: $0:00</button>
        </div>
    </div>;
}
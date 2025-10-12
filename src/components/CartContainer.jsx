import CartCard from "./CartCard";

export default function CartContainer() {
    return <div className="CartContainer">
        <h3>Cart items: 0</h3>
        <CartCard />
        <CartCard />
        <CartCard />
        <div className="CartListBtns">
            <button className="RemoveButton">Empty Cart</button>
            <button id="BuyButton">Checkout: $0:00</button>
        </div>
    </div>;
}
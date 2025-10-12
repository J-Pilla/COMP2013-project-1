import QuantityCounter from "./QuantityCounter";

export default function CartCard() {
  const source = "https://images.openfoodfacts.org/images/products/301/762/042/2003/front_en.550.400.jpg";
  return <div className="CartCard">
    <div className="CartCardInfo">
    <img src={source} />
    <p>Yougurt</p>
    <p>$6.00</p>
    <QuantityCounter />
    </div>
    <div className="CartCardInfo">
    <h3>Total: $18.00</h3>
    <button className="RemoveButton">Remove</button>
    </div>
  </div>;
}

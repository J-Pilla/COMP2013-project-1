import cartEmpty from "../assets/cart-empty.png";
import cartFull from "../assets/cart-full.png";

export default function NavBar({hasItems}) {
  return <div className="NavBar">
      <h3 className="NavUser">Hello, username</h3>
      <h2 className="NavTitle">Grocieries App 🍎</h2>
      <img className="NavCart" src={hasItems ? cartFull : cartEmpty} />
  </div>;
}
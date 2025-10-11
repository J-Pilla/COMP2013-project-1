import cartEmpty from "../assets/cart-empty.png";
import cartFull from "../assets/cart-empty.png";

export default function NavBar() {

  return <div className="NavBar">
      <h3 className="NavUser">Hello, username</h3>
      <h2 className="NavTitle">Grocieries App</h2>
      <img className="NavCart" src={cartEmpty} />
  </div>;
}
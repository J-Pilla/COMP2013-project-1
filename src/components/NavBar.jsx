import cartEmpty from "../assets/cart-empty.png";
import cartFull from "../assets/cart-full.png";
/* ^ I tried this out since I figure it'd be better than using
 * hard coded values. */
export default function NavBar({hasItems}) {
  return <div className="NavBar">
      <h3 className="NavUser">Hello, username</h3>
      <h2 className="NavTitle">Grocieries App 🍎</h2>
      <img className="NavCart" src={hasItems ? cartFull : cartEmpty} />
  </div>;
}
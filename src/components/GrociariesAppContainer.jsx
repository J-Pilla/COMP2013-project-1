import NavBar from "./NavBar";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";
import CartCard from "./CartCard";

export default function GrociariesAppContainer() {
  return <>
  <NavBar />
  <div className="GroceriesApp-Container">
    <ProductsContainer />
    <CartContainer />
  </div></>;
}

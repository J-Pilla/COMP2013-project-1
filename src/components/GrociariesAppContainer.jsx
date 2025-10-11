import NavBar from "./NavBar";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";

export default function GrociariesAppContainer() {
  return <>
  <NavBar />
  <div className="GroceriesApp-Container">
    <ProductsContainer />
  </div></>;
}

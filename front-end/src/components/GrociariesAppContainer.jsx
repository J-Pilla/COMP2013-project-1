// react
import { useState, useEffect } from "react";

// node
import axios from "axios";

// components
import NavBar from "./navBar";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";
import ProductFrom from "./ProductForm";

export default function GrociariesAppContainer() {
	// URL
	const baseURL = "http://localhost:3000/";
	const productsPath = "products/";

	// default states
	const defaultProductForm = {
		productName: "",
		brand: "",
		image: "",
		price: 0,
	};

	// states
	// array containing products from the database
	const [products, setProducts] = useState([]);
	// array containing quantities matched with products by their _id
	const [productQuantities, setProductQuantities] = useState([]);
	// object representing the form
	const [productFrom, setProdcutForm] = useState(defaultProductForm);
	// an array populated by ProcuctCard, each index contains a product, quantity, and totalPrice
	const [cartItems, setCartItems] = useState([]);
	// control state for fetching the products
	const [postResponse, setPostResponse] = useState("");

	// useEffect
	useEffect(() => {
		fetchProducts();
	}, [postResponse]);

	/**
	 * used to fetch contacts in useEffect
	 * populates products and productQuantities
	 */
	const fetchProducts = async () => {
		try {
			const response = await axios.get(baseURL + productsPath);
			setProducts(
				response.data.map((data) => {
					const { id, ...product } = data;
					return product; // this extracts the depricated id from the products
				})
			);
			if (!postResponse)
				setProductQuantities(
					response.data.map((data) => {
						return {
							_id: data._id,
							quantity: 0,
						};
					})
				);
		} catch (error) {
			console.log(error.message);
		}
	};

	// handlers
	/** handler for QuantityCounter \<button onClick>,
	 * set one quantity in productQuantities
	 */
	const setProductQuantity = (_id, quantity) => {
		const nextState = productQuantities.map((product) => {
			let currentProduct = { ...product };

			if (product._id === _id) currentProduct.quantity += quantity;

			return currentProduct;
		});

		setProductQuantities(nextState);
	};

	/**
	 * handler for ProductCard \<button onClick>,
	 * adds a cartItem
	 */
	const addToCart = (_id, quantity) => {
		let cartId = cartItems.find((cartItem) => cartItem.product._id === _id);

		if (cartId === undefined) {
			let newCartItems = [...cartItems];
			const addedProduct = products.find(
				(product) => product._id === _id
			);

			newCartItems.push({
				product: { ...addedProduct },
				quantity: quantity,
				totalPrice: quantity * addedProduct.price.replace("$", ""),
			});

			setCartItems(newCartItems);
		} else {
			setItemQuantity(_id, quantity);
		}
	};

	/**
	 * handler for QuantityCounter \<button onClick>,
	 * also called from addToCart to initialize cartItem[_id].quantity,
	 * sets cartItem[_id].quantity, totalPrice is updated to reflect the quantity
	 */
	const setItemQuantity = (_id, quantity) => {
		const newCartItems = cartItems.map((cartItem) => {
			let newCartItem = { ...cartItem };

			if (cartItem.product._id === _id) {
				newCartItem.quantity += quantity;
				newCartItem.totalPrice +=
					quantity * cartItem.product.price.replace("$", "");
			}

			return newCartItem;
		});

		setCartItems(newCartItems);
	};

	/**
	 * handler for CartCard \<button onClick>,
	 * removes a cartItem via CartCard
	 */
	const removeFromCart = (_id) => {
		const newCartItems = cartItems.filter(
			(cartItem) => cartItem.product._id !== _id
		);
		setCartItems(newCartItems);
	};

	/**
	 *  hander for CartContainer \<button onClick>,
	 * resets cartItems[] via CartContainer
	 */
	const emptyCart = () => {
		setCartItems([]);
	};

	return (
		<>
			{/* hasItems determintes if the cart shows up or not,
			 * I figured this woud be the easiest way to set up a ternary */}
			<NavBar hasItems={cartItems.length > 0} />
			<div className="GroceriesApp-Container">
				<ProductFrom {...ProductFrom} />
				<ProductsContainer
					products={products}
					quantities={productQuantities}
					setQuantity={setProductQuantity}
					addToCart={addToCart}
				/>
				<CartContainer
					cartItems={cartItems}
					setQuantity={setItemQuantity}
					removeFromCart={removeFromCart}
					emptyCart={emptyCart}
				/>
			</div>
		</>
	);
}

import { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "./r";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";

export default function GrociariesAppContainer() {
	// URL
	const baseURL = "http://localhost:3000/";
	const productsPath = "products/";

	// default states

	// states
	// quantity is now attatched to products
	const [products, setProducts] = useState([]);
	// an array populated by ProcuctCard, each index contains a product, quantity, and totalPrice
	const [cartItems, setCartItems] = useState([]);

	// useEffect
	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		try {
			const response = await axios.get(baseURL + productsPath);
			setProducts(
				response.data.map((data) => {
					const { id, ...product } = data;
					return {
						...product,
						quantity: 0,
					};
				})
			);
		} catch (error) {
			console.log(error.message);
		}
	};

	// set one quantity in products
	const setProductQuantity = (_id, quantity) => {
		console.log(_id);
		const newProducts = products.map((product) => {
			let newProduct = { ...product };

			if (product._id === _id) {
				console.log(newProduct);
				newProduct.quantity += quantity;
				console.log(newProduct);
			}

			return newProduct;
		});

		setProducts(newProducts);
	};

	// adds a cartItem via ProductCard
	const addToCart = (id, quantity) => {
		let cartId = cartItems.find((cartItem) => cartItem.product.id === id);

		if (cartId === undefined) {
			let newCartItems = [...cartItems];
			const addedProduct = products.find((product) => product.id === id);

			newCartItems.push({
				product: { ...addedProduct },
				quantity: quantity,
				totalPrice: quantity * addedProduct.price.replace("$", ""),
			});

			setCartItems(newCartItems);
		} else {
			setItemQuantity(id, quantity);
		}
	};

	/* sets a cartItem's quantity if a cartItem is being added to,
	 * either via ProductCard or the QuantityCounter in CartCard,
	 * totalPrice is updated to reflect the quantity */
	const setItemQuantity = (id, quantity) => {
		const newCartItems = cartItems.map((cartItem) => {
			let newCartItem = { ...cartItem };

			if (cartItem.product.id === id) {
				newCartItem.quantity += quantity;
				newCartItem.totalPrice +=
					quantity * cartItem.product.price.replace("$", "");
			}

			return newCartItem;
		});

		setCartItems(newCartItems);
	};

	// removes a cartItem via CartCard
	const removeFromCart = (id) => {
		const newCartItems = cartItems.filter(
			(cartItem) => cartItem.product.id !== id
		);
		setCartItems(newCartItems);
	};

	// resets cartItems[] via CartContainer
	const emptyCart = () => {
		setCartItems([]);
	};

	return (
		<>
			{/* hasItems determintes if the cart shows up or not,
			 * I figured this woud be the easiest way to set up a ternary */}
			<NavBar hasItems={cartItems.length > 0} />
			<div className="GroceriesApp-Container">
				<ProductsContainer
					products={products}
					setProductQuantity={setProductQuantity}
					addToCart={addToCart}
				/>
				<CartContainer
					cartItems={cartItems}
					setItemQuantity={setItemQuantity}
					removeFromCart={removeFromCart}
					emptyCart={emptyCart}
				/>
			</div>
		</>
	);
}

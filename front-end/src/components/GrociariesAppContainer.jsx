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
		price: "",
	};

	// states
	// array containing products from the database
	const [products, setProducts] = useState([]);
	// array containing quantities matched with products by their _id
	const [productQuantities, setProductQuantities] = useState([]);
	// object representing the form
	const [productForm, setProductForm] = useState(defaultProductForm);
	// string that contains the _id being edited, empty when not editing
	const [editing_id, setEditing_id] = useState("");
	// an array populated by ProcuctCard, each index contains a product, quantity, and totalPrice
	const [cartItems, setCartItems] = useState([]);
	/* control state for fetching the products, I decided to use a number,
	 * starts at 0 to initialize quantities, then flips from 1 and 2 to refresh */
	const [fetchControl, setFetchControl] = useState(0);
	const flipFetchControl = () =>
		setFetchControl((prevState) => (prevState !== 1 ? 1 : 2));

	// useEffect
	useEffect(() => {
		fetchProducts();
	}, [fetchControl]);

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
					return product; // this extracts the deprecated id from the products
				})
			);
			if (!fetchControl)
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
	/**
	 * handler for ProductForm \<input onChange>,
	 * updates the form as a user types
	 */
	const updateProductForm = (sender) => {
		setProductForm((prevState) => ({
			...prevState,
			[sender.target.name]: sender.target.value,
		}));
	};

	/**
	 * handler for ProductForm \<form onSubmit={!isEditing}>,
	 * adds a new product to the database
	 */
	const addProduct = async (sender) => {
		sender.preventDefault();
		try {
			const response = await axios.post(baseURL + productsPath, {
				...productForm,
				price: `$${Number(productForm.price).toFixed(2)}`,
			});

			console.log(response.data.message);
			/* adds the new product to productQuantities with quantity 0,
			 * this allows the quantities to not be reset to 0 everytime
			 * a new product is added. */
			setProductQuantities((prevState) => [
				...prevState,
				{ _id: response.data._id, quantity: 0 },
			]);
			flipFetchControl();
			setProductForm(defaultProductForm);
		} catch (error) {
			console.log(error.message);
		}
	};

	/**
	 * handler for ProductCard \<Button onClick> (Delete),
	 * deletes a product from the database
	 */
	const deleteProduct = async (_id) => {
		try {
			const response = await axios.delete(baseURL + productsPath + _id);

			console.log(response.data.message);
			/* removes the deleted product from productQuantities, this allows the
			 * quantities to not be reset to 0 everytime a product is deleted */
			setProductQuantities((prevState) =>
				prevState.filter((product) => product._id !== response.data._id)
			);
			flipFetchControl();
			removeFromCart(response.data._id);
		} catch (error) {
			console.log(error.message);
		}
	};

	/**
	 * handler for ProductCard \<Button onClick> (Edit),
	 * used to fill the product form with a product to edit
	 */
	const fetchProduct = async (_id) => {
		try {
			const response = await axios.get(baseURL + productsPath + _id);
			setProductForm(response.data.form);
			setEditing_id(response.data._id);
		} catch (error) {
			console.log(error.message);
		}
	};

	/**
	 * handler for QuantityCounter \<button onClick>,
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
	 * removes a cartItem
	 */
	const removeFromCart = (_id) => {
		const newCartItems = cartItems.filter(
			(cartItem) => cartItem.product._id !== _id
		);
		setCartItems(newCartItems);
	};

	/**
	 *  hander for CartContainer \<button onClick>,
	 * resets cartItems[]
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
				<ProductFrom
					{...productForm}
					updateForm={updateProductForm}
					addProduct={addProduct}
				/>
				<ProductsContainer
					products={products}
					quantities={productQuantities}
					setQuantity={setProductQuantity}
					addToCart={addToCart}
					deleteProduct={deleteProduct}
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

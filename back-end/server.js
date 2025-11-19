// initializations
// node
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
// server
const server = express();
const port = 3000;
const { DB_URI } = process.env;
// models
const Product = require("./models/Product");
// paths
const productsPath = "/products";
const _idParam = "/:_id";

// middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

// connection
mongoose
	.connect(DB_URI)
	.then(() => {
		server.listen(port, () => {
			console.log(
				`Database is connected\nServer is listening on port ${port}`
			);
		});
	})
	.catch((error) => console.log(error.message));

// routes
// get
// root
server.get("/", (request, response) => {
	response.send("Server is live");
});

// products
server.get(productsPath, async (request, response) => {
	try {
		response.send(await Product.find());
	} catch (error) {
		response.status(500).json({ message: error.message });
	}
});

// products @ _id
server.get(productsPath + _idParam, async (request, response) => {
	const { _id } = request.params;
	try {
		response.send(await Product.findById(_id));
	} catch (error) {
		response.status(500).json({ message: error.message });
	}
});

// post
server.post(productsPath, async (request, response) => {
	try {
		const product = await new Product(request.body).save();
		response.send({
			message: `${product.productName} was successfully added`,
			_id: product._id,
		});
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
});

// delete products @ _id
server.delete(productsPath + _idParam, async (request, response) => {
	const { _id } = request.params;
	try {
		const product = await Product.findByIdAndDelete(_id);
		response.send({
			message: `${product.productName} was successfully deleted`,
			_id: product._id,
		});
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
});

// patch products @ _id
server.patch(productsPath + _idParam, async (request, response) => {
	const { _id } = request.params;
	try {
		const product = await Product.findByIdAndUpdate(_id, request.body);
		response.send({
			message: `${product.productName} was successfully edited`,
			_id: product._id,
		});
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
});

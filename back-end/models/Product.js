const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
	// I want to see if it'll work if I leave out the "id"
	productName: {
		type: String,
		required: true,
	},
	brand: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		// don't want to look for unique image while testing
		required: false,
	},
	price: {
		type: String,
		required: true,
	},
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

/* JSON EXAMPLE
{
    "_id": {
        "$oid": "691bbc73ec793835b8681fec"
    },
    "id": "3017620422003",
    "productName": "Nutella",
    "brand": "Ferrero",
    "image": "https://images.openfoodfacts.org/images/products/301/762/042/2003/front_en.550.400.jpg",
    "price": "$3.65"
}
*/

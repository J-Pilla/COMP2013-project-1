export default function ProductFrom({
	productName,
	brand,
	image,
	price,
	addProduct,
	editProduct,
	updateForm,
	isEditing,
}) {
	return (
		<div className="productForm">
			<form onSubmit={!isEditing ? addProduct : editProduct}>
				<input
					type="text"
					name="productName"
					value={productName}
					placeholder="Product Name"
					onChange={updateForm}
					required
				/>
				<br />
				<input
					type="text"
					name="brand"
					value={brand}
					placeholder="Brand"
					onChange={updateForm}
					required
				/>
				<br />
				<input
					type="text"
					name="image"
					value={image}
					placeholder="Image Link"
					onChange={updateForm}
				/>
				<br />
				<input
					type="number"
					name="price"
					value={price}
					placeholder="Price"
					step=".01"
					min="0"
					onChange={updateForm}
					required
				/>
				<br />
			</form>
		</div>
	);
}

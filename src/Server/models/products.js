var mongoose = require('mongoose');

var schema = {
	id: Number,
	name: String,
	price: Number,
	img: String,
	category: String
	
}

var Products = mongoose.model("Products", schema);

module.exports = Products;
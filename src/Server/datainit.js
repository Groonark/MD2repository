var mongoose = require('mongoose'),
	dbname = "angular_mongodb";

var Product = mongoose.model("Product", {
		id: Number,
		name: String,
		price: Number,
		img: String,
		category: String
		
});

mongoose.connect("mongodb://localhost/" + dbname);


var db = mongoose.connection;
db.on("error", console.error);
db.once("open", deleteProducts);

function deleteProducts(){
	Product.remove({}, function(err){
		if(err) console.log(err);
		insertProducts()
	});
}

function insertProducts(){

	Product.create(
		{
		id: "1",
		name: "Skummetmælk",
		price: 6,
		img:"http://www.arla.dk/Global/arladk/produkter/brands/Arla-24/produkter/arla-24-skummetmaelk-large.png",
		category:"Økologisk"
	},
	{
		id: "2",
		name: "Minimælk",
		price: 6.50,
		img:"http://www.arla.dk/Global/arladk/produkter/brands/Arla-24/produkter/arla-24-minimaelk-large.png",
		category:"24"
	},
	{
		id: "3",
		name: "Letmælk",
		price: 6,
		img:"http://www.arla.dk/Global/arladk/produkter/brands/Arla-24/produkter/arla-24-letmaelk-large.png",
		category:"24"
	},
	{
		id: "4",
		name: "Sødmælk",
		price: 7,
		img:"http://www.arla.dk/Global/arladk/produkter/brands/Arla-24/produkter/arla-24-soedmaelk-large.png",
		category:"Laktosefri"
	},
	{
		id: "5",
		name: "Kernemælk",
		price: 9,
		img:"http://www.arla.dk/Global/arladk/produkter/brands/Arla/produkter/Arla_kaernemaelk_large.jpg",
		category:"Økologisk"
	});
}

// function insertProducts(){
// 	var products = new Product({
// 		id: "SkuM",
// 		name: "Skummetmælk",
// 		price: 6,
// 		img:"http://www.arla.dk/Global/arladk/produkter/brands/Arla-24/produkter/arla-24-skummetmaelk-large.png",
// 		category:"Økologisk"
// 	},
// 	{
// 		id: "MinM",
// 		name: "Minimælk",
// 		price: 6.50,
// 		img:"http://www.arla.dk/Global/arladk/produkter/brands/Arla-24/produkter/arla-24-minimaelk-large.png",
// 		category:"24"
// 	},
// 	{
// 		id: "LetM",
// 		name: "Letmælk",
// 		price: 6,
// 		img:"http://www.arla.dk/Global/arladk/produkter/brands/Arla-24/produkter/arla-24-letmaelk-large.png",
// 		category:"24"
// 	},
// 	{
// 		id: "SodM",
// 		name: "Sødmælk",
// 		price: 7,
// 		img:"http://www.arla.dk/Global/arladk/produkter/brands/Arla-24/produkter/arla-24-soedmaelk-large.png",
// 		category:"Laktosefri"
// 	},
// 	{
// 		id: "kerM",
// 		name: "Kernemælk",
// 		price: 9,
// 		img:"http://www.arla.dk/Global/arladk/produkter/brands/Arla/produkter/Arla_kaernemaelk_large.jpg",
// 		category:"Økologisk"
// 	});	
// 	products.save(function(err){
// 		if(err) console.log(err);
// 	});
// }
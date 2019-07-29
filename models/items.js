const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
	img: {type: String, required: true},
	title: {type: String, required: true},
	description: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	}
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
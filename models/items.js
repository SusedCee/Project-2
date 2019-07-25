const mongoose = require("mongoose");

const itemSchema = new Schema({
	img: {type: String, required: true},
	title: {type: String, required: true}
	description: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	}
});

const Item = mongoose.model("Item", photoSchema);

module.exports = Item;
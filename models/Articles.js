const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Article = new Schema({
	title: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Data.now,
		required: true
	},
	url: {
		type: String,
		required: true
	}
});

module.exports = Article;
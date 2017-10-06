var mongoose = require('mongoose');
var AnswerSchema = new mongoose.Schema({
	user: {type: String},
	title: {type: String},
	description: {type: String,required: true, minlength: 3 },
	likes: Number,	
}, {timestamps:true});

mongoose.model('Answer', AnswerSchema);
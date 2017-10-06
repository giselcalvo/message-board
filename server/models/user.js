// let mongoose = require('mongoose');
// let UserSchema = mongoose.Schema({
// 	name: {type: String, required: true},
// }, {timestamps:true});

// mongoose.model('User',UserSchema);


let mongoose = require('mongoose');
let UserSchema = mongoose.Schema({
	name: {type: String},
	username: {type: String},
	email: {type: String},
	password: {type: String}
}, {timestamps:true});

mongoose.model('User',UserSchema);
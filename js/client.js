var mongoose = require('mongoose');

var clientsSchema = new mongoose.Schema({
	id : {type:number, min:1, unique: true},
	email : string,
	subscribedOn : onDate
});

var Client = mongoose.model('myclient', clientsSchema);

module.exports = Client;
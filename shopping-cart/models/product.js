var mongooes = require('mongoose');
var Schema = mongooes.Schema;

var schema = new Schema({
    imagePath: {type: String, require: true}, 
    title: {type: String, require: true}, 
    description: {type: String, require: true}, 
    price: {type: Number, require: true}
});

module.exports = mongooes.model('Product', schema);
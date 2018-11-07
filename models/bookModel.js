var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookModel = new Schema({
    title: String,
    author: String,
    genre: String,
    read: {type: Boolean, default: true}
});

module.exports = mongoose.model('Book', bookModel);
const mongoose = require('mongoose');

const CookiesSchema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Number

});

module.exports = mongoose.model('Cookies', CookiesSchema);
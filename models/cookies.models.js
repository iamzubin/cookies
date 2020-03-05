const mongoose = require('mongoose');

const CookiesSchema = mongoose.Schema({
    name: String,
    stock: Number

});

module.exports = mongoose.model('Cookies', CookiesSchema);
const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    name: String,
    address: String,
    available: Boolean
});

module.exports = mongoose.model('Order', OrderSchema);
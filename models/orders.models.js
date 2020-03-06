const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    name: String,
    address: String,
    status: ["Processing", "Out", "Delivered"]
});

module.exports = mongoose.model('Order', OrderSchema);
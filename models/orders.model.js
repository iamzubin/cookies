const mongoose = require('mongoose');

const OrederSchema = mongoose.Schema({
    name: String,
    address: String,
    available: Boolean
});

module.exports = mongoose.model('Rider', OrderSchema);
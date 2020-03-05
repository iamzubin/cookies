const mongoose = require('mongoose');

const RiderSchema = mongoose.Schema({
    name: String,
    available: Boolean
});

module.exports = mongoose.model('Rider', RiderSchema);
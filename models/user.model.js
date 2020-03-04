const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    address: String
});

module.exports = mongoose.model('User', UserSchema);
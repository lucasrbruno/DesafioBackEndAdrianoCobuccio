const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    login: { type: String, required: true },
    passwordHash: { type: String, required: true },
    balance: { type: Number, default: 0.00 }
});

module.exports = mongoose.model('User', userSchema);
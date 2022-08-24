const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    purchases: {
        type: [String],
    },
    favorites: {
        type: [String],
    },
    card: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
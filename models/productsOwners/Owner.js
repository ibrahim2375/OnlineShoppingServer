const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
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
    number: {
        type: String,
        required: true,
    },
    products: {
        type: [String],
    },
    card: {
        type: String,
    },
    numberOfOrders: {
        type: Number, 
        default: 0, 
    },
    totalMonyEearned: {
        type: Number,
    }
}, { timestamps: true });

module.exports = mongoose.model('Owner', ownerSchema);
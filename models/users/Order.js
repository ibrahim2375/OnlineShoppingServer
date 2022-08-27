const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
    size: {
        type: String,
    },
    name: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    accept: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
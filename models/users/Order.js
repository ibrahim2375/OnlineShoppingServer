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
    ownerId: {
        type: String,
        required: true,
    },
    size: {
        type: String,
    },
    quantity: {
        type: String,
        required: true,
    },
    color: {
        type: String,
    },
    price: {
        type: String,
        required: true,
    },
    accept: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
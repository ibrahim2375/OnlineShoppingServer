const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
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
    accept: {
        type: Boolean,
        default: false,
    },
    paidMethod:{
        type: String,
        required: true,
    }   
}, { timestamps: true });

module.exports = mongoose.model('Purchase', purchaseSchema);
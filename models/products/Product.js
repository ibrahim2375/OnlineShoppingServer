const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    ownerId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    largeImg: {
        type: String,
    },
    category: {
        type: String,
    },
    brand: {
        type: String,
    },
    views: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
    },
    avilableColors: {
        type: [String],
    },
    avilableSizes: {
        type: [String],
    },
    offer: {
        type: String,
    },
    type: {
        type: String,
    },
    state: {
        type: String,
    },
    arrivalTime:{
        type: String,
    }

}, { timestamps: true });

export default mongoose.model('Product', productSchema);
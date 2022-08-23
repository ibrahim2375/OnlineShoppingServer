const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    ownerId: {
        type: String,
        required: true,
    },
    basketId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    accept: {
        type: Boolean,
        default: false,
    }

}, { timestamps: true });

export default mongoose.model('Owner', notificationSchema);
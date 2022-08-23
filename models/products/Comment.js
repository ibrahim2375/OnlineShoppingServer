const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }

}, { timestamps: true });

export default mongoose.model('Comment', commentSchema);
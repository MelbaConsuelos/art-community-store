
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    store_ID:{
        type: String
    },
    title: {
        type: String,
        required: true
    },
    product_image: {
        type: String,
        required: true
    },
    description_long: {
        type: String,
        required: true
    },
    description_short: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date_Added: {
        type: Date,
        default: Date.now
    },
    stock: {
        type: Number,
        required: true
    }
});

module.exports = Product = mongoose.model('product',ProductSchema);
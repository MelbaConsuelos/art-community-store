
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const OrderSchema = new Schema({
    items: [{
        productId: {
            type: String,
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.']
        },
        price: Number
    }],
    bill: {
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
    shipping_address: {
        street: String,
        city: String,
        state: String,
        zip_code: String,
    },
    client_name: {
        type: String,
    },
    client_email: {
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    client_phone: {
        type: Number,
    },
})

module.exports = Order = mongoose.model('order',OrderSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const UserSchema = new Schema({
    userId: {
        type: String,
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
    client_lastname: {
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

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const StoreSchema = new Schema({
    store_owners:[{
        vendor_ID: {
            type: String,
        },
        vendor_name: {
            type: String,
        }
    }],    
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: [true,'Please add a store description'],
    },
    store_logo: {
        type: String,
        required: true
    },
    store_banner: {
        type: String,
        required: true
    },
    store_image: {
        type: String,
        required: true
    },
})

module.exports = Store = mongoose.model('store',StoreSchema);
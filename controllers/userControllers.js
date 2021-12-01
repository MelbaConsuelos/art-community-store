const Order = require('../models/Order');
const Cart = require('../models/Cart');
const User = require('../models/User');
const config = require('config');
const stripe = require('stripe')(config.get('StripeAPIKey'));

module.exports.get_user = async (req,res) => {
    const userId = req.params.id;
    User.find({userId}).then(user=> res.json(user));
}

module.exports.create_user = async (req,res) => {
    try{
        const { shipping_address, client_name, client_lastname, client_email } = req.body;
        const newUser =  new User({
            shipping_address: shipping_address,
            client_name: client_name,
            client_lastname: client_lastname,
            client_email: client_email
        });
        return res.status(201).send(newUser);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
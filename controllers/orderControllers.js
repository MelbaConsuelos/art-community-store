const Order = require('../models/Order');
const Cart = require('../models/Cart');
const User = require('../models/User');
const config = require('config');
const stripe = require('stripe')(config.get('StripeAPIKey'));

module.exports.get_orders = async (req,res) => {
    const userId = req.params.id;
    Order.find({userId}).sort({date:-1}).then(orders => res.json(orders));
}

module.exports.checkout = async (req,res) => {
    try{
        const userId = "61a7eecd51cdc5559acb5fab";
        const source = "123";
        let cart = req.body;
        let user = await User.findOne({_id: userId});
        const email = "A01410921@itesm.mx";
        if(cart){
            // const charge = await stripe.charges.create({
            //     amount: cart.bill,
            //     currency: 'mxn',
            //     source: source,
            //     receipt_email: email
            // })
            // if(!charge) throw Error('Payment failed');
            
            const order = await Order.create({
                userId,
                client_email: email,
                items: cart.items,
                bill: cart.bill
            });
                return res.status(201).send(order);
            
        }
        else{
            res.status(500).send("You do not have items in cart");
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
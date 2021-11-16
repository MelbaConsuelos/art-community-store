const Store = require('../models/Store');

module.exports.get_stores = (req,res) => {
    Store.find().sort({date:-1}).then(stores => res.json(stores));
}

module.exports.post_store = (req,res) => {
    const newStore = new Store(req.body);
    newStore.save().then(store => res.json(store));
}

module.exports.update_store = (req,res) => {
    Store.findByIdAndUpdate({_id: req.params.id},req.body).then(function(store){
        Store.findOne({_id: req.params.id}).then(function(store){
            res.json(store);
        });
    });
}

module.exports.delete_store = (req,res) => {
    Store.findByIdAndDelete({_id: req.params.id}).then(function(store){
        res.json({success: true});
    });
}

module.exports.get_store = (req,res) => {
    Store.findById({_id: req.params.id}, req.body).then(function(store){
        Store.findOne({_id: req.params.id}).then(function(store){
            res.json(store);
        });
    });
}

const Vendor = require('../models/Vendor');

module.exports.get_vendors = (req,res) => {
    Vendor.find().sort({date:-1}).then(vendors => res.json(vendors));
}

module.exports.post_vendor = (req,res) => {
    const newVendor = new Vendor(req.body);
    newVendor.save().then(vendor => res.json(vendor));
}

module.exports.update_vendor = (req,res) => {
    Vendor.findByIdAndUpdate({_id: req.params.id},req.body).then(function(vendor){
        Vendor.findOne({_id: req.params.id}).then(function(vendor){
            res.json(vendor);
        });
    });
}

module.exports.delete_vendor = (req,res) => {
    Vendor.findByIdAndDelete({_id: req.params.id}).then(function(vendor){
        res.json({success: true});
    });
}
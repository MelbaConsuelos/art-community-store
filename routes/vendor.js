const { Router } = require('express');
const vendorController = require('../controllers/vendorControllers');
const router = Router();

router.get('/vendors', vendorController.get_vendors);
router.post('/vendors',vendorController.post_vendor);
router.put('/vendors/:id',vendorController.update_vendor);
router.delete('/vendors/:id',vendorController.delete_vendor);
router.get('/vendors/:id',vendorController.get_vendor);


module.exports = router;
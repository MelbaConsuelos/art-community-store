const { Router } = require('express');
const storeController = require('../controllers/storeControllers');
const router = Router();

router.get('/stores', storeController.get_stores);
router.post('/stores',storeController.post_store);
router.put('/stores/:id',storeController.update_store);
router.delete('/stores/:id',storeController.delete_store);
router.get('/stores/:id',storeController.get_store);


module.exports = router;
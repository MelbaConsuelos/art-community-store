const { Router } = require('express');
const userController = require('../controllers/userControllers');
const router = Router();

router.get('/user/:id',userController.get_user);
router.post('/user',userController.create_user);

module.exports = router;
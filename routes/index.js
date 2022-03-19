const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.post('/create', homeController.create);
router.get('/delete', homeController.remove);

router.get('/update', homeController.update);
router.post('/update/user', homeController.edit);


module.exports = router;
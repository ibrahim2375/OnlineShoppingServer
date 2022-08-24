const express = require('express');
const router = express.Router();
//middlewares 
const authenticateOwner = require('../../../../middlewares/authenticateOwner');
const ownerProducts_controller = require('../../../controller/products/ownerProducts_controller');
router.get('/', authenticateOwner, ownerProducts_controller.ownerProduct);
module.exports = router;
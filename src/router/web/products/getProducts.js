const express = require('express');
const router = express.Router();
// const authentication = require('../../../../middlewares/authenticateOwner');
const products_controller = require('../../../controller/products/products_controller');
router.get('/',products_controller.getProducts);
module.exports = router;
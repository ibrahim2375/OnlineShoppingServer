const express = require('express');
const router = express.Router();
//middlewares 
const authenticateOwner = require('../../../../middlewares/authenticateOwner');
const getOwners_controller = require('../../../controller/productsOwners/getOwners_controller');
router.get('/', authenticateOwner ,getOwners_controller.getOwners);
module.exports = router;
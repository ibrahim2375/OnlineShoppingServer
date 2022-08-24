const express = require('express');
const router = express.Router();
const auth_controller = require('../../../../controller/productsOwners/auth_controller');
router.post('/', auth_controller.createOwner);
module.exports = router;
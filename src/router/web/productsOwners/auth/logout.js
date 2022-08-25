const express = require('express');
const router = express.Router();
const logout_controller = require('../../../../controller/productsOwners/logout_controller');
router.get('/', logout_controller.logOut);
module.exports = router;
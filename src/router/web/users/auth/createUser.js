const express = require('express');
const router = express.Router();
const auth_controller = require('../../../../controller/users/auth_controller');
router.post('/', auth_controller.createUser);
module.exports = router;
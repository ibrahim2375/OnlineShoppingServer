const express = require('express');
const router = express.Router();
const register_controller = require('../../../controller/app/register_controller');
router.get('/', register_controller.register);
module.exports = router;
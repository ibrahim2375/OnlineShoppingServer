const express = require('express');
const router = express.Router();
const home_controller = require('../../../controller/app/home_controller');
router.get('/', home_controller.getHome);
module.exports = router;
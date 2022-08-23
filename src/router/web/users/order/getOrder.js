
const express = require('express');
const router = express.Router();
const getOrder_controller = require('../../../../controller/users/getOrder_controller');
//middlewares
const authenticate = require('../../../../../middlewares/authenticate');
router.get('/', authenticate ,getOrder_controller.getOrder);
module.exports = router;




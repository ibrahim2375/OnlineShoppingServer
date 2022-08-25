const express = require('express');
const router = express.Router();
const notFound_controller = require('../../../controller/404/notFound_controller');
router.get('/', notFound_controller.notFound);
module.exports = router;
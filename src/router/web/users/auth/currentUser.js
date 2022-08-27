const express = require('express');
const router = express.Router();
const auth_controller = require('../../../../controller/users/auth_controller');
//middlewares 
const authenticate = require('../../../../../middlewares/authenticateUser');
router.get('/', authenticate, auth_controller.getCurrentUser);
module.exports = router;
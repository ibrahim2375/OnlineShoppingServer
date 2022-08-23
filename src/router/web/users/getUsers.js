const express = require('express');
const router = express.Router();
//middlewares 
const authenticate = require('../../../../middlewares/authenticate');
const getUser_controller = require('../../../controller/users/getUsers_controller');
router.get('/' ,getUser_controller.getUsers);
module.exports = router;
const express = require('express');
const router = express.Router();
//middlewares 
const authenticate = require('../../../../middlewares/authenticate');

router.delete('/:id', (req, res, next) => {
    
});
module.exports = router;
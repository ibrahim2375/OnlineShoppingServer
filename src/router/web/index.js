const router = require('express').Router()
///user
router.use('/api/users/get', require('./users/getUsers'));
router.use('/api/users/update', require('./users/updateUser'));
router.use('/api/users/delete', require('./users/deleteUser'));
router.use('/api/users/order', require('./users/order/makeOrder'));
router.use('/api/users/get-order', require('./users/order/getOrder'));
router.use('/api/users/add-to-favorites', require('./users/favorites/favorites'));
router.use('/api/users/auth/login', require('./users/auth/signIn'));
router.use('/api/users/auth/create', require('./users/auth/createUser'));

//products      
router.use('/api/products/create', require('./products/createProduct'));
router.use('/api/products/get', require('./products/getProducts'));

module.exports = router
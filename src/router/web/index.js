const router = require('express').Router()

//pages 
router.use('/', require('./app/Home'));
///user
router.use('/api/user/get', require('./users/getUser'));
router.use('/api/users/get', require('./users/getUsers'));
router.use('/api/users/update', require('./users/updateUser'));
router.use('/api/users/delete', require('./users/deleteUser'));
router.use('/api/users/add-to-favorites', require('./users/favorites/favorites'));
router.use('/api/users/auth/create', require('./users/auth/createUser'));
//finished
router.use('/api/current-user', require('./users/auth/currentUser'));
router.use('/api/users/order', require('./users/order/makeOrder'));
router.use('/api/users/get-order', require('./users/order/getOrder'));
router.use('/api/users/delete-order', require('./users/order/deleteOrder'));
router.use('/api/users/auth/login', require('./users/auth/signIn'));
router.use('/api/users/auth/logout', require('./users/auth/logOut'));


//products      
router.use('/api/products/update', require('./products/updateProduct'));
router.use('/api/products/delete', require('./products/deleteProduct'));

// finished
router.use('/api/products/get', require('./products/getProducts'));
router.use('/api/products/owner/get', require('./products/OwnerProducts'));
router.use('/api/products/create', require('./products/createProduct'));




//products owners 
router.use('/api/owner/get', require('./productsOwners/getOwner'));
router.use('/api/owners/get', require('./productsOwners/getOwners'));
router.use('/api/owners/update', require('./productsOwners/updateOwner'));
router.use('/api/owners/delete', require('./productsOwners/deleteOwner'));
// finished
router.use('/api/owner/profile', require('./productsOwners/getOwner'));
router.use('/api/owners/auth/create', require('./productsOwners/auth/createOwner'));
router.use('/api/owners/auth/login', require('./productsOwners/auth/signIn'));
router.use('/api/owners/auth/logout', require('./productsOwners/auth/logout'));



// 404 not founded
router.use('*', require('./404/notFounded'));

module.exports = router
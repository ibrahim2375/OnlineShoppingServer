const Product = require('../../../../models/products/Product');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const session = require('express-session');
const productErrors = { message: '' };
//middlewares 
const authenticateOwner = require('../../../../middlewares/authenticateOwner');
// upload img
process.chdir('../');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${process.cwd()}/server/Public/uploads/products`)
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name)
    }
})
const upload = multer({ storage: storage });
router.get('/', authenticateOwner, (req, res) => {
    res.render('createProduct/createProduct.ejs', { owner: req.session.owner, errors: productErrors });
});
router.post('/', upload.single('img'), async (req, res) => {
    const file = req.file;
    const { name, description, location, arrivalTime, price } = req.body
    if (name === "" || !description === "" || location === "" || arrivalTime === "" || price === 0 || !req.file) {
        productErrors.message = 'can not be empty';
        res.redirect('/api/products/create');
    }
    else {
        ///////////////success
        if (req.session.owner) {
            const newProduct = new Product({ ...req.body, ownerId: req.session.owner._id, img: file.filename });
            await newProduct.save().then((result) => {
                if (!result) {
                    // res.status(200).send('not added succesfully....');
                    productErrors.message = 'something wrong';
                    res.redirect('/api/products/create');
                }
                res.status(200);
                setTimeout(() => res.redirect('/'), 2000);
            }).catch((err) => {
                // next(createError(err.status, err.message));
                productErrors.message = err.message;
                res.redirect('/api/products/create');
            });
            //////////////success
        } else {
            res.redirect('/');
        }
    }

});

module.exports = router;

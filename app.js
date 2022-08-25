const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
//router
const router = require('./src/router/index');
//import database
const connect_to_db = require('./config/DB');
///uses
app.use(cors({
    origin: ['http://localhost:5000'],
    method: ['GET', 'Post', 'Put', 'Delete'],
    credentials: true, //to allow to cookies take session data
}));
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// set the view engine to ejs
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');

//router
app.use('/', router);

//server variables
const port = process.env.PORT || 5000;
const host = process.env.SERVER_HOST || 'localhost';
//handel errors
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "something wrong ..."
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});
//server running
app.listen(port, host, () => {
    connect_to_db();
    console.log(`server running on port ${port} : Link : http://${host}:${port}`);
});
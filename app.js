const express = require('express');
require('dotenv').config();
const app = express();
//router
const router = require('./src/router/index.js');
//import database
const connect_to_db = require('./config/DB');










//router
app.use('/', router);
//server variables
const port = process.env.PORT || 5000;
const host = process.env.SERVER_HOST || 'localhost';
//server running
app.listen(port, host, () => {
    connect_to_db();
    console.log(`server running on port ${port} : Link : http://${host}:${port}`);
});
const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome');
})


//server variables
const port = process.env.PORT || 5000;
const host = process.env.SERVER_HOST || 'localhost';
//server running
app.listen(port, host, () => {
    console.log(`server running on port ${port} : Link : http://${host}:${port}`);
});
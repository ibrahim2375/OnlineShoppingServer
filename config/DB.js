const mongoose = require('mongoose');
const connect_to_db = () => {
    mongoose.connect(process.env.MONGOOSE_DB).then(() => {
        console.log('connected to db succussfully...');
    }).catch((err) => {
        console.log(`error is : ${err}`);
    })
}
module.exports = connect_to_db;
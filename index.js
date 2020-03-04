const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


// DB 

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("database connection successful");    
}).catch(err => {
    console.log('db connection failed', err);
    process.exit();
});

// ========

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())



app.listen(3000, () => {
    console.log("Server is listening on port 127.0.0.1:3000");
});
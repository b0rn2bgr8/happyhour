const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
const config = require('./config/config');


var app = express();

mongoose.connect(config.database, {useNewUrlParser: true}, (err) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("api server connected to database");
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

require('./routes/user')(app);

app.listen(config.port, () => { console.log("api server listening on port " + config.port) });
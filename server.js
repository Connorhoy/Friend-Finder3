// JS Code for Friend-Finder Homework Assignment. 

// Required Packages.
var express = require('express');
var bodyParser = require('body-parser');

// app config
var PORT = process.env.PORT || 5000;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// route config
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// start server
app.listen(PORT, function() {
    console.log('listening on ' + PORT);
});
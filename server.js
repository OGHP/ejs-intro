'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');

//creating an instance of the server
var app = express();

//configuring the express server to run everything through body-parser and everything through cors
app.use(bodyParser());
app.use(cors());
app.use(expressLayouts);

// set the views folder to handle all of the views that we are creating
app.set('views', path.join(__dirname, 'views'));
// set the view engine to ejs which is part of the npm package
app.set('view engine', 'ejs');

// create a "get" route for the root directory
app.get('/', function (request, response) {
    //response.render() takes up to 3 parameters:
    //1. the 'string' of the file name
    //2. object of local variables
    //3. callback

    //to use these variables, go to the index.ejs file
    response.render('index', {
        //inject a value into a route
        people: [
            {name: 'Edward'},
            {name: 'Heather'}
        ]
    });
});

app.get('/about', function(request, response) {
    response.render('about');
});

//the path for our sever to listen to and where the app will render
app.listen(8000, function() {
    console.log('heard on 8000, woot!');
});

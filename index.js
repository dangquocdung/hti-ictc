var express = require('express')
var mysql = require('mysql')

var app = express()
var port = process.env.PORT || 8081;

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'hatinh6t',
    debug    :  false
});

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port);
console.log('The magic happens on port ' + port);

// routes ======================================================================
require('./app/routes.js')(app, pool); // load our routes and pass in our app and fully configured passport

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// This sets up the basic properties for our express server 

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3000; // Sets an initial port. 

// BodyParser makes it easy for our server to interpret data sent to it.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or 

require('../app/routing/apiRoutes.js')(app); 
require('../app/routing/htmlRoutes.js')(app);



// LISTENER
// The below code effectively "starts" our server 


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
//call the packages we need
var express = require("express"); //call express
var app = express(); //define our app using express
var port = 1338; //set our port


var router = express.Router();

//REGISTER OUR ROUTES
//all of our routes will be prefixed with /api
app.use(express.static('public'));
app.use('/', router);
//START THE SERVER
// ======================================================
app.listen(port);
console.log('Server running at port :- ' + port);
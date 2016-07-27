//DEPENDENCIES!!!!!!!!!!

var express = require("express");
var path = require('path')
var port = 1337;
var bodyParser = require('body-parser')

var app = express();


//CONFIG APP!!!!!!!!!!!

app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "bower_components")));
app.use(bodyParser.json());

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

//LISTENING!!!!!!!

app.listen(port, function(){
    console.log("kickin' it on port", port);
})
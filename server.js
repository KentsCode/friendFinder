var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
var fs = require('fs');

const app = express();

var friends = require("./data/friends.js");
app.use(express.static("./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var port = process.env.PORT || 3000;

require('./routing/htmlRoutes.js')(app);
require('./routing/apiRoutes.js')(app);

app.listen(port, function() {
    console.log("App listening on PORT " + port);
});
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 3000;

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({extended: true})

app.use(bodyParser.json({type: "application/**json"}))

app.use(bodyParser.raw({type: "application/vnd.custom-type"}))

app.use(bodyParser.text({type: "text/html"}))
app.use(express.static(path.join(__dirname, './public')));

require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App is listening on port: " + PORT)
});
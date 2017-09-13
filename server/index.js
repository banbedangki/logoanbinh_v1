var express    = require("express");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app        = express();

//get routes
var demuc = require('./app/routes/demucRoute');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

//get api
app.use('/api', demuc);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3000);

app.get("/", function(req, res){
    res.render("home");
});
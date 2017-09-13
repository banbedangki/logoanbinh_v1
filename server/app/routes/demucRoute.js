var express    = require("express");
var router     = express.Router();
var bodyParser = require("body-parser");

var demuc = require('../models/testGetdemuc');
router.use(bodyParser.json());
router.get('/laytenDemuc', function(req, res){
    demuc.layds(req, res);
});
module.exports = router;
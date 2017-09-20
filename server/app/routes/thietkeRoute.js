var express    = require("express");
var router     = express.Router();
var bodyParser = require("body-parser");

var thietke = require('../models/thietke');
router.use(bodyParser.json());
router.get('/laydsThietke', function(req, res){
    thietke.laydsThietke(req, res);
});
module.exports = router;
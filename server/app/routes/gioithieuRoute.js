var express    = require("express");
var router     = express.Router();
var bodyParser = require("body-parser");

var gioithieu = require('../models/gioithieu');
router.use(bodyParser.json());
router.get('/layGioithieu', function(req, res){
    gioithieu.laydsGioithieu(req, res);
});
module.exports = router;
var express    = require("express");
var router     = express.Router();
var bodyParser = require("body-parser");

var demuc = require('../models/demuc');
router.use(bodyParser.json());
router.get('/laytenDemuc', function(req, res){
    demuc.layds(req, res);
});
// router.delete('/demuc', function(req, res){
//     demuc.xoaDemuc(req, res);
// });
module.exports = router;

var connection = require('../models/connection');

var getDemuc = function(req, res){
    var sql = "select * from demuc";
    connection.query(sql, function(err, rows){
        res.json(rows);
    });
};
module.exports = {
    layds : getDemuc
};
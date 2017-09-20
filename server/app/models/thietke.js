var connection = require('../models/connection');

var getThietke = function(req, res){
    var sql = "SELECT * FROM mauthietke";
    connection.query(sql, function(err, rows){
        res.json(rows);
    });
};
module.exports = {
    laydsThietke : getThietke
};
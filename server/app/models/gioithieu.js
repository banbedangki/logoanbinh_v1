var conection = require('../models/connection');

var getGioithieu = function(req, res){
    var sql = "SELECT * FROM gioithieu";
    conection.query(sql, function(err, rows){
        res.json(rows);
    });
};
module.exports = {
    laydsGioithieu : getGioithieu
};
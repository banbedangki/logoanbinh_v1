var connection = require('../models/connection');

var getDemuc = function(req, res){
    var sql = "select * from demuc";
    connection.query(sql, function(err, rows){
        res.json(rows);
    });
};

// var deleteDemuc = function(req, res){
//   var sql = "delete from demuc where id=?";
//   connection.query(sqlm function(err, rows){
//     res.json(rows);
//   });
// };
module.exports = {
    layds : getDemuc,
    xoaDemuc : deleteDemuc
};

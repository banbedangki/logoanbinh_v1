var connection = require('../models/connection.js');

module.exports.getIntroduce = function(req, res, next){
  var sql = "select * from gioithieu";
  connection.query(sql, function(err, rows){
      res.json(rows);
  });

  module.exports.createIntroduce = function(req, res, next){
    var sql = "INSERT INTO `gioithieu`(`id_gioithieu`, `ten_gioithieu`, `noidung`) VALUES (?,?,?)";
    connection.query(sql, function(err, rows){
      res.json(rows);
    });
  }
}

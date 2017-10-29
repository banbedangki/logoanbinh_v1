var connection = require('../connection/connection.js');

module.exports.getIntroduce = function(req, res, next){
  var sql = "select * from gioithieu";
  connection.query(sql, function(err, rows){
      res.json(rows);
  });
 }

  module.exports.createIntroduce = function(req, res, next){
    var postData = req.body;
    connection.query('INSERT INTO gioithieu SET ?', postData, function (err, results, fields) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
  }

  module.exports.editIntroduce = function(req, res, next){
    connection.query('UPDATE gioithieu SET ten_gioithieu=?,noidung=? WHERE id_gioithieu = ?',
    [req.body.ten_gioithieu, req.body.noidung, req.body.id_gioithieu], function(err, results, fields){
      if(err) throw err;
      res.end(JSON.stringify(results));
    });
  }

  // module.exports.deleteoneIntroduce = function(req, res, next){
  //   connection.query('DELETE FROM gioithieu WHERE id_gioithieu = ?', [req.body.id_gioithieu], function(err, results, fields){
  //     if(err) throw err;
  //     res.end('detele success!');
  //   });
  // }

  module.exports.deleteoneIntroduce = function(id, req, res, next){
    connection.query('DELETE FROM gioithieu WHERE id_gioithieu = ?', [req.body.id], function(err, results, fields){
      if(err) throw err;
      res.end('detele success!');
    });
  }

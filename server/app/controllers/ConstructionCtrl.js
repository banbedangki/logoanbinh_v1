var connection = require('../connection/connection');

module.exports.getConstruction = function(req, res, next){
    var sql = "select * from mauthicong";
    connection.query(sql, function(err, rows){
        res.json(rows);
    });
}

module.exports.createConstruction = function(req, res, next){
    var postData = req.body;
    connection.query('INSERT INTO mauthicong SET ?', postData, function(err, results, fields){
        if(err) throw err;
        res.end(JSON.stringify(results));
    });
}

module.exports.editConstruction = function(req, res, next){
    connection.query('UPDATE mauthicong SET ten_mautc=?,noidungmautc=? WHERE id_thicong = ?',
    [req.body.ten_mautc, req.body.noidungmautc, req.body.id_thicong], function(err, results, fields){
        if(err) throw err;
        res.end(JSON.stringify(results));
    });
}

 module.exports.deleteoneIntroduce = function(req, res, next){
    connection.query('DELETE FROM mauthicong WHERE id_thicong = ?', [req.body.id_thicong], function(err, results, fields){
      if(err) throw err;
      res.end('detele success!');
    });
  }
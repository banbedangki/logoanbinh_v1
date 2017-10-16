var connection = require('../connection/connection.js');

module.exports.getDesigns = function(req, res, next){
  var sql = "SELECT * FROM mauthietke";
  connection.query(sql, function(err, rows){
    res.json(rows);
  });
}

module.exports.createDesign = function(req, res, next){
  var postData = req.body;
  connection.query('INSERT INTO mauthietke SET ?', postData, function(err, results, fields){
    if(err) throw err;
    res.end(JSON.stringify(results));
  });
}

module.exports.editDesign = function(req, res, next){
  connection.query('UPDATE mauthietke SET ten_mautk=?,hinhtk=?,noidungmautk=? WHERE id_thietke = ?', [req.body.id_thietke], function(err, results, fields){
    if(err) throw err;
    res.end(JSON.stringify(results));
  });
}

module.exports.deleteoneDesign = function(req, res, next){}
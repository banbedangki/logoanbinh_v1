var mysql    = require("mysql");
var dbConfig = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'datamodel'
});
var connection = mysql.createConnection(dbConfig);

dbConfig.connect(function(err){
    if(err){
        console.error('DB' + err.message);
        return;
    }
    console.log("Successful");
});
module.exports = dbConfig;
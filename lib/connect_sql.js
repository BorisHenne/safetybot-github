var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'safetybot',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

module.exports = connection;

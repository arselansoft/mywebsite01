var mysql = require('mysql');
var dbHost = "localhost";

var con = mysql.createConnection({
  host: dbHost,  //"localhost",
  user: "root",
  password: "",
  database: "myweb01"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (username, password, keterangan) VALUES ('admin', 'adminTEST', 'admin super user')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

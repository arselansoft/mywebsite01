/*server.js 
- my website Arselantronik
26-07-2018
*/
var express    = require('express');
var bodyParser = require('body-parser');
var mysql 	   = require('mysql');

var app      = express();
var port   	 = 8090;
var dbHost   = "localhost";
var dbUser   = "root";
var dbPasswd = "";
var dbDatabase = "myweb01";

//database connection mysql 
var con = mysql.createConnection({
  host: dbHost, //"localhost",
  user: dbUser, //"root",
  password: dbPasswd, //"",
  database: dbDatabase, //"myweb01"
});

/*Body parser*/
app.use(bodyParser.urlencoded({
    extended: true
}));

var bcrypt = require('bcrypt-nodejs')
	
//get file css - design
app.use('/css', express.static(__dirname + '/css'));	

//get image from folder ../img/
app.use('/img', express.static(__dirname + '/img'));	

app.get('/', function(req, res, next) {
	res.sendFile( __dirname + '/index.html');
});

app.get('/register', function (req, res, next) {
    res.sendFile( __dirname + '/register.html');
});

app.post('/register', function (req, res, next) {
//    console.log('Registered TEST!!');
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		var password = bcrypt.hashSync(req.body.password);
		
		var usRegister = [
			[req.body.username, password, 'Registered Web']
		];
	
		var sql = "INSERT INTO users (username, password, keterangan) VALUES ?";
	
		con.query(sql, [usRegister], function (err, result) {
			if (err) throw err;
			console.log(result);
		});
	});	
	
	// console.log('Username: ' + req.body.username);
	// console.log('Password: ' + req.body.password);
});

app.listen(port, '0.0.0.0', function() {
	console.log('Server Running at port' + port);
});
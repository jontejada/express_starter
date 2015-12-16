// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });


var express = require('express');
var pg = require('pg');
var app = express();
var client = new pg.Client("postgres://localhost:5432/books");
client.connect();

// app.get('/',function(req,res) {
// 	client.query("SELECT id, title FROM books;", function(err, result) {
// 		var responseBody = '';
// 		for (var i = 0; i<result.rows.length; i++) {
// 			responseBody += result.rows[i].id +" : " + result.rows[i].title;
// 		}
// 		res.send(responseBody);
// 	})
// });

// var booksRouter = require("./books");
var booksRouter = require("./books");
app.use("/", booksRouter);

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('listening at http://%s:%s', host, port); //odd
});
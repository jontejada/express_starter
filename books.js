//router for books
var express = require('express');
// var router = express.Router();
// router.get("/books", function(req,res){
// 	res.send("somebooks");
// });
// module.exports = router;



module.exports = function(client) {
	var router = express.Router();
	router.get("/books", function(req,res){
			
		res.send("somebooks");
	});

};
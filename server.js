var express = require('express');
var app = express();

var port = 3000;


var middleware= {
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
		next();

	},
	logger : function(req, res, next){
		//new Date().toString();
		console.log('Request: ' + req.method + ' ' + req.originalUrl);
		console.log('Date is ' + new Date().toString());
		next();
	}
};


app.use(middleware.logger);

//app.use(middleware.requireAuthentication);
/*app.get('/', function(req, res) {
	res.send('Hello Express');
}); */

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(port, function() {
	console.log('Express server started! Port No. : ' + port);
});

// /about
// about us
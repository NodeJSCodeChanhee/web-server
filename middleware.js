//use module exports to expose middleware

module.exports = {
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
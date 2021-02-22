var express = requires express

var app = express();
var handlebars = require('express-handelbars').create({defaultLayout:'main'});

app.engine('handelbars', handlebar.engine);
app.set('view engine', 'handelbars')
app.set('port', 7152)

app.get('/',function(req,res){
	res.render('The page is up');
});


function genContext():
     var stuffToDisplay = {};
     return stuff to Display;




app.use(function(req,res){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' +app.get('port')+ '; press Ctrl-C to terminate.');
});
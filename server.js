var express = require('express');
var routes = require('./routes');
var http = require('http');
var reactViews = require('express-react-views');

var app = express();

// all environments
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.get('/', require('./routes').index);
app.post('/usuarios', require('./routes').usuarios);


app.listen(8080, ()=>{

	console.log('Servidor corriendo...');
});

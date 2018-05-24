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
app.get('/usuarios', require('./routes').usuarios);
app.get('/ligas',require('./routes').ligas)


app.listen(8080, ()=>{

	console.log('Servidor corriendo...');
});

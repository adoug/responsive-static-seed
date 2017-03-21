var express = require('express');
var cons = require('consolidate');
var path = require('path');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));

app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, function(err) {
    console.log('Running on port' + port);
});

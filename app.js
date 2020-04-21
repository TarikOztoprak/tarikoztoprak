var express = require('express');
var app = express();

app.use( express.static( "public" ) );

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
res.render('index');
});

app.get('/takorpg3', function(req, res) {
    res.render('takorpg3');
    });

//404 Not Found
app.get('*', function(req, res){
    res.render('404'); 
});

app.listen(process.env.PORT || 3000, function() {
    console.log("listening on 3000");
});
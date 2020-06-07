var express = require('express');
var app = express();

app.use( express.static( "public" ) );

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
res.render('index');
});


//404 Not Found
app.get('*', function(req, res){
    res.render('404'); 
});

app.listen(process.env.PORT || 3000, function() {
    console.log("listening on 3000");
});
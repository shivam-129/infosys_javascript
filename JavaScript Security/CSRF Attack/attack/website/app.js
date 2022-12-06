var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/changePassword', (req, res) => {
    console.log(req.body.password )
    fs.writeFileSync('password.txt', req.body.password);
    res.send(`<body style="font-family: Arial, Helvetica, sans-serif;
    background-color:rgb(239, 252, 205)"><h1>Hi user, password changed successfully !! </h1></body>`);
});

app.listen(3000, 'localhost' , console.log( 'running on port 3000') );
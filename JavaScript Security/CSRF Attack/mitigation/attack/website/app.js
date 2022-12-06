var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var path = require('path');

const csrf = require('csurf');
const csrfMiddleware = csrf({ cookie: true });

var app = express();

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "FilmyGossip.html"));
});

app.get('/api/getToken', csrfMiddleware, (req, res) => {
    console.log('get api/token ' , req.csrfToken())
    res.json({ _csrf: req.csrfToken() });
});

app.post('/changePassword',csrfMiddleware ,  (req, res) => {
    console.log('password.txt', req.body.password , req.body._csrf)
    
    fs.writeFileSync('password.txt', req.body.password);
    res.send(`<body style="font-family: Arial, Helvetica, sans-serif;
    background-color:rgb(239, 252, 205)"><h1>Hi user, password changed successfully !! </h1></body>`);
});

app.listen(3000, 'localhost' , console.log( 'running on port 3000') );


////////


// In line 7  CSURF module is imported.

// In line 8  csrfMiddleware is configured so that secret gets stored in the cookie.

// In line 22 and 26  csrfMiddleware is used to validate the token.

// In line 23 CSRF token is created and is sent to the frontend.
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'FilmyGossip.html'));
});
console.log(__dirname)
// app.get('/' , (req , res) => {
//   res.sendFile('FilmyGossip.html' ,  {root: __dirname })
// } )

app.get('/submit', (req, res) => {
  let name = req.query.name;
  let review = req.query.review;
  console.log(name , review)

  fs.appendFileSync('data.txt', "\n" + name + ": " + review + "<br>");
  res.redirect('/showtext');
});

app.get('/showtext', (req, res) => {
  var data = fs.readFileSync('data.txt');
  console.log('data '  , data)
  res.send(`<link rel="stylesheet" href="style.css"><h1 id="heading"> Welcome to FilmyGossip </h1>
  <br><div id="container"><h2 id="title"><u>Submitted Reviews</u></h2><br><div id="reviewBox">
  <h4 style="color:black">${data}</h4> </div></div><hr><footer><p>FilmyGossip<span> &copy; 2019</span></p>
  <p><u>Contact Us:</u></p><p>Mail Id: filmyupdates@gossip.com</p><p id="footer">** Disclaimer: This demo is only for Educational purpose. Please do not try this attack on any commercial website **</footer>`);
});

app.listen(3000 , 'localhost' , () => console.log("http server running on port http://localhost:3000"));
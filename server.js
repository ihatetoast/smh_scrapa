//[x]set up deps
//[ ]initialise app
//[ ]set up the database
//[ ]set up any middleware nec
//[ ]set up routes and use routes
//[ ]start the server

//dependencies
const express = require('express');
const logger = require('morgan');

const bodyParser = require('body-parser');
const path = require('path');

//ROUTES! 
const routes = require('./routes');

const hbs = require('express-handlebars');

const mongoose = require('mongoose');
//cheerio and axios required in the scraper.js

//set PORT that's Heroku ready, Freddy
const PORT = process.env.PORT || 3000;

//fire up express
const app = express();

//set up my babydase:
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/scraperdb';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {});

// mongoose.connect(MONGODB_URI.database, err =>{
//   if(err){
//     console.log("Like a bad date, there's no connection.");
//   } else {
//     console.log("Bingo bango bongo you're connected to the Mongo oh oh ohoh oh ohhh!");
//   }
// });
var db = mongoose.connection;

//handlebars templating engine
app.engine('hbs',  hbs({
  extname: 'hbs', 
  defaultLayout:'main',
  layoutsDir: __dirname + '/views/layouts/'
}));
//path to layout/views dir:
app.set('views', path.join(__dirname, 'views'));
//make it so
app.set('view engine', 'hbs');


//MIDDLEWARE
//log requests
app.use(logger("dev"));

//set up static access to public dir:
app.use(express.static(path.join(__dirname, '/public')));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', routes);





//start the serva, Minerva
app.listen(PORT, function(){
  console.log(`All the cool kids are scrapin' on ${PORT}`);
});
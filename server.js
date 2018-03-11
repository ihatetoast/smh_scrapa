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

const exphbs = require('express-handlebars');

const mongoose = require('mongoose');
//cheerio and axios required in the scraper.js

//set PORT that's Heroku ready, Freddy
const PORT = process.env.PORT || 3000;

//fire up express
const app = express();


//start the serva, Minerva
app.listen(PORT, function(){
  console.log(`All the cool kids are scrapin' on ${PORT}`);
})
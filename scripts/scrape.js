const express = require('express');
const cheerio = require('cheerio');
const request = require('request');

const app = express();
const router = express.Router();//export the router

//require the models
const db = require('../models');

//GET route for SCRAPING the SMH
//if poss, narrow to books


// Make a request call to grab the HTML body SMH
app.get('/scrape', (req, res) => {

  request("https://www.smh.com.au/", (err, res, html) => {

  const $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  let results = [];

  $("h3._2XVos").each(function(i, el) {

    const link = $(el).children().attr("href");
    const title = $(el).children().text();

    results.push({
      title,
      link
    });
  });

  // Log the results 
  console.log(results);
});

});
//make scraper api avail
module.exports = router;
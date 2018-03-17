const htmlPaths = {};

htmlPaths.mult = (req, res) => {
  let sum = 2 * 2;
  let response = {
    sum: sum
  }
  return res.send(response);
};

htmlPaths.div = (req, res) => {
  let sum = 12 / 6;
  let response = {
    sum: sum
  }
  return res.send(response);
};

module.exports = htmlPaths;


// //get the articles and whatever else I collect from SMH and fill hbs

// const express = require('express');
// const router = require('router');

// //get the Headlines
// const db = require('../../models');//Headline or Note
// //get all scraped articles (find and sort)
// //THEN render to handlebars as
// //catch errs
// router.get('/', (req, res) =>{
//   db.Headline
//     .find({})
//     .sort( {_id: -1} )
//     .then( scrapedNews => res.render('main', {scrapedNews}))
//     .catch( err => res.jso(err) )
// });

// module.exports = router;
const express = require('express');
const router = express.Router();

const apiRoute = require('./api');
const htmlRoute = require('./html')

//add/sub notes from tutorial to help me get my head around this.
//api
router.get('/sum', add_sub.sum);//=files ./api/index.html => .sum  
router.get('/sub', add_sub.sub);

//html
router.get('/home', htmlRoute);
router.get('/saved', htmlRoute);

module.exports = router;


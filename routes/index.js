'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.sendFile('./views/index.html', { title: 'Express', root: './' });
});

module.exports = router;

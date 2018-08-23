//requires
var express = require('express');

//declare a new router
var router = express.Router();

//get authorization helper function
var loggedIn = require('../middleware/loggedIn');

//define routes
router.get('/', loggedIn, function(req, res){
	res.render('profile/profile');
});

module.exports = router;
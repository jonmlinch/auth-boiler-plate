//requires
var express = require('express');

//declare a new router
var router = express.Router();

//define routes
router.get('/login', function(req, res){
	res.send('auth login form page');
});

router.post('/login', function(req, res){
	res.send('login post route');
});

router.get('/signup', function(req, res){
	res.send('auth signup form page');
});

router.post('/signup', function(req, res){
	res.send('auth post route')
});

router.get('/logout', function(req, res){
	res.send('logout page')
})

module.exports = router;
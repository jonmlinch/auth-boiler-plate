var passport = require('passport');
var passportLocalStrategy = require('passport-local').Strategy;

//Declare variables
var db = require('../models');

//Provide serialize/deserialize functions
passport.serializeUser(function(user, callback){
	callback(null, user.id);
});

passport.deserializeUser(function(id, callback){
	db.user.findById(id).then(function(user){
		callback(null, user);
	}).catch(function(err){
		callback(err, null);
	});
});

//Do the actual work of logging in
passport.use(new passportLocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, function(email, password, callback){
	db.user.findOne({
		where: { email: email }
	}).then(function(foundUser){
		if(!foundUser || !foundUser.isValidPassword(password)){
			callback('Invalid User', null)
		}
		else {
			callback(null, foundUser);
		}
	}).catch(function(err){
		callback(err, null);
	})
}))
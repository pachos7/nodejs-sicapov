// config/passport.js

var log = require('log4js').getLogger("sicapov");

var LocalStrategy   = require('passport-local').Strategy;
//var User       		= require('../app/models/user');
//var User 			= mongoose.model('User');

var User = [{ id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' }, 
			{ id: 2, username: 'joe', password: 'birthday', email: 'joe@example.com' }];

function findOne(username, fn) {
  for (var i = 0, len = User.length; i < len; i++) {
    var user = User[i];
    if (user.username === username) {
      return fn(null, user);
    }
  }
  return fn(null, null);
}

function findById(id, fn) {
  var idx = id - 1;
  if (User[idx]) {
    fn(null, User[idx]);
  } else {
    fn(new Error('User ' + id + ' does not exist'));
  }
}

module.exports = function(passport) {
    // required for persistent login sessions, passport needs ability to serialize and unserialize users out of session

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        //User.findById(id, function(err, user) {
		findById(id, function (err, user) {
            done(err, user);
        });
    });
	
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) { // callback with username and password from our form

        // find a user whose username is the same as the forms username
        // we are checking to see if the user trying to login already exists
        //User.findOne({ 'local.username' :  username }, function(err, user) {
		 findOne(username, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user) {
				log.error("Intento de login de usuario inexistente: " + username);
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
			}
            // if the user is found but the password is wrong
            //if (!user.validPassword(password))
			if (user.password != password) {
				log.error("Intento de login con password errado de usuario : " + username);
				return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
			}
            // all is well, return successful user
            log.info("Login exitoso de usuario : " + username);
			return done(null, user);
        });

    }));
	
}



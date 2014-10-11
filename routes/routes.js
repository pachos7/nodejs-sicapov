// routes/routes.js
var log = require('log4js').getLogger("sicapov");

module.exports = function(app, passport) {
	var customers 	= require('./customers'); 
	var victimas 	= require('./victimas'); 
	var usuario     = "";

	
	app.get('/', function(req, res) {
		if (req.isAuthenticated())
			usuario = req.user.username;
		else
			usuario = "";
			
		res.render('index', {usuario: req.user, page_title:"Sicapov" });
	});

	app.get('/customers', 			isLoggedIn, customers.list);
	app.get('/customers/add', 		isLoggedIn, customers.add);
	app.post('/customers/add', 		isLoggedIn, customers.save);
	app.get('/customers/delete/:id',isLoggedIn, customers.delete_customer);
	app.get('/customers/edit/:id', 	isLoggedIn, customers.edit);
	app.post('/customers/edit/:id', isLoggedIn, customers.save_edit);
	app.get('/consulta', 			isLoggedIn, victimas.consultavictima);
	app.post('/consulta', 			isLoggedIn, victimas.buscarvictima);
	app.get('/caracterizacion', 	isLoggedIn, victimas.caracterizacion);
	app.post('/caracterizacion', 	isLoggedIn, victimas.guardar);
	app.get('/lista', 				isLoggedIn, victimas.lista);
	

	
	app.get('/noticias', function(req, res) {
		res.render('noticias', {usuario: req.user, page_title:"Noticias", message: req.flash('loginMessage') });
	});
	
	
	app.get('/login', function(req, res) {
		res.render('login', {usuario: req.user, page_title:"Login", message: req.flash('loginMessage') });
	});
	
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/', 	// redirect to the secure profile section
		failureRedirect : '/login', 	// redirect back to the signup page if there is an error
		failureFlash : true 			// allow flash messages
	}));

	app.get('/logout', isLoggedIn, function(req, res) {
		log.info("Login out usuario : " + req.user.username);
		req.logout();
		res.redirect('/');
	});
};

function isLoggedIn(req, res, next) {

	if (req.isAuthenticated())
		return next();
	else {
		res.redirect('/login');
	}
}

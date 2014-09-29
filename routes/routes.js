// routes/routes.js

module.exports = function(app, passport) {
	var customers 	= require('./customers'); 
	var victimas 	= require('./victimas'); 
	var usuario     = "";

	
	app.get('/', function(req, res) {
		if (req.isAuthenticated())
			usuario = req.user.username;
		else
			usuario = "";
			
		console.log("usuario:" + JSON.stringify(usuario));
		res.render('index', {usuario: req.user, page_title:"Sicapov" });
	});

	app.get('/customers', customers.list);
	app.get('/customers/add', customers.add);
	app.post('/customers/add', customers.save);
	app.get('/customers/delete/:id', customers.delete_customer);
	app.get('/customers/edit/:id', customers.edit);
	app.post('/customers/edit/:id',customers.save_edit);
	app.get('/consulta', victimas.consultavictima);
	app.post('/consulta', victimas.buscarvictima);
	app.get('/caracterizacion', victimas.caracterizacion);
	app.post('/caracterizacion', victimas.guardar);
	app.get('/lista', victimas.lista);

	app.get('/login', function(req, res) {
		// If already logged redirect to home
		res.render('login', {usuario: req.user, page_title:"Login", message: req.flash('loginMessage') });
	});

	app.post('/login', passport.authenticate('local-login', {
		//successRedirect : '/profile', 	// redirect to the secure profile section
		successRedirect : '/', 	// redirect to the secure profile section
		failureRedirect : '/login', 	// redirect back to the signup page if there is an error
		failureFlash : true 			// allow flash messages
	}));

	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});
	
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}

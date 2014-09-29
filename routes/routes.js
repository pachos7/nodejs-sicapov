// routes/routes.js

module.exports = function(app, passport) {
	var customers 	= require('./customers'); 
	var victimas 	= require('./victimas'); 

	app.get('/', function(req, res) {
		res.render('index', {page_title:"Sicapov" });
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
		res.render('login', { message: req.flash('loginMessage') });
	});

	app.post('/login', passport.authenticate('local-login', {
		//successRedirect : '/profile', 	// redirect to the secure profile section
		successRedirect : '/', 	// redirect to the secure profile section
		failureRedirect : '/login', 	// redirect back to the signup page if there is an error
		failureFlash : true 			// allow flash messages
	}));

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

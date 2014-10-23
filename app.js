/* Sicapov */
var express = require('express');
var http = require('http');
var path = require('path');
var log4js = require( "log4js" );
var passport = require('passport');
var flash    = require('connect-flash');
var nodeExcel = require('excel-export');

var configDB = require('./config/database.js');

require('./config/passport')(passport);           // pass passport for configuration

var mysql = require('mysql'), 
    connection = require('express-myconnection'),
    local_db_config = {
        host: '127.0.0.1',
        port : 3306,
        user: 'root',
        password : '',
        database:'sicapov'
    },
    remote_db_config = {
        host: 'db4free.net', 
        user: 'pachos7',
        password : 'sicapov',
        port : 3306, 
        database:'sicapov'
    };

    
log4js.configure({
appenders: [
   { type: 'console' },
   { type: 'file', 
   	 filename: "./logs/app.log", 
   	 maxLogSize: 10485760,
   	 backups: 3,
   	 category: 'sicapov' }
  ]
});

var logger = log4js.getLogger("sicapov");

logger.info("Iniciando applicacion... ");

var db_config = remote_db_config;

/* var mysqlconnection = mysql.createConnection(db_config);
mysqlconnection.connect();
mysqlconnection.query('SELECT "OK" AS connection_status', function(err, rows, fields) {
  if (err) { 
  	logger.error('Error connecting to database:' + err );
  	throw err;
	}
  logger.info('Successful connection to database. Connection_status is: ', rows[0].connection_status);
});

mysqlconnection.end();
 */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var app = express();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(connection(mysql, db_config, 'pool'));
app.use(express.cookieParser() );
app.use(express.bodyParser());
app.use(express.session({ secret: 'EiBl1jgZIZ' })); // session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}
app.use(app.router);

require('./routes/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

http.createServer(app).listen(app.get('port'), function(){
  logger.info("Applicacion Iniciada en puerto:" + app.get('port'));
});

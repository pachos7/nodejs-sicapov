/* Sicapov */
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var log4js = require( "log4js" );

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
        host: '127.9.14.130', //OpenShift database
        user: 'adminGy3kRd2',
        password : 'N8ibHmFcnm-M',
        port : 3306, 
        database:'nodejs'
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

var logger = log4js.getLogger( "sicapov" );

logger.info("Iniciando applicacion... ");

var mysqlconnection = mysql.createConnection(local_db_config);
mysqlconnection.connect();
mysqlconnection.query('SELECT "OK" AS connection_status', function(err, rows, fields) {
  if (err) { 
  	logger.error('Error connecting to database:' + err );
  	throw err;
	}
  logger.info('Successful connection to database. Connection_status is: ', rows[0].connection_status);
});

mysqlconnection.end();

//carga routes
var customers = require('./routes/customers'); 
var victimas = require('./routes/victimas'); 

var app = express();


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

app.use(connection(mysql, local_db_config, 'pool'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
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

app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  logger.info("Applicacion Iniciada en puerto:" + app.get('port'));
});

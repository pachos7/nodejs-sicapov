/*
 * GET informacion de victimas .
 */

var log = require('log4js').getLogger("sicapov");

exports.consultavictima = function(req,res){
	res.render('consulta', {page_title:"Consulta de Victimas", data:"" });
};
 
exports.caracterizacion = function(req, res){
	res.render('caracterizacion', {page_title:"Caracterizacion"});
};

exports.buscarvictima = function(req,res){
          
	var input = JSON.parse(JSON.stringify(req.body));
	 
	var data = {
		Numerodocumento	: input.Numerodocumento,
		Nombres 	 			: input.Nombres,
		Apellidos  			: input.Apellidos
	};
    
	req.getConnection(function (err, connection) {
    
		var query = connection.query('SELECT * FROM victimas WHERE Numerodocumento = ?',[data.Numerodocumento], function(err, rows) {
			
			log.debug("Query: " + query.sql);
			
			if(err)
				log.error("Error consultado base de datos de victimas : %s ",err );
			
			if(rows.length)
				res.render('consulta', {page_title:"Consulta de Victimas", data:rows});
			else
				res.render('consulta', {page_title:"Consulta de Victimas - no se encontraron registros para " + data.Numerodocumento, data:rows});
                
		});
	});
};

exports.guardar = function(req,res){
	var input = JSON.parse(JSON.stringify(req.body));
	
	log.debug("input": input);
	
	var datavictimas = {
		Tipodocumento    	: input.Tipodocumento,
		Numerodocumento  	: input.Numerodocumento,
		Nombres          	: input.Nombres,
		Apellidos        	: input.Apellidos,
		Sexo			 				:	input.Sexo,
		Orientacionsexual	:	input.Orientacionsexual,
		Direccion        	: input.Direccion,
		Telefono         	: input.Telefono

// Añadir estos campos a la base de datos antes de descomentatiarlos
//		Libretamilitar	 	:	input.Libretamilitar,
//		Jefehogar		 			:	input.Jefehogar,
//		Vinculo	         	: input.Vinculo,
//		Barrio           	: input.Barrio
//		/* Salud */
//		SISBEN           	: input.SISBEN,
//		Afiliado         	: input.Afiliado,
//		Regimen           : input.Regimen,
//		Discapacidad     	: input.Discapacidad,
//		Origendis		 			: input.Origendis,
//		/* Educacion */
//		Estudio           : input.Estudio,
//		Nivelsstudio      : input.Nivelestudio,
//		Leer           		: input.Leer,
//		Escribir          : input.Escribir,
//		Capacitacion      : input.Capacitacion,
//		Area           		: input.Area,
//		Entidadc					: input.Entidadc,
//		/* Trabajo */
//		Trabajo         	: input.Trabajo,
//		Areatrabajo				: input.Areatrabajo,
//		Tipotrabajo	    	: input.Tipotrabajo,
//		/* Grupo etnico */
	};	

	var dataHomicidio = {
		Tipodocumento			: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano								: input.hom_Ano,
		Declarado					: input.hom_Declarado,
		Lugardeclarado		: input.hom_Lugardeclarado,
		Estadodeclaracion	: input.hom_Estadodeclaracion,
		Denunciado			  : input.hom_Denunciado
	};
	
	var HechosVictimizantes = input.hecho_victimizante;
	
//  log.debug(JSON.stringify(datavictimas));
  
	req.getConnection(function (err, connection) {
		
		/* Insert en tabla de victimas */
		var queryvictimas = connection.query("INSERT INTO victimas set ? ", datavictimas, function(err, rows) {
			
			log.debug("Query inserta victimas: " + queryvictimas.sql);
			if (err) {
				log.error("Error insertando en tabla de victimas : %s ", err);
				
			//	res.render('caracterizacion', {page_title:"Error en la base de datos."});  	
			}				

		//res.redirect('/caracterizacion');
  	});
  	
		/* Insert en tablas de hechos vicitmizantes: hv_homicidio */
		var queryhomicidio = connection.query("INSERT INTO hv_homicidio set ? ",dataHomicidio, function(err, rows) {

			log.debug("Query inserta homicidio: " + queryhomicidio.sql);
  
			if (err)
				log.error("Error insertando en tabla hv_homicidios : %s ",err );
		});
		
		/* Insert en tablas de hechos vicitmizantes: hv_?? */
		/* Insert en tablas de hechos vicitmizantes: hv_?? */
		/* Insert en tablas de hechos vicitmizantes: hv_?? */
		/* Insert en tablas de hechos vicitmizantes: hv_?? */
		/* Insert en tablas de hechos vicitmizantes: hv_?? */
		res.render('caracterizacion', {page_title:"Caracterizacion finalizada"});  			
		
	});
};

exports.lista = function(req,res){
  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM victimas',function(err,rows)
        {
            log.debug("Query consulta victimas: " + query.sql);
            
            if(err)
                log.error("Error consultando victimas : %s ",err );
     
            res.render('listavictimas',{page_title:"Lista de Victimas",data:rows});
					
         });
    });
	
};
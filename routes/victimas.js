var log = require('log4js').getLogger("sicapov");

var insertaRegistro = function (connection, tableName, data) {
	
	var query = connection.query("INSERT INTO " + tableName + " set ? ", data, function(err, rows) {
	
		log.debug("Query inserta " + tableName + " : " + query.sql);
	
		if (err) 
			log.error("Error insertando en tabla %s : Error message: %s ", tableName, JSON.stringify(err));
	});
};

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
	
	log.debug("input:" + JSON.stringify(input));
	
	var dataVictimas = {
		Tipodocumento    	: input.Tipodocumento,
		Numerodocumento  	: input.Numerodocumento,
		Nombres          	: input.Nombres,
		Apellidos        	: input.Apellidos,
		Sexo			 	: input.Sexo,
		Orientacionsexual	: input.Orientacionsexual,
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
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.hom_Ano,
		Declarado			: input.hom_Declarado,
		Lugardeclarado		: input.hom_Lugardeclarado,
		Estadodeclaracion	: input.hom_Estadodeclaracion,
		Denunciado			: input.hom_Denunciado
	};
	
	var dataDesaparicion = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.des_Ano,
		Declarado			: input.des_Declarado,
		Lugardeclarado		: input.des_Lugardeclarado,
		Estadodeclaracion	: input.des_Estadodeclaracion
	};
	
	var hechosVictimizantes = input.hecho_victimizante;
	
	if (typeof hechosVictimizantes === 'undefined') {
		hechosVictimizantes = [''];
	}		
	
//  log.debug(JSON.stringify(dataVictimas));
  
	req.getConnection(function (err, connection) {
		
		/* Insert en tabla de victimas */
		insertaRegistro(connection, 'victimas', dataVictimas);
		
		/* Insert en las tablas de hechos victimizantes */
		if (hechosVictimizantes.indexOf('Homicidio') > -1) {
			insertaRegistro(connection, 'hv_homicidio', dataHomicidio);
		};
		
		if (hechosVictimizantes.indexOf('Desaparicion') > -1) {
			insertaRegistro(connection, 'hv_desaparicionforzada', dataDesaparicion);
		};
		
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
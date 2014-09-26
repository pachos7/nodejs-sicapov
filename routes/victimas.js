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

			if(err)
				console.log("Error consultado base de datos de victimas : %s ",err );
			
			if(rows.length)
				res.render('consulta', {page_title:"Consulta de Victimas", data:rows});
			else
				res.render('consulta', {page_title:"Consulta de Victimas - no se encontraron registros para " + data.Numerodocumento, data:rows});
                
		});
	});
};

exports.guardar = function(req,res){
	var input = JSON.parse(JSON.stringify(req.body));
	
	var datavictimas = {
		Tipodocumento    	: input.Tipodocumento,
		Numerodocumento  	: input.Numerodocumento,
		Nombres          	: input.Nombres,
		Apellidos        	: input.Apellidos,
		Sexo			 				:	input.Sexo,
		Orientacionsexual	:	input.Orientacionsexual,
		Direccion        	: input.Direccion,
		Telefono         	: input.Telefono
//		LibretaMilitar	 	:	input.LibretaMilitar,
//		JefeHogar		 			:	input.JefeHogar,
//		Vinculo	         	: input.Vinculo,
//		Barrio           	: input.Barrio,
//		/* Salud */
//		SISBEN           	: input.SISBEN,
//		Afiliado         	: input.Afiliado,
//		Regimen           : input.Regimen,
//		Discapacidad     	: input.Discapacidad,
//		OrigenDis		 			: input.OrigenDis,
//		/* Educacion */
//		Estudio           : input.Estudio,
//		nivelEstudio      : input.nivelEstudio,
//		Leer           		: input.Leer,
//		Escribir          : input.Escribir,
//		Capacitacion      : input.Capacitacion,
//		Area           		: input.Area,
//		EntidadC					: input.EntidadC,
//		/* Trabajo */
//		Trabajo         	: input.Trabajo,
//		AreaTrabajo				: input.AreaTrabajo,
//		TipoTrabajo	    	: input.TipoTrabajo,
//		/* Grupo etnico */
	};	

/*	var dataHomicidio = {
		Tipodocumento			: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento
	};
*/	
//  console.log(JSON.stringify(datavictimas));
  
	req.getConnection(function (err, connection) {
		
		/* Insert en tabla de victimas */
		var queryvictimas = connection.query("INSERT INTO victimas set ? ", datavictimas, function(err, rows) {
			
			log.debug("Query: " + queryvictimas.sql);
			if (err) {
				console.log("Error insertando en tabla de victimas : %s ", err);
				
			//	res.render('caracterizacion', {page_title:"Error en la base de datos."});  	
			}				

		//res.redirect('/caracterizacion');
			res.render('caracterizacion', {page_title:"Caracterizacion finalizada"});  	

  	});
  	
		/* Insert en tablas de hechos vicitmizantes: hv_homicidio */
//		var queryhomicidio = connection.query("INSERT INTO hv_homicidio set ? ",dataHomicidio, function(err, rows) {
//  
//			if (err)
//				console.log("Error insertando en tabla hv_homicidios : %s ",err );
//		});
		
		/* Insert en tablas de hechos vicitmizantes: hv_?? */
		/* Insert en tablas de hechos vicitmizantes: hv_?? */
		/* Insert en tablas de hechos vicitmizantes: hv_?? */
		/* Insert en tablas de hechos vicitmizantes: hv_?? */
		/* Insert en tablas de hechos vicitmizantes: hv_?? */
		
	});
};

exports.lista = function(req,res){
  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM victimas',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('listavictimas',{page_title:"Lista de Victimas",data:rows});
					
            console.log(query.sql);
         });
    });
	
};
/*
 * GET informacion de victimas .
 */


exports.consultavictima = function(req,res){
    res.render('consulta', {page_title:"Consulta de Victimas", data:"" });
};
 
exports.caracterizacion = function(req, res){
  res.render('caracterizacion', {page_title:"Caracterizacion"});
};

exports.buscarvictima = function(req,res){
          
	 var input = JSON.parse(JSON.stringify(req.body));
	 
	 var data = {
            numerodocumento    : input.numerodocumento,
            nombre 	  : input.address,
			apellido  : input.address
        };
    
     req.getConnection(function (err, connection) {
     
		var query = connection.query('SELECT * FROM victimas WHERE numerodocumento = ?',[data.numerodocumento],function(err,rows)
        {
            
            if(err)
                console.log("Error consultado base de datos de victimas : %s ",err );
     
            res.render('consulta', {page_title:"Consulta de Victimas",data:rows});
                
            // console.log(query.sql);
         });
       
     });
	 
};


exports.guardar = function(req,res){
	var input = JSON.parse(JSON.stringify(req.body));
	
	req.getConnection(function (err, connection) {
		var data = {
            tipodocumento    : input.tipodocumento,
            numerodocumento  : input.numerodocumento,
            nombre           : input.primernombre,
            apellido         : input.primerapellido,
            direccion        : input.direccion,
            telefono         : input.telefono,
			Sexo			 :	input.Sexo,
			Orientacion		 :	input.Orientacion,
			LibretaMilitar	 :	input.LibretaMilitar,
			JefeHogar		 :	input.JefeHogar,
			Vinculo	         : input.Vinculo,
			Barrio           :input.Barrio,
			/* Salud */
			SISBEN           :input.SISBEN,
			Afiliado         :input.Afiliado,
			Regimen           :input.Regimen,
			Discapacidad     :input.Discapacidad,
			OrigenDis		 :input.OrigenDis,
			/* Educacion */
			Estudio           :input.Estudio,
			nivelEstudio      :input.nivelEstudio,
			Leer           :input.Leer,
			Escribir           :input.Escribir,
			Capacitacion      : input.Capacitacion,
			Area           :input.Area,
			EntidadC		:input.EntidadC,
			/* Trabajo */
			Trabajo         :input.Trabajo,
			AreaTrabajo		:input.AreaTrabajo,
			TipoTrabajo	    :input.TipoTrabajo,
			/* grupo etnico */
			
        };

        var query = connection.query("INSERT INTO victimas set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          //res.redirect('/caracterizacion');
		  res.render('caracterizacion', {page_title:"Caracterizacion finalizada"});  	
        });
		
		var dataHomicidio = {
		tipodocumento :input.tipodocumento,
		numerodocumento: input.numerodocumento
		};
		
		var query = connection.query("INSERT INTO hv_homicidio set ? ",dataHomicidio, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          //res.redirect('/caracterizacion');
		  res.render('caracterizacion', {page_title:"Caracterizacion finalizada"});  	
        });
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
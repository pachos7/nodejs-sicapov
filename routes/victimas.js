var log = require('log4js').getLogger("sicapov");

var insertaRegistro = function (connection, tableName, data, callback) {
	
	var query = connection.query("INSERT INTO " + tableName + " set ? ", data, function(err, rows, callback) {
		
		log.debug("Query inserta " + tableName + " : " + query.sql);
		if (err) {
			log.error("Error insertando en tabla " + tableName + "  " + err);
		} 
		 else if (callback) {
			callback();
		} 
	});
};

exports.consultavictima = function(req,res){
	res.render('consulta', {usuario: req.user, page_title:"Consulta de Victimas", datavictima: null , message: null });
};
 
exports.caracterizacion = function(req, res){
	res.render('caracterizacion', {usuario: req.user, page_title:"Caracterizacion", message: null, datavictima: null});
};

exports.buscarvictima = function(req,res){
          
	var input = JSON.parse(JSON.stringify(req.body));
	 
	var data = {
		documentoABuscar	: input.documentoABuscar,
	};
    
	req.getConnection(function (err, connection) {
		
		if(typeof connection === 'undefined'){
			log.error("No se pudo establacer una conexion con la base de datos!");
			res.render('consulta', {usuario: req.user, page_title:"Consulta de Victimas fallo", datavictima: null, message: "No se pudo establacer una conexion con la base de datos!"});
		} else {
			var query = connection.query('SELECT * FROM victimas WHERE Numerodocumento = ?',[data.documentoABuscar], function(err, rows) {
				
				log.debug("Query: " + query.sql);
				
				if(err)
					log.error("Error consultado base de datos de victimas : %s ", err);
				
				if(rows.length)
					res.render('consulta', {usuario: req.user, page_title:"Consulta de Victimas", datavictima: rows[0], message: null});
				else
					res.render('consulta', {usuario: req.user, page_title:"Consulta de Victimas " , datavictima: null, message: "No se encontraron registros para " + data.documentoABuscar});
				
				connection.release(function(err) {
					// The connection is terminated now
				});	
			});
		};
	});
};

exports.guardar = function(req,res){
	var input = JSON.parse(JSON.stringify(req.body));
	
	log.debug("input:" + JSON.stringify(input));
	
	var todalaData= {

		Tipodocumento    	: input.Tipodocumento,
		Numerodocumento  	: input.Numerodocumento,
		Nombres          	: input.Nombres,
		Apellidos        	: input.Apellidos,
		Sexo			 	: input.Sexo,
		Orientacionsexual	: input.Orientacionsexual,
		Direccion        	: input.Direccion,
		Telefono         	: input.Telefono,
 		Libretamilitar		: input.Libretamilitar,
		Jefehogar			: input.Jefehogar,
		Vinculo				: input.Vinculo,
		Barrio				: input.Barrio,
		SISBEN				: input.SISBEN,
		Afiliado			: input.Afiliado,
		Regimen				: input.Regimen,
		Discapacidad		: input.Discapacidad,
		Origendis			: input.Origendis,
		Estudio				: input.Estudio,
		NivelEstudio		: input.NivelEstudio,
		Leer				: input.Leer,
		Escribir			: input.Escribir,
		Capacitacion		: input.Capacitacion,
		Area				: input.Area,
		Entidadc			: input.Entidadc,
		Trabajo				: input.Trabajo,
		Areatrabajo			: input.Areatrabajo,
		Tipotrabajo			: input.Tipotrabajo,
		GrupoEtnico			: input.grupoetnico,
		hom_Ano				: input.hom_Ano,
		hom_Declarado		: input.hom_Declarado,
		hom_Lugardeclarado	: input.hom_Lugardeclarado,
		hom_Estadodeclaracion: input.hom_Estadodeclaracion,
		des_Ano				: input.des_Ano,
		des_Declarado		: input.des_Declarado,
		des_Lugardeclarado	: input.des_Lugardeclarado,
		des_Estadodeclaracion: input.des_Estadodeclaracion,
		sec_Ano				: input.sec_Ano,
		sec_Declarado		: input.sec_Declarado,
		sec_Lugardeclarado	: input.sec_Lugardeclarado,
		sec_Estadodeclaracion: input.sec_Estadodeclaracion,
		les_Ano					: input.les_Ano,
		les_Declarado			: input.les_Declarado,
		les_Lugardeclarado		: input.les_Lugardeclarado,
		les_Estadodeclaracion	: input.les_Estadodeclaracion,
		tor_Ano					: input.tor_Ano,
		tor_Declarado			: input.tor_Declarado,
		tor_Lugardeclarado		: input.tor_Lugardeclarado,
		tor_Estadodeclaracion	: input.tor_Estadodeclaracion,
		//ojo q en el ejs se repite el des_tal
		desx_Ano				: input.desx_Ano,
		desx_Declarado			: input.desx_Declarado,
		desx_Lugardeclarado		: input.desx_Lugardeclarado,
		desx_Estadodeclaracion	: input.desx_Estadodeclaracion,
		rei_Ano					: input.rei_Ano,
		rei_Declarado			: input.rei_Declarado,
		rei_Lugardeclarado		: input.rei_Lugardeclarado,
		rei_Estadodeclaracion	: input.rei_Estadodeclaracion,
		dplz_Ano					: input.dplz_Ano,
		dplz_Declarado			: input.dplz_Declarado,
		dplz_Lugardeclarado		: input.dplz_Lugardeclarado,
		dplz_Estadodeclaracion	: input.dplz_Estadodeclaracion,
		TipoDesplazamiento 	: input.TipoDesplazamiento,
		Retorno				: input.Retorno,
		DeseaRetornar		: input.DeseaRetornar,
		TipoRetorno			: input.TipoRetorno,
		QuienRetorno		: input.QuienRetorno,
		RetornoAcompanado	: input.RetornoAcompanado,
		PlanRetorno			: input.PlanRetorno,
		Reubicarse			: input.Reubicarse,
		Razon				: input.Razon,
		Separacion			: input.Separacion,
		Unificacion			: input.Unificacion,
		AyudaEstatal		: input.AyudaEstatal,
		RecibioAyuda		: input.RecibioAyuda,
		Refugio				: input.Refugio,
		Pais				: input.Pais,
		AnoRefugio			: input.AnoRefugio,
		RecibioAyudaRefugio	: input.RecibioAyudaRefugio,
		Organizacion		: input.Organizacion,
		min_Ano					: input.min_Ano,
		min_Declarado			: input.min_Declarado,
		min_Lugardeclarado		: input.min_Lugardeclarado,
		min_Estadodeclaracion	: input.min_Estadodeclaracion,
		aba_Ano					: input.aba_Ano,
		aba_Declarado			: input.aba_Declarado,
		aba_Lugardeclarado		: input.aba_Lugardeclarado,
		aba_Estadodeclaracion	: input.aba_Estadodeclaracion,
		mas_Ano					: input.mas_Ano,
		mas_Declarado			: input.mas_Declarado,
		mas_Lugardeclarado	: input.mas_Lugardeclarado,
		mas_Estadodeclaracion	: input.mas_Estadodeclaracion,
		per_Ano					: input.per_Ano,
		per_Declarado			: input.per_Declarado,
		per_Lugardeclarado		: input.per_Lugardeclarado,
		per_Estadodeclaracion	: input.per_Estadodeclaracion,
		
		
		
		
		
};	

	var dataVictimas = {
		Tipodocumento    	: input.Tipodocumento,
		Numerodocumento  	: input.Numerodocumento,
		Nombres          	: input.Nombres,
		Apellidos        	: input.Apellidos,
		Sexo			 	: input.Sexo,
		Orientacionsexual	: input.Orientacionsexual,
		Direccion        	: input.Direccion,
		Telefono         	: input.Telefono,
 		Libretamilitar		: input.Libretamilitar,
		Jefehogar			: input.Jefehogar,
		Vinculo				: input.Vinculo,
		Barrio				: input.Barrio,
		SISBEN				: input.SISBEN,
		Afiliado			: input.Afiliado,
		Regimen				: input.Regimen,
		Discapacidad		: input.Discapacidad,
		Origendis			: input.Origendis,
		Estudio				: input.Estudio,
		NivelEstudio		: input.NivelEstudio,
		Leer				: input.Leer,
		Escribir			: input.Escribir,
		Capacitacion		: input.Capacitacion,
		Area				: input.Area,
		Entidadc			: input.Entidadc,
		Trabajo				: input.Trabajo,
		Areatrabajo			: input.Areatrabajo,
		Tipotrabajo			: input.Tipotrabajo,
		GrupoEtnico			: input.grupoetnico,
		
	};	

	var dataHomicidio = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.hom_Ano,
		Declarado			: input.hom_Declarado,
		Lugardeclarado		: input.hom_Lugardeclarado,
		Estadodeclaracion	: input.hom_Estadodeclaracion,
		
	};
	
	var dataDesaparicion = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.des_Ano,
		Declarado			: input.des_Declarado,
		Lugardeclarado		: input.des_Lugardeclarado,
		Estadodeclaracion	: input.des_Estadodeclaracion
	};
	
	var dataSecuestro = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.sec_Ano,
		Declarado			: input.sec_Declarado,
		Lugardeclarado		: input.sec_Lugardeclarado,
		Estadodeclaracion	: input.sec_Estadodeclaracion,
		
	};
	var dataLesiones = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.les_Ano,
		Declarado			: input.les_Declarado,
		Lugardeclarado		: input.les_Lugardeclarado,
		Estadodeclaracion	: input.les_Estadodeclaracion,
		
	};
	var dataTortura = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.tor_Ano,
		Declarado			: input.tor_Declarado,
		Lugardeclarado		: input.tor_Lugardeclarado,
		Estadodeclaracion	: input.tor_Estadodeclaracion,
		
	};
	var dataDelitossexuales = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.des_Ano,
		Declarado			: input.des_Declarado,
		Lugardeclarado		: input.des_Lugardeclarado,
		Estadodeclaracion	: input.des_Estadodeclaracion,
		
	};
	var dataReclutamiento = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.rei_Ano,
		Declarado			: input.rei_Declarado,
		Lugardeclarado		: input.rei_Lugardeclarado,
		Estadodeclaracion	: input.rei_Estadodeclaracion,
		
	};
	var dataDesplazamiento = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.dplz_Ano,
		Declarado			: input.dplz_Declarado,
		Lugardeclarado		: input.dplz_Lugardeclarado,
		Estadodeclaracion	: input.dplz_Estadodeclaracion,
		TipoDesplazamiento 	: input.TipoDesplazamiento,
		Retorno				: input.Retorno,
		DeseaRetornar		: input.DeseaRetornar,
		TipoRetorno			: input.TipoRetorno,
		QuienRetorno		: input.QuienRetorno,
		RetornoAcompanado	: input.RetornoAcompanado,
		PlanRetorno			: input.PlanRetorno,
		Reubicarse			: input.Reubicarse,
		Razon				: input.Razon,
		Separacion			: input.Separacion,
		Unificacion			: input.Unificacion,
		AyudaEstatal		: input.AyudaEstatal,
		RecibioAyuda		: input.RecibioAyuda,
		Refugio				: input.Refugio,
		Pais				: input.Pais,
		AnoRefugio			: input.AnoRefugio,
		RecibioAyudaRefugio	: input.RecibioAyudaRefugio,
		Organizacion		: input.Organizacion 
		
		
	};
	var dataMinas = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.min_Ano,
		Declarado			: input.min_Declarado,
		Lugardeclarado		: input.min_Lugardeclarado,
		Estadodeclaracion	: input.min_Estadodeclaracion,
		
	};
	var dataAbandono = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.aba_Ano,
		Declarado			: input.aba_Declarado,
		Lugardeclarado		: input.aba_Lugardeclarado,
		Estadodeclaracion	: input.aba_Estadodeclaracion,
		
	};
	var dataMasacre = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.mas_Ano,
		Declarado			: input.mas_Declarado,
		Lugardeclarado		: input.mas_Lugardeclarado,
		Estadodeclaracion	: input.mas_Estadodeclaracion,
		
	};
	var dataPerdidabienes = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.per_Ano,
		Declarado			: input.per_Declarado,
		Lugardeclarado		: input.per_Lugardeclarado,
		Estadodeclaracion	: input.per_Estadodeclaracion,
		
	};
		
	var hechosVictimizantes = input.hecho_victimizante;
	
	if (typeof hechosVictimizantes === 'undefined') {
		hechosVictimizantes = [''];
	}		
	
	req.getConnection(function (err, connection) {
		
		/* Insert en tabla de victimas */
		var query = connection.query("INSERT INTO victimas set ? ", dataVictimas, function(err, rows) {
		
			log.debug("Query inserta victimas : " + query.sql);
			if (err) {
				log.error("Error insertando en tabla victimas  " + err);
				res.render('caracterizacion', {usuario: req.user, page_title:"No se pudo realizar la Caracterizacion", message : err});  			
			} 
			 else {
				 /* Inserta en las tabla de hechos victimizantes */
				
				if (hechosVictimizantes.indexOf('Homicidio') > -1 && !err) {
					insertaRegistro(connection, 'hv_homicidio', dataHomicidio);
				};
				
				if (hechosVictimizantes.indexOf('Desaparicion') > -1 && !err) {
					insertaRegistro(connection, 'hv_desaparicionforzada', dataDesaparicion);
				};
				
				if (hechosVictimizantes.indexOf('Secuestro') > -1) {
					insertaRegistro(connection, 'hv_secuestro', dataSecuestro);
				};
				if (hechosVictimizantes.indexOf('Lesionespersonales') > -1) {
					insertaRegistro(connection, 'hv_lesionespersonales', dataLesiones);
				};
				if (hechosVictimizantes.indexOf('Tortura') > -1) {
					insertaRegistro(connection, 'hv_tortura', dataTortura);
				};
				if (hechosVictimizantes.indexOf('Delitoslibertad') > -1) {
					insertaRegistro(connection, 'hv_delitossexuales', dataDelitossexuales);
				};
				if (hechosVictimizantes.indexOf('Reclutamiento') > -1) {
					insertaRegistro(connection, 'hv_reclutamientoilegal', dataReclutamiento);
				};
				if (hechosVictimizantes.indexOf('Desplazamientof') > -1) {
					insertaRegistro(connection, 'hv_desplazamiento', dataDesplazamiento);
				};
				if (hechosVictimizantes.indexOf('Minas') > -1) {
					insertaRegistro(connection, 'hv_minasantipersonales', dataMinas);
				};
				if (hechosVictimizantes.indexOf('Abandono') > -1) {
					insertaRegistro(connection, 'hv_despojodetierras', dataAbandono);
				};
				if (hechosVictimizantes.indexOf('Masacre') > -1) {
					insertaRegistro(connection, 'hv_masacre', dataMasacre);
				};
				if (hechosVictimizantes.indexOf('Perdidabienes') > -1) {
					insertaRegistro(connection, 'hv_perdidadebienes', dataPerdidabienes);
				};

				res.render('caracterizacion', {usuario: req.user, page_title:"Caracterizacion finalizada", message: null, datavictima: todalaData});  			
			} 
		});
	});
};

exports.lista = function(req,res){
  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM victimas',function(err,rows)
        {
            log.debug("Query consulta victimas: " + query.sql);
            
            if(err)
                log.error("Error consultando victimas : %s ",err );
     
            res.render('listavictimas',{usuario: req.user, page_title:"Lista de Victimas",data:rows});
					
         });
    });
	
};
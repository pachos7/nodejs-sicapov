var log = require('log4js').getLogger("sicapov");

var insertaRegistro = function (connection, tableName, data) {
	
	var query = connection.query("INSERT INTO " + tableName + " set ? ", data, function(err, rows) {
	
		log.debug("Query inserta " + tableName + " : " + query.sql);
	
		if (err) 
			log.error("Error insertando en tabla %s : Error message: %s ", tableName, JSON.stringify(err));
	});
};

exports.consultavictima = function(req,res){
	res.render('consulta', {usuario: req.user, page_title:"Consulta de Victimas", data:"" });
};
 
exports.caracterizacion = function(req, res){
	res.render('caracterizacion', {usuario: req.user, page_title:"Caracterizacion"});
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
				res.render('consulta', {usuario: req.user, page_title:"Consulta de Victimas", data:rows});
			else
				res.render('consulta', {usuario: req.user, page_title:"Consulta de Victimas - no se encontraron registros para " + data.Numerodocumento, data:rows});
                
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
	//--------------------------------------------------------------aqui comenzé
	var dataSecuestro = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.hom_Ano,
		Declarado			: input.hom_Declarado,
		Lugardeclarado		: input.hom_Lugardeclarado,
		Estadodeclaracion	: input.hom_Estadodeclaracion,
		
	};
	var dataLesiones = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.hom_Ano,
		Declarado			: input.hom_Declarado,
		Lugardeclarado		: input.hom_Lugardeclarado,
		Estadodeclaracion	: input.hom_Estadodeclaracion,
		
	};
	var dataTortura = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.hom_Ano,
		Declarado			: input.hom_Declarado,
		Lugardeclarado		: input.hom_Lugardeclarado,
		Estadodeclaracion	: input.hom_Estadodeclaracion,
		
	};
	var dataDelitossexuales = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.hom_Ano,
		Declarado			: input.hom_Declarado,
		Lugardeclarado		: input.hom_Lugardeclarado,
		Estadodeclaracion	: input.hom_Estadodeclaracion,
		
	};
	var dataReclutamiento = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.hom_Ano,
		Declarado			: input.hom_Declarado,
		Lugardeclarado		: input.hom_Lugardeclarado,
		Estadodeclaracion	: input.hom_Estadodeclaracion,
		
	};
	var dataDesplazamiento = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.hom_Ano,
		Declarado			: input.hom_Declarado,
		Lugardeclarado		: input.hom_Lugardeclarado,
		Estadodeclaracion	: input.hom_Estadodeclaracion,
		
	};
	var dataMinas = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.hom_Ano,
		Declarado			: input.hom_Declarado,
		Lugardeclarado		: input.hom_Lugardeclarado,
		Estadodeclaracion	: input.hom_Estadodeclaracion,
		
	};
	var dataAbandono = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.hom_Ano,
		Declarado			: input.hom_Declarado,
		Lugardeclarado		: input.hom_Lugardeclarado,
		Estadodeclaracion	: input.hom_Estadodeclaracion,
		
	};
	var dataMasacre = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.hom_Ano,
		Declarado			: input.hom_Declarado,
		Lugardeclarado		: input.hom_Lugardeclarado,
		Estadodeclaracion	: input.hom_Estadodeclaracion,
		
	};
	var dataPerdidabienes = {
		Tipodocumento		: input.Tipodocumento,
		Numerodocumento		: input.Numerodocumento,
		Ano					: input.hom_Ano,
		Declarado			: input.hom_Declarado,
		Lugardeclarado		: input.hom_Lugardeclarado,
		Estadodeclaracion	: input.hom_Estadodeclaracion,
		
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
		
		res.render('caracterizacion', {usuario: req.user, page_title:"Caracterizacion finalizada"});  			
		
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
var log = require('log4js').getLogger("sicapov");
var nodeExcel = require('excel-export');

function queryExcelHecho(HechoVictimizante) {
	var query = 'SELECT ' +
					'COALESCE(v.Tipodocumento,"")    	as Tipodocumento,' +
					'COALESCE(v.Numerodocumento,"")  	as Numerodocumento,' +
					'COALESCE(v.Nombres,"")          	as Nombres,' +
					'COALESCE(v.Apellidos,"")        	as Apellidos,' +
					'COALESCE(v.Sexo,"")			 	as Sexo,' +
					'COALESCE(v.Orientacionsexual,"")	as Orientacionsexual,' +
					'COALESCE(v.Direccion,"")        	as Direccion,' +
					'COALESCE(v.Telefono,"")         	as Telefono,' +
					'COALESCE(v.Libretamilitar,"")		as Libretamilitar,' +
					'COALESCE(v.Jefehogar,"")			as Jefehogar,' +
					'COALESCE(v.Vinculo,"")				as Vinculo,' +
					'COALESCE(v.Barrio,"")				as Barrio,' +
					'COALESCE(v.SISBEN,"")				as SISBEN,' +
					'COALESCE(v.Afiliado,"")			as Afiliado,' +
					'COALESCE(v.Regimen,"")				as Regimen,' +
					'COALESCE(v.Discapacidad,"")		as Discapacidad,' +
					'COALESCE(v.Origendis,"")			as Origendis,' +
					'COALESCE(v.Estudio,"")				as Estudio,' +
					'COALESCE(v.NivelEstudio,"")		as NivelEstudio,' +
					'COALESCE(v.Leer,"")				as Leer,' +
					'COALESCE(v.Escribir,"")			as Escribir,' +
					'COALESCE(v.Capacitacion,"")		as Capacitacion,' +
					'COALESCE(v.Area,"")				as Area,' +
					'COALESCE(v.Entidadc,"")			as Entidadc,' +
					'COALESCE(v.Trabajo,"")				as Trabajo,' +
					'COALESCE(v.Areatrabajo,"")			as Areatrabajo,' +
					'COALESCE(v.Tipotrabajo,"")			as Tipotrabajo,' +
					'COALESCE(v.GrupoEtnico,"")			as GrupoEtnico,' +
					'COALESCE(hv_h.Ano,"")				as hom_Ano			,' +
					'COALESCE(hv_h.Declarado,"")		as hom_Declarado		,' +
					'COALESCE(hv_h.Lugardeclarado,"")	as hom_Lugardeclarado,' +
					'COALESCE(hv_h.Estadodeclaracion,"") as hom_Estadodeclaracion, ' +
					'COALESCE(hv_d.Ano,"")				as des_Ano				,' +
					'COALESCE(hv_d.Declarado,"")		as des_Declarado		,' +
					'COALESCE(hv_d.Lugardeclarado,"")	as des_Lugardeclarado	,' +
					'COALESCE(hv_d.Estadodeclaracion,"") as des_Estadodeclaracion,' +
					'COALESCE(hv_s.Ano,"")				as sec_Ano				,' +
					'COALESCE(hv_s.Declarado,"")		as sec_Declarado		,' +
					'COALESCE(hv_s.Lugardeclarado,"")	as sec_Lugardeclarado	,' +
					'COALESCE(hv_s.Estadodeclaracion,"") as sec_Estadodeclaracion, ' +
					'COALESCE(hv_l.Ano,"")				as les_Ano				,' +
					'COALESCE(hv_l.Declarado,"")		as les_Declarado		,' +
					'COALESCE(hv_l.Lugardeclarado,"")	as les_Lugardeclarado	,' +
					'COALESCE(hv_l.Estadodeclaracion,"") as les_Estadodeclaracion,' +
					'COALESCE(hv_t.Ano,"")				as tor_Ano				,' +
					'COALESCE(hv_t.Declarado,"")		as tor_Declarado		,' +
					'COALESCE(hv_t.Lugardeclarado,"")	as tor_Lugardeclarado	,' +
					'COALESCE(hv_t.Estadodeclaracion,"") as tor_Estadodeclaracion,' +
					'COALESCE(hv_ds.Ano,"")				as desx_Ano			,' +
					'COALESCE(hv_ds.Declarado,"")		as desx_Declarado		,' +
					'COALESCE(hv_ds.Lugardeclarado,"")	as desx_Lugardeclarado	,' +
					'COALESCE(hv_ds.Estadodeclaracion,"") as desx_Estadodeclaracion, ' +
					'COALESCE(hv_r.Ano,"")				as rei_Ano				,' +
					'COALESCE(hv_r.Declarado,"")		as rei_Declarado		,' +
					'COALESCE(hv_r.Lugardeclarado,"")	as rei_Lugardeclarado	,' +
					'COALESCE(hv_r.Estadodeclaracion,"") as rei_Estadodeclaracion,' +
					'COALESCE(hv_dp.Ano,"")				as dplz_Ano			,' +
					'COALESCE(hv_dp.Declarado,"")		as dplz_Declarado		,' +
					'COALESCE(hv_dp.Lugardeclarado,"")	as dplz_Lugardeclarado	,' +
					'COALESCE(hv_dp.Estadodeclaracion,"") as dplz_Estadodeclaracion,' +
					'COALESCE(hv_dp.TipoDesplazamiento,"")	as TipoDesplazamiento,' +
					'COALESCE(hv_dp.Retorno,"")				as Retorno,' +
					'COALESCE(hv_dp.DeseaRetornar,"")		as DeseaRetornar,' +
					'COALESCE(hv_dp.TipoRetorno,"")			as TipoRetorno,' +
					'COALESCE(hv_dp.QuienRetorno,"")		as QuienRetorno,' +
					'COALESCE(hv_dp.RetornoAcompanado,"")	as RetornoAcompanado,' +
					'COALESCE(hv_dp.PlanRetorno,"")			as PlanRetorno,' +
					'COALESCE(hv_dp.Reubicarse,"")			as Reubicarse,' +
					'COALESCE(hv_dp.Razon,"")				as Razon,' +
					'COALESCE(hv_dp.Separacion,"")			as Separacion,' +
					'COALESCE(hv_dp.Unificacion,"")			as Unificacion,' +
					'COALESCE(hv_dp.AyudaEstatal,"")		as AyudaEstatal,' +
					'COALESCE(hv_dp.RecibioAyuda,"")		as RecibioAyuda,' +
					'COALESCE(hv_dp.Refugio,"")				as Refugio,' +
					'COALESCE(hv_dp.Pais,"")				as Pais,' +
					'COALESCE(hv_dp.AnoRefugio,"")			as AnoRefugio,' +
					'COALESCE(hv_dp.RecibioAyudaRefugio,"")	as RecibioAyudaRefugio,' +
					'COALESCE(hv_dp.Organizacion,"")		as Organizacion,' +
					'COALESCE(hv_dp.causaConfrontacion,"")	as causaConfrontacion,' +
					'COALESCE(hv_dp.causaAmenazaDirecta,"")	as causaAmenazaDirecta,' +
					'COALESCE(hv_dp.causaAmenazeIndirecta,"") as causaAmenazeIndirecta,' +
					'COALESCE(hv_dp.causaReclutamiento,"")	as causaReclutamiento,' +
					'COALESCE(hv_dp.causaCamposMinados,"")	as causaCamposMinados,' +
					'COALESCE(hv_dp.causaAsesinatoFamiliar,"") as causaAsesinatoFamiliar,' +
					'COALESCE(hv_dp.causaViolenciaGeneral,"") as causaViolenciaGeneral,' +
					'COALESCE(hv_dp.causaOtra,"") 			as causaOtra,' +
					'COALESCE(hv_m.Ano,"")					as min_Ano				,' +
					'COALESCE(hv_m.Declarado,"")		    as min_Declarado		,' +
					'COALESCE(hv_m.Lugardeclarado,"")	 	as min_Lugardeclarado	,' +
					'COALESCE(hv_m.Estadodeclaracion,"")  	as min_Estadodeclaracion, ' +
					'COALESCE(hv_a.Ano,"")					as aba_Ano				,' +
					'COALESCE(hv_a.Declarado,"")		    as aba_Declarado		,' +
					'COALESCE(hv_a.Lugardeclarado,"")	    as aba_Lugardeclarado	,' +
					'COALESCE(hv_a.Estadodeclaracion,"")  	as aba_Estadodeclaracion,' +
					'COALESCE(hv_ma.Ano,"")					as mas_Ano				,' +
					'COALESCE(hv_ma.Declarado,"")		    as mas_Declarado		,' +
					'COALESCE(hv_ma.Lugardeclarado,"")		as mas_Lugardeclarado	,' +
					'COALESCE(hv_ma.Estadodeclaracion,"") 	as mas_Estadodeclaracion,' +
					'COALESCE(hv_p.Ano,"")					as per_Ano				,' +
					'COALESCE(hv_p.Declarado,"")		    as per_Declarado		,' +
					'COALESCE(hv_p.Lugardeclarado,"")	    as per_Lugardeclarado	,' +
					'COALESCE(hv_p.Estadodeclaracion,"")  	as per_Estadodeclaracion ';

	var TablaHecho;
	
	if (typeof HechoVictimizante != 'undefined') {
		switch(HechoVictimizante) {
		case "Homicidio":								TablaHecho="hv_homicidio";				  break;
		case "Desaparición Forzada":					TablaHecho="hv_desaparicionforzada";	  break;
		case "Secuestro":								TablaHecho="hv_secuestro";				  break;
		case "Lesiones personales o Psicologicas":		TablaHecho="hv_lesionespersonales";		  break;
		case "Tortura":									TablaHecho="hv_tortura";				  break;
		case "Delitos contra la integridad Sexual":		TablaHecho="hv_delitossexuales";		  break;
		case "Reclutamiento ilegal de menores":			TablaHecho="hv_reclutamientoilegal";	  break;
		case "Desplazamiento forzado":					TablaHecho="hv_desplazamiento";			  break;
		case "Minas antipersonales":					TablaHecho="hv_minasantipersonales";	  break;
		case "Abandono Forzado o despojo de tierras":	TablaHecho="hv_despojodetierras";		  break;
		case "Masacre":									TablaHecho="hv_masacre";				  break;
		case "Perdida de Bienes":						TablaHecho="hv_perdidadebienes";		  break;
		default:										TablaHecho="";
		};
	};
	
	query = query + ' from ' + TablaHecho + ' th LEFT JOIN victimas v ' +
		    'ON 	 v.Tipodocumento=th.Tipodocumento and v.Numerodocumento=th.Numerodocumento ' +
			'LEFT JOIN hv_homicidio 			hv_h    ON 	 v.Tipodocumento=hv_h.Tipodocumento and v.Numerodocumento=hv_h.Numerodocumento ' +
			'LEFT JOIN hv_desaparicionforzada 	hv_d	ON 	 v.Tipodocumento=hv_d.Tipodocumento and v.Numerodocumento=hv_d.Numerodocumento ' +
			'LEFT JOIN hv_secuestro 			hv_s	ON 	 v.Tipodocumento=hv_s.Tipodocumento and v.Numerodocumento=hv_s.Numerodocumento ' +
			'LEFT JOIN hv_lesionespersonales  	hv_l	ON 	 v.Tipodocumento=hv_l.Tipodocumento and v.Numerodocumento=hv_l.Numerodocumento ' +
			'LEFT JOIN hv_tortura 			 	hv_t	ON 	 v.Tipodocumento=hv_t.Tipodocumento and v.Numerodocumento=hv_t.Numerodocumento ' +
			'LEFT JOIN hv_delitossexuales 	 	hv_ds	ON 	 v.Tipodocumento=hv_ds.Tipodocumento and v.Numerodocumento=hv_ds.Numerodocumento ' +
			'LEFT JOIN hv_reclutamientoilegal 	hv_r	ON 	 v.Tipodocumento=hv_r.Tipodocumento and v.Numerodocumento=hv_r.Numerodocumento ' +
			'LEFT JOIN hv_desplazamiento 	 	hv_dp	ON 	 v.Tipodocumento=hv_dp.Tipodocumento and v.Numerodocumento=hv_dp.Numerodocumento ' +
			'LEFT JOIN hv_minasantipersonales 	hv_m	ON 	 v.Tipodocumento=hv_m.Tipodocumento and v.Numerodocumento=hv_m.Numerodocumento ' +
			'LEFT JOIN hv_despojodetierras 	 	hv_a	ON 	 v.Tipodocumento=hv_a.Tipodocumento and v.Numerodocumento=hv_a.Numerodocumento ' +
			'LEFT JOIN hv_masacre 			 	hv_ma	ON 	 v.Tipodocumento=hv_ma.Tipodocumento and v.Numerodocumento=hv_ma.Numerodocumento ' +
			'LEFT JOIN hv_perdidadebienes 	 	hv_p	ON 	 v.Tipodocumento=hv_p.Tipodocumento and v.Numerodocumento=hv_p.Numerodocumento ' ;

	return query;
}

var queryTodasLasTablas = 	'SELECT ' +
					'COALESCE(v.Tipodocumento,"")    	as Tipodocumento,' +
					'COALESCE(v.Numerodocumento,"")  	as Numerodocumento,' +
					'COALESCE(v.Nombres,"")          	as Nombres,' +
					'COALESCE(v.Apellidos,"")        	as Apellidos,' +
					'COALESCE(v.Sexo,"")			 	as Sexo,' +
					'COALESCE(v.Orientacionsexual,"")	as Orientacionsexual,' +
					'COALESCE(v.Direccion,"")        	as Direccion,' +
					'COALESCE(v.Telefono,"")         	as Telefono,' +
					'COALESCE(v.Libretamilitar,"")		as Libretamilitar,' +
					'COALESCE(v.Jefehogar,"")			as Jefehogar,' +
					'COALESCE(v.Vinculo,"")				as Vinculo,' +
					'COALESCE(v.Barrio,"")				as Barrio,' +
					'COALESCE(v.SISBEN,"")				as SISBEN,' +
					'COALESCE(v.Afiliado,"")			as Afiliado,' +
					'COALESCE(v.Regimen,"")				as Regimen,' +
					'COALESCE(v.Discapacidad,"")		as Discapacidad,' +
					'COALESCE(v.Origendis,"")			as Origendis,' +
					'COALESCE(v.Estudio,"")				as Estudio,' +
					'COALESCE(v.NivelEstudio,"")		as NivelEstudio,' +
					'COALESCE(v.Leer,"")				as Leer,' +
					'COALESCE(v.Escribir,"")			as Escribir,' +
					'COALESCE(v.Capacitacion,"")		as Capacitacion,' +
					'COALESCE(v.Area,"")				as Area,' +
					'COALESCE(v.Entidadc,"")			as Entidadc,' +
					'COALESCE(v.Trabajo,"")				as Trabajo,' +
					'COALESCE(v.Areatrabajo,"")			as Areatrabajo,' +
					'COALESCE(v.Tipotrabajo,"")			as Tipotrabajo,' +
					'COALESCE(v.GrupoEtnico,"")			as GrupoEtnico,' +
					'COALESCE(hv_h.Ano,"")				as hom_Ano			,' +
					'COALESCE(hv_h.Declarado,"")		as hom_Declarado		,' +
					'COALESCE(hv_h.Lugardeclarado,"")	as hom_Lugardeclarado,' +
					'COALESCE(hv_h.Estadodeclaracion,"") as hom_Estadodeclaracion, ' +
					'COALESCE(hv_d.Ano,"")				as des_Ano				,' +
					'COALESCE(hv_d.Declarado,"")		as des_Declarado		,' +
					'COALESCE(hv_d.Lugardeclarado,"")	as des_Lugardeclarado	,' +
					'COALESCE(hv_d.Estadodeclaracion,"") as des_Estadodeclaracion,' +
					'COALESCE(hv_s.Ano,"")				as sec_Ano				,' +
					'COALESCE(hv_s.Declarado,"")		as sec_Declarado		,' +
					'COALESCE(hv_s.Lugardeclarado,"")	as sec_Lugardeclarado	,' +
					'COALESCE(hv_s.Estadodeclaracion,"") as sec_Estadodeclaracion, ' +
					'COALESCE(hv_l.Ano,"")				as les_Ano				,' +
					'COALESCE(hv_l.Declarado,"")		as les_Declarado		,' +
					'COALESCE(hv_l.Lugardeclarado,"")	as les_Lugardeclarado	,' +
					'COALESCE(hv_l.Estadodeclaracion,"") as les_Estadodeclaracion,' +
					'COALESCE(hv_t.Ano,"")				as tor_Ano				,' +
					'COALESCE(hv_t.Declarado,"")		as tor_Declarado		,' +
					'COALESCE(hv_t.Lugardeclarado,"")	as tor_Lugardeclarado	,' +
					'COALESCE(hv_t.Estadodeclaracion,"") as tor_Estadodeclaracion,' +
					'COALESCE(hv_ds.Ano,"")				as desx_Ano			,' +
					'COALESCE(hv_ds.Declarado,"")		as desx_Declarado		,' +
					'COALESCE(hv_ds.Lugardeclarado,"")	as desx_Lugardeclarado	,' +
					'COALESCE(hv_ds.Estadodeclaracion,"") as desx_Estadodeclaracion, ' +
					'COALESCE(hv_r.Ano,"")				as rei_Ano				,' +
					'COALESCE(hv_r.Declarado,"")		as rei_Declarado		,' +
					'COALESCE(hv_r.Lugardeclarado,"")	as rei_Lugardeclarado	,' +
					'COALESCE(hv_r.Estadodeclaracion,"") as rei_Estadodeclaracion,' +
					'COALESCE(hv_dp.Ano,"")				as dplz_Ano			,' +
					'COALESCE(hv_dp.Declarado,"")		as dplz_Declarado		,' +
					'COALESCE(hv_dp.Lugardeclarado,"")	as dplz_Lugardeclarado	,' +
					'COALESCE(hv_dp.Estadodeclaracion,"") as dplz_Estadodeclaracion,' +
					'COALESCE(hv_dp.TipoDesplazamiento,"")	as TipoDesplazamiento,' +
					'COALESCE(hv_dp.Retorno,"")				as Retorno,' +
					'COALESCE(hv_dp.DeseaRetornar,"")		as DeseaRetornar,' +
					'COALESCE(hv_dp.TipoRetorno,"")			as TipoRetorno,' +
					'COALESCE(hv_dp.QuienRetorno,"")		as QuienRetorno,' +
					'COALESCE(hv_dp.RetornoAcompanado,"")	as RetornoAcompanado,' +
					'COALESCE(hv_dp.PlanRetorno,"")			as PlanRetorno,' +
					'COALESCE(hv_dp.Reubicarse,"")			as Reubicarse,' +
					'COALESCE(hv_dp.Razon,"")				as Razon,' +
					'COALESCE(hv_dp.Separacion,"")			as Separacion,' +
					'COALESCE(hv_dp.Unificacion,"")			as Unificacion,' +
					'COALESCE(hv_dp.AyudaEstatal,"")		as AyudaEstatal,' +
					'COALESCE(hv_dp.RecibioAyuda,"")		as RecibioAyuda,' +
					'COALESCE(hv_dp.Refugio,"")				as Refugio,' +
					'COALESCE(hv_dp.Pais,"")				as Pais,' +
					'COALESCE(hv_dp.AnoRefugio,"")			as AnoRefugio,' +
					'COALESCE(hv_dp.RecibioAyudaRefugio,"")	as RecibioAyudaRefugio,' +
					'COALESCE(hv_dp.Organizacion,"")		as Organizacion,' +
					'COALESCE(hv_dp.causaConfrontacion,"")	as causaConfrontacion,' +
					'COALESCE(hv_dp.causaAmenazaDirecta,"")	as causaAmenazaDirecta,' +
					'COALESCE(hv_dp.causaAmenazeIndirecta,"") as causaAmenazeIndirecta,' +
					'COALESCE(hv_dp.causaReclutamiento,"")	as causaReclutamiento,' +
					'COALESCE(hv_dp.causaCamposMinados,"")	as causaCamposMinados,' +
					'COALESCE(hv_dp.causaAsesinatoFamiliar,"") as causaAsesinatoFamiliar,' +
					'COALESCE(hv_dp.causaViolenciaGeneral,"") as causaViolenciaGeneral,' +
					'COALESCE(hv_dp.causaOtra,"") 			as causaOtra,' +
					'COALESCE(hv_m.Ano,"")					as min_Ano				,' +
					'COALESCE(hv_m.Declarado,"")		    as min_Declarado		,' +
					'COALESCE(hv_m.Lugardeclarado,"")	 	as min_Lugardeclarado	,' +
					'COALESCE(hv_m.Estadodeclaracion,"")  	as min_Estadodeclaracion, ' +
					'COALESCE(hv_a.Ano,"")					as aba_Ano				,' +
					'COALESCE(hv_a.Declarado,"")		    as aba_Declarado		,' +
					'COALESCE(hv_a.Lugardeclarado,"")	    as aba_Lugardeclarado	,' +
					'COALESCE(hv_a.Estadodeclaracion,"")  	as aba_Estadodeclaracion,' +
					'COALESCE(hv_ma.Ano,"")					as mas_Ano				,' +
					'COALESCE(hv_ma.Declarado,"")		    as mas_Declarado		,' +
					'COALESCE(hv_ma.Lugardeclarado,"")		as mas_Lugardeclarado	,' +
					'COALESCE(hv_ma.Estadodeclaracion,"") 	as mas_Estadodeclaracion,' +
					'COALESCE(hv_p.Ano,"")					as per_Ano				,' +
					'COALESCE(hv_p.Declarado,"")		    as per_Declarado		,' +
					'COALESCE(hv_p.Lugardeclarado,"")	    as per_Lugardeclarado	,' +
					'COALESCE(hv_p.Estadodeclaracion,"")  	as per_Estadodeclaracion ' +
					'FROM victimas v ' +
					'LEFT JOIN hv_homicidio 			hv_h    ON 	 v.Tipodocumento=hv_h.Tipodocumento and v.Numerodocumento=hv_h.Numerodocumento ' +
					'LEFT JOIN hv_desaparicionforzada 	hv_d	ON 	 v.Tipodocumento=hv_d.Tipodocumento and v.Numerodocumento=hv_d.Numerodocumento ' +
					'LEFT JOIN hv_secuestro 			hv_s	ON 	 v.Tipodocumento=hv_s.Tipodocumento and v.Numerodocumento=hv_s.Numerodocumento ' +
					'LEFT JOIN hv_lesionespersonales  	hv_l	ON 	 v.Tipodocumento=hv_l.Tipodocumento and v.Numerodocumento=hv_l.Numerodocumento ' +
					'LEFT JOIN hv_tortura 			 	hv_t	ON 	 v.Tipodocumento=hv_t.Tipodocumento and v.Numerodocumento=hv_t.Numerodocumento ' +
					'LEFT JOIN hv_delitossexuales 	 	hv_ds	ON 	 v.Tipodocumento=hv_ds.Tipodocumento and v.Numerodocumento=hv_ds.Numerodocumento ' +
					'LEFT JOIN hv_reclutamientoilegal 	hv_r	ON 	 v.Tipodocumento=hv_r.Tipodocumento and v.Numerodocumento=hv_r.Numerodocumento ' +
					'LEFT JOIN hv_desplazamiento 	 	hv_dp	ON 	 v.Tipodocumento=hv_dp.Tipodocumento and v.Numerodocumento=hv_dp.Numerodocumento ' +
					'LEFT JOIN hv_minasantipersonales 	hv_m	ON 	 v.Tipodocumento=hv_m.Tipodocumento and v.Numerodocumento=hv_m.Numerodocumento ' +
					'LEFT JOIN hv_despojodetierras 	 	hv_a	ON 	 v.Tipodocumento=hv_a.Tipodocumento and v.Numerodocumento=hv_a.Numerodocumento ' +
					'LEFT JOIN hv_masacre 			 	hv_ma	ON 	 v.Tipodocumento=hv_ma.Tipodocumento and v.Numerodocumento=hv_ma.Numerodocumento ' +
					'LEFT JOIN hv_perdidadebienes 	 	hv_p	ON 	 v.Tipodocumento=hv_p.Tipodocumento and v.Numerodocumento=hv_p.Numerodocumento ' ;

var insertaRegistro = function (connection, tableName, data, callback) {
	
	var query = connection.query("INSERT INTO " + tableName + " set ? ", data, function(err, rows, callback) {
		
		log.debug("Query inserta " + tableName + " : " + query.sql);
		if (err) {
			log.error("Error insertando en tabla " + tableName + "  " + err);
			res.render('caracterizacion', {usuario: req.user, page_title:"No se pudo realizar la Caracterizacion",  datavictima: null , message : err});  						
		} 
		 else if (callback) {
			callback();
		} 
	});
};

var borraRegistro = function (connection, tableName, numeroDocumento, callback) {
	
	var query = connection.query("DELETE FROM " + tableName + " WHERE Numerodocumento = ? ", numeroDocumento, function(err, rows, callback) {
		
		log.debug("Query borrar " + tableName + " : " + query.sql);
		if (err) {
			log.error("Error borrando de la tabla " + tableName + "  " + err);
			res.render('Consulta', {usuario: req.user, page_title:"No se pudo realizar el borrado de la victima",  datavictima: null , message : err});  						
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

				var queryString = queryTodasLasTablas + ' WHERE v.Numerodocumento = ?';
				var query = connection.query(queryString,[data.documentoABuscar], function(err, rows) {
				
					log.debug("Query: " + query.sql);
					
					if (err) {
						log.error("Error consultando la tabla victimas  " + err);
						res.render('consulta', {usuario: req.user, page_title:"Error en Consulta de victimas", datavictima: null, message : err});  			
					}
					else
					{
						if(rows.length)
							res.render('consulta', {usuario: req.user, page_title:"Consulta de Victimas", datavictima: rows[0], message: null});
						else
							res.render('consulta', {usuario: req.user, page_title:"Consulta de Victimas", datavictima: null, message: "No se encontraron registros para " + data.documentoABuscar});
					};
					
					connection.release(function(err) {});	
				});
		};
	});
};

exports.guardar = function(req,res){
	var input = JSON.parse(JSON.stringify(req.body));
	
	log.debug("input:" + JSON.stringify(input));
	
	var CausasDesplazamiento = input.Causasdeldesplazamiento;
	
	if (typeof CausasDesplazamiento === 'undefined') {
		CausasDesplazamiento = [''];
	}
	var	causaConfrontacion	= "No";
	var	causaAmenazaDirecta	= "No";
	var	causaAmenazeIndirecta	= "No";
	var	causaReclutamiento	= "No";
	var	causaCamposMinados	= "No";
	var	causaAsesinatoFamiliar	= "No";
	var	causaViolenciaGeneral	= "No";
	var	causaOtra = "No";
		
	if (CausasDesplazamiento.indexOf('Confrontacion') > -1) { causaConfrontacion	= "Si"};
	if (CausasDesplazamiento.indexOf('Amenaza Directa') > -1) { causaAmenazaDirecta	= "Si"};
	if (CausasDesplazamiento.indexOf('Amenaza indirecta') > -1) { causaAmenazeIndirecta	= "Si"};
	if (CausasDesplazamiento.indexOf('Reclutamiento de menores') > -1) { causaReclutamiento	= "Si"};
	if (CausasDesplazamiento.indexOf('Campos minados') > -1) { causaCamposMinados	= "Si"};
	if (CausasDesplazamiento.indexOf('Asesinato de Familiar') > -1) { causaAsesinatoFamiliar	= "Si"};
	if (CausasDesplazamiento.indexOf('Violencia Generalizada') > -1) { causaViolenciaGeneral	= "Si"};
	if (CausasDesplazamiento.indexOf('Otra') > -1) { causaOtra 	= "Si"};
	
	var todalaData= {
		Tipodocumento    		: input.Tipodocumento,
		Numerodocumento  		: input.Numerodocumento,
		Nombres          		: input.Nombres,
		Apellidos        		: input.Apellidos,
		Sexo			 		: input.Sexo,
		Orientacionsexual		: input.Orientacionsexual,
		Direccion        		: input.Direccion,
		Telefono         		: input.Telefono,
 		Libretamilitar			: input.Libretamilitar,
		Jefehogar				: input.Jefehogar,
		Vinculo					: input.Vinculo,
		Barrio					: input.Barrio,
		SISBEN					: input.SISBEN,
		Afiliado				: input.Afiliado,
		Regimen					: input.Regimen,
		Discapacidad			: input.Discapacidad,
		Origendis				: input.Origendis,
		Estudio					: input.Estudio,
		NivelEstudio			: input.NivelEstudio,
		Leer					: input.Leer,
		Escribir				: input.Escribir,
		Capacitacion			: input.Capacitacion,
		Area					: input.Area,
		Entidadc				: input.Entidadc,
		Trabajo					: input.Trabajo,
		Areatrabajo				: input.Areatrabajo,
		Tipotrabajo				: input.Tipotrabajo,
		GrupoEtnico				: input.grupoetnico,
		hom_Ano					: input.hom_Ano,
		hom_Declarado			: input.hom_Declarado,
		hom_Lugardeclarado		: input.hom_Lugardeclarado,
		hom_Estadodeclaracion	: input.hom_Estadodeclaracion,
		des_Ano					: input.des_Ano,
		des_Declarado			: input.des_Declarado,
		des_Lugardeclarado		: input.des_Lugardeclarado,
		des_Estadodeclaracion	: input.des_Estadodeclaracion,
		sec_Ano					: input.sec_Ano,
		sec_Declarado			: input.sec_Declarado,
		sec_Lugardeclarado		: input.sec_Lugardeclarado,
		sec_Estadodeclaracion	: input.sec_Estadodeclaracion,
		les_Ano					: input.les_Ano,
		les_Declarado			: input.les_Declarado,
		les_Lugardeclarado		: input.les_Lugardeclarado,
		les_Estadodeclaracion	: input.les_Estadodeclaracion,
		tor_Ano					: input.tor_Ano,
		tor_Declarado			: input.tor_Declarado,
		tor_Lugardeclarado		: input.tor_Lugardeclarado,
		tor_Estadodeclaracion	: input.tor_Estadodeclaracion,
		desx_Ano				: input.desx_Ano,
		desx_Declarado			: input.desx_Declarado,
		desx_Lugardeclarado		: input.desx_Lugardeclarado,
		desx_Estadodeclaracion	: input.desx_Estadodeclaracion,
		rei_Ano					: input.rei_Ano,
		rei_Declarado			: input.rei_Declarado,
		rei_Lugardeclarado		: input.rei_Lugardeclarado,
		rei_Estadodeclaracion	: input.rei_Estadodeclaracion,
		dplz_Ano				: input.dplz_Ano,
		dplz_Declarado			: input.dplz_Declarado,
		dplz_Lugardeclarado		: input.dplz_Lugardeclarado,
		dplz_Estadodeclaracion	: input.dplz_Estadodeclaracion,
		TipoDesplazamiento 		: input.TipoDesplazamiento,
		Retorno					: input.Retorno,
		DeseaRetornar			: input.DeseaRetornar,
		TipoRetorno				: input.TipoRetorno,
		QuienRetorno			: input.QuienRetorno,
		RetornoAcompanado		: input.RetornoAcompanado,
		PlanRetorno				: input.PlanRetorno,
		Reubicarse				: input.Reubicarse,
		Razon					: input.Razon,
		Separacion				: input.Separacion,
		Unificacion				: input.Unificacion,
		AyudaEstatal			: input.AyudaEstatal,
		RecibioAyuda			: input.RecibioAyuda,
		Refugio					: input.Refugio,
		Pais					: input.Pais,
		AnoRefugio				: input.AnoRefugio,
		RecibioAyudaRefugio		: input.RecibioAyudaRefugio,
		Organizacion			: input.Organizacion,
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
		mas_Lugardeclarado		: input.mas_Lugardeclarado,
		mas_Estadodeclaracion	: input.mas_Estadodeclaracion,
		per_Ano					: input.per_Ano,
		per_Declarado			: input.per_Declarado,
		per_Lugardeclarado		: input.per_Lugardeclarado,
		per_Estadodeclaracion	: input.per_Estadodeclaracion,
		causaConfrontacion      : causaConfrontacion,
		causaAmenazaDirecta     : causaAmenazaDirecta,
		causaAmenazeIndirecta   : causaAmenazeIndirecta,
		causaReclutamiento      : causaReclutamiento,
		causaCamposMinados      : causaCamposMinados,
		causaAsesinatoFamiliar  : causaAsesinatoFamiliar,
		causaViolenciaGeneral   : causaViolenciaGeneral,
		causaOtra       		: causaOtra,
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
		Organizacion		: input.Organizacion,
		causaConfrontacion      : causaConfrontacion,
		causaAmenazaDirecta     : causaAmenazaDirecta,
		causaAmenazeIndirecta   : causaAmenazeIndirecta,
		causaReclutamiento      : causaReclutamiento,
		causaCamposMinados      : causaCamposMinados,
		causaAsesinatoFamiliar  : causaAsesinatoFamiliar,
		causaViolenciaGeneral   : causaViolenciaGeneral,
		causaOtra       		: causaOtra,		
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
		res.render('caracterizacion', {usuario: req.user, page_title:"No se pudo realizar la Caracterizacion", datavictima: todalaData , message : "Al menos debe seleccionar un Hecho Victimizante!"});  			
	}		
	
	req.getConnection(function (err, connection) {
		
		if(typeof connection === 'undefined'){
				log.error("No se pudo establacer una conexion con la base de datos!");
				res.render('caracterizacion', {usuario: req.user, page_title:"No se pudo realizar la Caracterizacion", datavictima: todalaData , message : "No se pudo establacer una conexion con la base de datos!"});  			
			} else {
				/* Insert en tabla de victimas */
				var query = connection.query("INSERT INTO victimas set ? ", dataVictimas, function(err, rows) {
					
				log.debug("Query inserta victimas : " + query.sql);
				if (err) {
					log.error("Error insertando en tabla victimas  " + err);
					if (err.code === "ER_DUP_ENTRY")
						res.render('caracterizacion', {usuario: req.user, page_title:"No se pudo realizar la Caracterizacion", datavictima: todalaData , message : "Ya existe una victima con esta identificacion"});  			
					else
						res.render('caracterizacion', {usuario: req.user, page_title:"No se pudo realizar la Caracterizacion", datavictima: null , message : err});  			
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
					connection.release(function(err) {});	
				};
			}); 
		};
	});
};

exports.listaVictimas = function(req,res){
	
	req.getConnection(function(err,connection){
		
		if(typeof connection === 'undefined'){
			log.error("No se pudo establacer una conexion con la base de datos!");
			res.render('listavictimas', {usuario: req.user, page_title:"Lista de Victimas fallo", data: null, message: "No se pudo establacer una conexion con la base de datos!"});
		} else {
	
			var query = connection.query('SELECT * FROM victimas', function(err, rows) {
				log.debug("Query consulta victimas: " + query.sql);
				
				if(err)
				{
					log.error("Error consultando victimas " + err);
					res.render('listavictimas', {usuario: req.user, page_title:"No se pudo realizar la consulta de victimas",  data: null , message : err});  			
				}
				else {
					
					res.render('listavictimas',{usuario: req.user, page_title:"Lista de Victimas", data:rows, message: null});
				}
				connection.release(function(err) {});				
			});
		};
    });
};

exports.excelLista = function(req,res){
	
	req.getConnection(function(err,connection){
		if(typeof connection === 'undefined'){
			log.error("No se pudo establacer una conexion con la base de datos!");
			res.render('consulta', {usuario: req.user, page_title:"Lista de Victimas fallo", datavictima: null, message: "No se pudo establacer una conexion con la base de datos!"});
		} else {
	
			var query = connection.query(queryTodasLasTablas, function(err, rows) {
				
				if(err)
				{
					log.error("Error consultando victimas " + err);
					res.render('listavictimas', {usuario: req.user, page_title:"No se pudo realizar la consulta de victimas",  data: null , message : err});  			
				}
				else {
					
					var conf ={};
					conf.stylesXmlFile = "styles.xml";
					conf.cols = [
						{caption:'Tipo Documento',		type:'string'},
						{caption:'Numero Documento',	type:'string'},
						{caption:'Nombres',  type:'string'},
						{caption:'Apellidos',  type:'string'},
						{caption:'Sexo',  type:'string'},
						{caption:'Orientacionsexual',  type:'string'},
						{caption:'Direccion',  type:'string'},
						{caption:'Telefono',  type:'string'},
						{caption:'Libretamilitar',  type:'string'},
						{caption:'Jefehogar',  type:'string'},
						{caption:'Vinculo',  type:'string'},
						{caption:'Barrio',  type:'string'},
						{caption:'SISBEN',  type:'string'},
						{caption:'Afiliado',  type:'string'},
						{caption:'Regimen',  type:'string'},
						{caption:'Discapacidad',  type:'string'},
						{caption:'Origendis',  type:'string'},
						{caption:'Estudio',  type:'string'},
						{caption:'NivelEstudio',  type:'string'},
						{caption:'Leer',  type:'string'},
						{caption:'Escribir',  type:'string'},
						{caption:'Capacitacion',  type:'string'},
						{caption:'Area',  type:'string'},
						{caption:'Entidadc',  type:'string'},
						{caption:'Trabajo',  type:'string'},
						{caption:'Areatrabajo',  type:'string'},
						{caption:'Tipotrabajo',  type:'string'},
						{caption:'GrupoEtnico',  type:'string'},
						{caption:'homicidio',  type:'string'},
						{caption:'hom_Ano',  type:'string'},
						{caption:'hom_Declarado',  type:'string'},
						{caption:'hom_Lugardeclarado',  type:'string'},
						{caption:'hom_Estadodeclaracion',  type:'string'},
						{caption:'des_Ano',  type:'string'},
						{caption:'des_Declarado',  type:'string'},
						{caption:'des_Lugardeclarado',  type:'string'},
						{caption:'des_Estadodeclaracion',  type:'string'},
						{caption:'sec_Ano',  type:'string'},
						{caption:'sec_Declarado',  type:'string'},
						{caption:'sec_Lugardeclarado',  type:'string'},
						{caption:'sec_Estadodeclaracion',  type:'string'},
						{caption:'les_Ano',  type:'string'},
						{caption:'les_Declarado',  type:'string'},
						{caption:'les_Lugardeclarado',  type:'string'},
						{caption:'les_Estadodeclaracion',  type:'string'},
						{caption:'tor_Ano',  type:'string'},
						{caption:'tor_Declarado',  type:'string'},
						{caption:'tor_Lugardeclarado',  type:'string'},
						{caption:'tor_Estadodeclaracion',  type:'string'},
						{caption:'desx_Ano',  type:'string'},
						{caption:'desx_Declarado',  type:'string'},
						{caption:'desx_Lugardeclarado',  type:'string'},
						{caption:'desx_Estadodeclaracion',  type:'string'},
						{caption:'rei_Ano',  type:'string'},
						{caption:'rei_Declarado',  type:'string'},
						{caption:'rei_Lugardeclarado',  type:'string'},
						{caption:'rei_Estadodeclaracion',  type:'string'},
						{caption:'dplz_Ano',  type:'string'},
						{caption:'dplz_Declarado',  type:'string'},
						{caption:'dplz_Lugardeclarado',  type:'string'},
						{caption:'dplz_Estadodeclaracion',  type:'string'},
						{caption:'TipoDesplazamiento',  type:'string'},
						{caption:'Retorno',  type:'string'},
						{caption:'DeseaRetornar',  type:'string'},
						{caption:'TipoRetorno',  type:'string'},
						{caption:'QuienRetorno',  type:'string'},
						{caption:'RetornoAcompanado',  type:'string'},
						{caption:'PlanRetorno',  type:'string'},
						{caption:'Reubicarse',  type:'string'},
						{caption:'Razon',  type:'string'},
						{caption:'Separacion',  type:'string'},
						{caption:'Unificacion',  type:'string'},
						{caption:'AyudaEstatal',  type:'string'},
						{caption:'RecibioAyuda',  type:'string'},
						{caption:'Refugio',  type:'string'},
						{caption:'Pais',  type:'string'},
						{caption:'AnoRefugio',  type:'string'},
						{caption:'RecibioAyudaRefugio',  type:'string'},
						{caption:'Organizacion',  type:'string'},
						{caption:'causaConfrontacion',  type:'string'},
						{caption:'causaAmenazaDirecta',  type:'string'},
						{caption:'causaAmenazeIndirecta',  type:'string'},
						{caption:'causaReclutamiento',  type:'string'},
						{caption:'causaCamposMinados',  type:'string'},
						{caption:'causaAsesinatoFamiliar',  type:'string'},
						{caption:'causaViolenciaGeneral',  type:'string'},
						{caption:'causaOtra',  type:'string'},
						{caption:'min_Ano',  type:'string'},
						{caption:'min_Declarado',  type:'string'},
						{caption:'min_Lugardeclarado',  type:'string'},
						{caption:'min_Estadodeclaracion',  type:'string'},
						{caption:'aba_Ano',  type:'string'},
						{caption:'aba_Declarado',  type:'string'},
						{caption:'aba_Lugardeclarado',  type:'string'},
						{caption:'aba_Estadodeclaracion',  type:'string'},
						{caption:'mas_Ano',  type:'string'},
						{caption:'mas_Declarado',  type:'string'},
						{caption:'mas_Lugardeclarado',  type:'string'},
						{caption:'mas_Estadodeclaracion',  type:'string'},
						{caption:'per_Ano',  type:'string'},
						{caption:'per_Declarado',  type:'string'},
						{caption:'per_Lugardeclarado',  type:'string'},
						{caption:'per_Estadodeclaracion',  type:'string'},
					];
					conf.rows = [];
					
					for (var i = 0; i < rows.length; i++) {
						var homidicioIndicador = "No"
						if (rows[i].hom_Ano != "") {	homidicioIndicador = "Si"};

						conf.rows.push([JSON.stringify(rows[i].Tipodocumento), 
										JSON.stringify(rows[i].Numerodocumento),
										JSON.stringify(rows[i].Nombres), 
										JSON.stringify(rows[i].Apellidos), 
										JSON.stringify(rows[i].Sexo), 
										JSON.stringify(rows[i].Orientacionsexual), 
										JSON.stringify(rows[i].Direccion), 
										JSON.stringify(rows[i].Telefono), 
										JSON.stringify(rows[i].Libretamilitar), 
										JSON.stringify(rows[i].Jefehogar), 
										JSON.stringify(rows[i].Vinculo), 
										JSON.stringify(rows[i].Barrio), 
										JSON.stringify(rows[i].SISBEN), 
										JSON.stringify(rows[i].Afiliado), 
										JSON.stringify(rows[i].Regimen), 
										JSON.stringify(rows[i].Discapacidad), 
										JSON.stringify(rows[i].Origendis), 
										JSON.stringify(rows[i].Estudio), 
										JSON.stringify(rows[i].NivelEstudio), 
										JSON.stringify(rows[i].Leer), 
										JSON.stringify(rows[i].Escribir), 
										JSON.stringify(rows[i].Capacitacion), 
										JSON.stringify(rows[i].Area), 
										JSON.stringify(rows[i].Entidadc), 
										JSON.stringify(rows[i].Trabajo), 
										JSON.stringify(rows[i].Areatrabajo), 
										JSON.stringify(rows[i].Tipotrabajo), 
										JSON.stringify(rows[i].GrupoEtnico), 
										homidicioIndicador,
										JSON.stringify(rows[i].hom_Ano), 
										JSON.stringify(rows[i].hom_Declarado), 
										JSON.stringify(rows[i].hom_Lugardeclarado), 
										JSON.stringify(rows[i].hom_Estadodeclaracion), 
										JSON.stringify(rows[i].des_Ano), 
										JSON.stringify(rows[i].des_Declarado), 
										JSON.stringify(rows[i].des_Lugardeclarado), 
										JSON.stringify(rows[i].des_Estadodeclaracion), 
										JSON.stringify(rows[i].sec_Ano), 
										JSON.stringify(rows[i].sec_Declarado), 
										JSON.stringify(rows[i].sec_Lugardeclarado), 
										JSON.stringify(rows[i].sec_Estadodeclaracion), 
										JSON.stringify(rows[i].les_Ano), 
										JSON.stringify(rows[i].les_Declarado), 
										JSON.stringify(rows[i].les_Lugardeclarado), 
										JSON.stringify(rows[i].les_Estadodeclaracion), 
										JSON.stringify(rows[i].tor_Ano), 
										JSON.stringify(rows[i].tor_Declarado), 
										JSON.stringify(rows[i].tor_Lugardeclarado), 
										JSON.stringify(rows[i].tor_Estadodeclaracion), 
										JSON.stringify(rows[i].desx_Ano), 
										JSON.stringify(rows[i].desx_Declarado), 
										JSON.stringify(rows[i].desx_Lugardeclarado), 
										JSON.stringify(rows[i].desx_Estadodeclaracion), 
										JSON.stringify(rows[i].rei_Ano), 
										JSON.stringify(rows[i].rei_Declarado), 
										JSON.stringify(rows[i].rei_Lugardeclarado), 
										JSON.stringify(rows[i].rei_Estadodeclaracion), 
										JSON.stringify(rows[i].dplz_Ano), 
										JSON.stringify(rows[i].dplz_Declarado), 
										JSON.stringify(rows[i].dplz_Lugardeclarado), 
										JSON.stringify(rows[i].dplz_Estadodeclaracion), 
										JSON.stringify(rows[i].TipoDesplazamiento), 
										JSON.stringify(rows[i].Retorno), 
										JSON.stringify(rows[i].DeseaRetornar), 
										JSON.stringify(rows[i].TipoRetorno), 
										JSON.stringify(rows[i].QuienRetorno), 
										JSON.stringify(rows[i].RetornoAcompanado), 
										JSON.stringify(rows[i].PlanRetorno), 
										JSON.stringify(rows[i].Reubicarse), 
										JSON.stringify(rows[i].Razon), 
										JSON.stringify(rows[i].Separacion), 
										JSON.stringify(rows[i].Unificacion), 
										JSON.stringify(rows[i].AyudaEstatal), 
										JSON.stringify(rows[i].RecibioAyuda), 
										JSON.stringify(rows[i].Refugio), 
										JSON.stringify(rows[i].Pais), 
										JSON.stringify(rows[i].AnoRefugio), 
										JSON.stringify(rows[i].RecibioAyudaRefugio), 
										JSON.stringify(rows[i].Organizacion), 
										JSON.stringify(rows[i].causaConfrontacion), 
										JSON.stringify(rows[i].causaAmenazaDirecta), 
										JSON.stringify(rows[i].causaAmenazeIndirecta), 
										JSON.stringify(rows[i].causaReclutamiento), 
										JSON.stringify(rows[i].causaCamposMinados), 
										JSON.stringify(rows[i].causaAsesinatoFamiliar), 
										JSON.stringify(rows[i].causaViolenciaGeneral), 
										JSON.stringify(rows[i].causaOtra), 
										JSON.stringify(rows[i].min_Ano), 
										JSON.stringify(rows[i].min_Declarado), 
										JSON.stringify(rows[i].min_Lugardeclarado), 
										JSON.stringify(rows[i].min_Estadodeclaracion), 
										JSON.stringify(rows[i].aba_Ano), 
										JSON.stringify(rows[i].aba_Declarado), 
										JSON.stringify(rows[i].aba_Lugardeclarado), 
										JSON.stringify(rows[i].aba_Estadodeclaracion), 
										JSON.stringify(rows[i].mas_Ano), 
										JSON.stringify(rows[i].mas_Declarado), 
										JSON.stringify(rows[i].mas_Lugardeclarado), 
										JSON.stringify(rows[i].mas_Estadodeclaracion), 
										JSON.stringify(rows[i].per_Ano), 
										JSON.stringify(rows[i].per_Declarado), 
										JSON.stringify(rows[i].per_Lugardeclarado), 
										JSON.stringify(rows[i].per_Estadodeclaracion), 
						]);
					}
					var result = nodeExcel.execute(conf);
					res.setHeader('Content-Type', 'application/vnd.openxmlformats');
					res.setHeader("Content-Disposition", "attachment; filename=" + "Reportv.xlsx");
					res.end(result, 'binary');

				}
				connection.release(function(err) {});				
			 });
		};
    });
};

exports.listaPorHecho = function(req,res){
	var input = JSON.parse(JSON.stringify(req.body));
	var tipoHecho = input.HechoVictimizante;

	if (typeof tipoHecho === 'undefined') {
		res.render('listahecho', {usuario: req.user, page_title:"Lista de Victimas por Hecho Victimizante", data: null , message: null });
	} else {
		var TablaHecho;
		switch(tipoHecho) {
		case "Homicidio":								TablaHecho="hv_homicidio";				break;
		case "Desaparición Forzada":					TablaHecho="hv_desaparicionforzada";	break;
		case "Secuestro":								TablaHecho="hv_secuestro";				break;
		case "Lesiones personales o Psicologicas":		TablaHecho="hv_lesionespersonales";		break;
		case "Tortura":									TablaHecho="hv_tortura";				break;
		case "Delitos contra la integridad Sexual":		TablaHecho="hv_delitossexuales";		break;
		case "Reclutamiento ilegal de menores":			TablaHecho="hv_reclutamientoilegal";	break;
		case "Desplazamiento forzado":					TablaHecho="hv_desplazamiento";			break;
		case "Minas antipersonales":					TablaHecho="hv_minasantipersonales";	break;
		case "Abandono Forzado o despojo de tierras":	TablaHecho="hv_despojodetierras";		break;
		case "Masacre":									TablaHecho="hv_masacre";				break;
		case "Perdida de Bienes":						TablaHecho="hv_perdidadebienes";		break;
		default:
			TablaHecho="";
		}
			
		req.getConnection(function (err, connection) {
			
			if(typeof connection === 'undefined'){
				log.error("No se pudo establacer una conexion con la base de datos!");
				res.render('listahecho', {usuario: req.user, page_title:"Lista de Victimas por Hecho Victimizante", data: null , message: "No se pudo establacer una conexion con la base de datos!" });
			} else {

				var query = connection.query('Select * from victimas v, ' + TablaHecho + ' th WHERE v.Tipodocumento=th.Tipodocumento and v.Numerodocumento = th.Numerodocumento',
					function(err, rows) {
					
					if (err) {
						log.error("Error obteniendo data de las tablas de hechos victimizantes " + err);
						res.render('listahecho', {usuario: req.user, page_title:"Lista de Victimas por Hecho Victimizante", data: null , message: "Error obteniendo data de las tablas de hechos victimizantes " });
					}
					else
					{
						res.render('listahecho', {usuario: req.user, page_title:"Lista de Victimas por Hecho Victimizante: " + tipoHecho, tipoHecho: tipoHecho, data: rows , message: null });
					};
					
					connection.release(function(err) {});	
				});
			};
		});
		
	}
};

exports.excelListaHecho = function(req,res){
	var input = JSON.parse(JSON.stringify(req.body));
	var tipoHecho = input.tipoHecho;

	req.getConnection(function(err,connection){
		if(typeof connection === 'undefined'){
			log.error("No se pudo establacer una conexion con la base de datos!");
			res.render('listahecho', {usuario: req.user, page_title:"Export a excel fallo", datavictima: null, message: "No se pudo establacer una conexion con la base de datos!"});
		} else {
			
			var query = connection.query(queryExcelHecho(tipoHecho), function(err, rows) {
				
				if(err)
				{
					log.error("Error consultando victimas " + err);
					res.render('listahecho', {usuario: req.user, page_title:"Lista de Victimas por Hecho Victimizante", data: null , message: err });
				}
				else {
					
					var conf ={};
					conf.stylesXmlFile = "styles.xml";
					conf.cols = [
						{caption:'Tipo Documento',		type:'string'},
						{caption:'Numero Documento',	type:'string'},
						{caption:'Nombres',  type:'string'},
						{caption:'Apellidos',  type:'string'},
						{caption:'Sexo',  type:'string'},
						{caption:'Orientacionsexual',  type:'string'},
						{caption:'Direccion',  type:'string'},
						{caption:'Telefono',  type:'string'},
						{caption:'Libretamilitar',  type:'string'},
						{caption:'Jefehogar',  type:'string'},
						{caption:'Vinculo',  type:'string'},
						{caption:'Barrio',  type:'string'},
						{caption:'SISBEN',  type:'string'},
						{caption:'Afiliado',  type:'string'},
						{caption:'Regimen',  type:'string'},
						{caption:'Discapacidad',  type:'string'},
						{caption:'Origendis',  type:'string'},
						{caption:'Estudio',  type:'string'},
						{caption:'NivelEstudio',  type:'string'},
						{caption:'Leer',  type:'string'},
						{caption:'Escribir',  type:'string'},
						{caption:'Capacitacion',  type:'string'},
						{caption:'Area',  type:'string'},
						{caption:'Entidadc',  type:'string'},
						{caption:'Trabajo',  type:'string'},
						{caption:'Areatrabajo',  type:'string'},
						{caption:'Tipotrabajo',  type:'string'},
						{caption:'GrupoEtnico',  type:'string'},
						{caption:'homicidio',  type:'string'},
						{caption:'hom_Ano',  type:'string'},
						{caption:'hom_Declarado',  type:'string'},
						{caption:'hom_Lugardeclarado',  type:'string'},
						{caption:'hom_Estadodeclaracion',  type:'string'},
						{caption:'des_Ano',  type:'string'},
						{caption:'des_Declarado',  type:'string'},
						{caption:'des_Lugardeclarado',  type:'string'},
						{caption:'des_Estadodeclaracion',  type:'string'},
						{caption:'sec_Ano',  type:'string'},
						{caption:'sec_Declarado',  type:'string'},
						{caption:'sec_Lugardeclarado',  type:'string'},
						{caption:'sec_Estadodeclaracion',  type:'string'},
						{caption:'les_Ano',  type:'string'},
						{caption:'les_Declarado',  type:'string'},
						{caption:'les_Lugardeclarado',  type:'string'},
						{caption:'les_Estadodeclaracion',  type:'string'},
						{caption:'tor_Ano',  type:'string'},
						{caption:'tor_Declarado',  type:'string'},
						{caption:'tor_Lugardeclarado',  type:'string'},
						{caption:'tor_Estadodeclaracion',  type:'string'},
						{caption:'desx_Ano',  type:'string'},
						{caption:'desx_Declarado',  type:'string'},
						{caption:'desx_Lugardeclarado',  type:'string'},
						{caption:'desx_Estadodeclaracion',  type:'string'},
						{caption:'rei_Ano',  type:'string'},
						{caption:'rei_Declarado',  type:'string'},
						{caption:'rei_Lugardeclarado',  type:'string'},
						{caption:'rei_Estadodeclaracion',  type:'string'},
						{caption:'dplz_Ano',  type:'string'},
						{caption:'dplz_Declarado',  type:'string'},
						{caption:'dplz_Lugardeclarado',  type:'string'},
						{caption:'dplz_Estadodeclaracion',  type:'string'},
						{caption:'TipoDesplazamiento',  type:'string'},
						{caption:'Retorno',  type:'string'},
						{caption:'DeseaRetornar',  type:'string'},
						{caption:'TipoRetorno',  type:'string'},
						{caption:'QuienRetorno',  type:'string'},
						{caption:'RetornoAcompanado',  type:'string'},
						{caption:'PlanRetorno',  type:'string'},
						{caption:'Reubicarse',  type:'string'},
						{caption:'Razon',  type:'string'},
						{caption:'Separacion',  type:'string'},
						{caption:'Unificacion',  type:'string'},
						{caption:'AyudaEstatal',  type:'string'},
						{caption:'RecibioAyuda',  type:'string'},
						{caption:'Refugio',  type:'string'},
						{caption:'Pais',  type:'string'},
						{caption:'AnoRefugio',  type:'string'},
						{caption:'RecibioAyudaRefugio',  type:'string'},
						{caption:'Organizacion',  type:'string'},
						{caption:'causaConfrontacion',  type:'string'},
						{caption:'causaAmenazaDirecta',  type:'string'},
						{caption:'causaAmenazeIndirecta',  type:'string'},
						{caption:'causaReclutamiento',  type:'string'},
						{caption:'causaCamposMinados',  type:'string'},
						{caption:'causaAsesinatoFamiliar',  type:'string'},
						{caption:'causaViolenciaGeneral',  type:'string'},
						{caption:'causaOtra',  type:'string'},
						{caption:'min_Ano',  type:'string'},
						{caption:'min_Declarado',  type:'string'},
						{caption:'min_Lugardeclarado',  type:'string'},
						{caption:'min_Estadodeclaracion',  type:'string'},
						{caption:'aba_Ano',  type:'string'},
						{caption:'aba_Declarado',  type:'string'},
						{caption:'aba_Lugardeclarado',  type:'string'},
						{caption:'aba_Estadodeclaracion',  type:'string'},
						{caption:'mas_Ano',  type:'string'},
						{caption:'mas_Declarado',  type:'string'},
						{caption:'mas_Lugardeclarado',  type:'string'},
						{caption:'mas_Estadodeclaracion',  type:'string'},
						{caption:'per_Ano',  type:'string'},
						{caption:'per_Declarado',  type:'string'},
						{caption:'per_Lugardeclarado',  type:'string'},
						{caption:'per_Estadodeclaracion',  type:'string'},
					];
					conf.rows = [];
					
					for (var i = 0; i < rows.length; i++) {
						 var homidicioIndicador = "No"
						 if (rows[i].hom_Ano != "") {	homidicioIndicador = "Si"};
							
						if (rows[i].Tipodocumento != "") {
							conf.rows.push([JSON.stringify(rows[i].Tipodocumento), 
											JSON.stringify(rows[i].Numerodocumento),
											JSON.stringify(rows[i].Nombres), 
											JSON.stringify(rows[i].Apellidos), 
											JSON.stringify(rows[i].Sexo), 
											JSON.stringify(rows[i].Orientacionsexual), 
											JSON.stringify(rows[i].Direccion), 
											JSON.stringify(rows[i].Telefono), 
											JSON.stringify(rows[i].Libretamilitar), 
											JSON.stringify(rows[i].Jefehogar), 
											JSON.stringify(rows[i].Vinculo), 
											JSON.stringify(rows[i].Barrio), 
											JSON.stringify(rows[i].SISBEN), 
											JSON.stringify(rows[i].Afiliado), 
											JSON.stringify(rows[i].Regimen), 
											JSON.stringify(rows[i].Discapacidad), 
											JSON.stringify(rows[i].Origendis), 
											JSON.stringify(rows[i].Estudio), 
											JSON.stringify(rows[i].NivelEstudio), 
											JSON.stringify(rows[i].Leer), 
											JSON.stringify(rows[i].Escribir), 
											JSON.stringify(rows[i].Capacitacion), 
											JSON.stringify(rows[i].Area), 
											JSON.stringify(rows[i].Entidadc), 
											JSON.stringify(rows[i].Trabajo), 
											JSON.stringify(rows[i].Areatrabajo), 
											JSON.stringify(rows[i].Tipotrabajo), 
											JSON.stringify(rows[i].GrupoEtnico), 
											homidicioIndicador,
											JSON.stringify(rows[i].hom_Ano), 
											JSON.stringify(rows[i].hom_Declarado), 
											JSON.stringify(rows[i].hom_Lugardeclarado), 
											JSON.stringify(rows[i].hom_Estadodeclaracion), 
											JSON.stringify(rows[i].des_Ano), 
											JSON.stringify(rows[i].des_Declarado), 
											JSON.stringify(rows[i].des_Lugardeclarado), 
											JSON.stringify(rows[i].des_Estadodeclaracion), 
											JSON.stringify(rows[i].sec_Ano), 
											JSON.stringify(rows[i].sec_Declarado), 
											JSON.stringify(rows[i].sec_Lugardeclarado), 
											JSON.stringify(rows[i].sec_Estadodeclaracion), 
											JSON.stringify(rows[i].les_Ano), 
											JSON.stringify(rows[i].les_Declarado), 
											JSON.stringify(rows[i].les_Lugardeclarado), 
											JSON.stringify(rows[i].les_Estadodeclaracion), 
											JSON.stringify(rows[i].tor_Ano), 
											JSON.stringify(rows[i].tor_Declarado), 
											JSON.stringify(rows[i].tor_Lugardeclarado), 
											JSON.stringify(rows[i].tor_Estadodeclaracion), 
											JSON.stringify(rows[i].desx_Ano), 
											JSON.stringify(rows[i].desx_Declarado), 
											JSON.stringify(rows[i].desx_Lugardeclarado), 
											JSON.stringify(rows[i].desx_Estadodeclaracion), 
											JSON.stringify(rows[i].rei_Ano), 
											JSON.stringify(rows[i].rei_Declarado), 
											JSON.stringify(rows[i].rei_Lugardeclarado), 
											JSON.stringify(rows[i].rei_Estadodeclaracion), 
											JSON.stringify(rows[i].dplz_Ano), 
											JSON.stringify(rows[i].dplz_Declarado), 
											JSON.stringify(rows[i].dplz_Lugardeclarado), 
											JSON.stringify(rows[i].dplz_Estadodeclaracion), 
											JSON.stringify(rows[i].TipoDesplazamiento), 
											JSON.stringify(rows[i].Retorno), 
											JSON.stringify(rows[i].DeseaRetornar), 
											JSON.stringify(rows[i].TipoRetorno), 
											JSON.stringify(rows[i].QuienRetorno), 
											JSON.stringify(rows[i].RetornoAcompanado), 
											JSON.stringify(rows[i].PlanRetorno), 
											JSON.stringify(rows[i].Reubicarse), 
											JSON.stringify(rows[i].Razon), 
											JSON.stringify(rows[i].Separacion), 
											JSON.stringify(rows[i].Unificacion), 
											JSON.stringify(rows[i].AyudaEstatal), 
											JSON.stringify(rows[i].RecibioAyuda), 
											JSON.stringify(rows[i].Refugio), 
											JSON.stringify(rows[i].Pais), 
											JSON.stringify(rows[i].AnoRefugio), 
											JSON.stringify(rows[i].RecibioAyudaRefugio), 
											JSON.stringify(rows[i].Organizacion), 
											JSON.stringify(rows[i].causaConfrontacion), 
											JSON.stringify(rows[i].causaAmenazaDirecta), 
											JSON.stringify(rows[i].causaAmenazeIndirecta), 
											JSON.stringify(rows[i].causaReclutamiento), 
											JSON.stringify(rows[i].causaCamposMinados), 
											JSON.stringify(rows[i].causaAsesinatoFamiliar), 
											JSON.stringify(rows[i].causaViolenciaGeneral), 
											JSON.stringify(rows[i].causaOtra), 
											JSON.stringify(rows[i].min_Ano), 
											JSON.stringify(rows[i].min_Declarado), 
											JSON.stringify(rows[i].min_Lugardeclarado), 
											JSON.stringify(rows[i].min_Estadodeclaracion), 
											JSON.stringify(rows[i].aba_Ano), 
											JSON.stringify(rows[i].aba_Declarado), 
											JSON.stringify(rows[i].aba_Lugardeclarado), 
											JSON.stringify(rows[i].aba_Estadodeclaracion), 
											JSON.stringify(rows[i].mas_Ano), 
											JSON.stringify(rows[i].mas_Declarado), 
											JSON.stringify(rows[i].mas_Lugardeclarado), 
											JSON.stringify(rows[i].mas_Estadodeclaracion), 
											JSON.stringify(rows[i].per_Ano), 
											JSON.stringify(rows[i].per_Declarado), 
											JSON.stringify(rows[i].per_Lugardeclarado), 
											JSON.stringify(rows[i].per_Estadodeclaracion), 
							]);
						}
					}
					var result = nodeExcel.execute(conf);
					res.setHeader('Content-Type', 'application/vnd.openxmlformats');
					res.setHeader("Content-Disposition", "attachment; filename=" + "ReportHecho.xlsx");
					res.end(result, 'binary');

				}
				connection.release(function(err) {});				
			 });
		};
    });
};


exports.eliminar = function(req, res){
	var documentoABorrar = req.params.documentoABorrar;
	
	req.getConnection(function (err, connection) {
		
		if(typeof connection === 'undefined'){
			log.error("No se pudo establacer una conexion con la base de datos!");
			res.render('consulta', {usuario: req.user, page_title:"eliminacion de victimas fallo", datavictima: null, message: "No se pudo establacer una conexion con la base de datos!"});
		} else {

				var query = connection.query('Delete from victimas WHERE Numerodocumento = ?',[documentoABorrar], function(err, rows) {
				
				log.debug("Query: " + query.sql);
				
				if (err) {
					log.error("Error eliminando victima la tabla victimas  " + err);
					res.render('consulta', {usuario: req.user, page_title:"Error en eliminacion de victima", datavictima: null, message : err});  			
				}
				else
				{
					 /* Elimina registros de las tablas de hechos victimizantes */
					borraRegistro(connection, 'hv_homicidio', documentoABorrar);
					borraRegistro(connection, 'hv_desaparicionforzada', documentoABorrar);
					borraRegistro(connection, 'hv_secuestro', documentoABorrar);
					borraRegistro(connection, 'hv_lesionespersonales', documentoABorrar);
					borraRegistro(connection, 'hv_tortura', documentoABorrar);
					borraRegistro(connection, 'hv_delitossexuales', documentoABorrar);
					borraRegistro(connection, 'hv_reclutamientoilegal', documentoABorrar);
					borraRegistro(connection, 'hv_desplazamiento', documentoABorrar);
					borraRegistro(connection, 'hv_minasantipersonales', documentoABorrar);
					borraRegistro(connection, 'hv_despojodetierras', documentoABorrar);
					borraRegistro(connection, 'hv_masacre', documentoABorrar);
					borraRegistro(connection, 'hv_perdidadebienes', documentoABorrar);
					
					res.render('consulta', {usuario: req.user, page_title:"Consulta de Victimas", datavictima: null , message: "Datos de Victima " + documentoABorrar +" eliminados"  });
				};
				
				connection.release(function(err) {});	
			});
		};
	});
};

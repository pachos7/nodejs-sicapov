/*
 * GET informacion de victimas .
 */


exports.consultavictima = function(req,res){
    res.render('consulta', {page_title:"Consulta de Victimas", data:"" });
};
 
exports.caracterizacion = function(req, res){
  res.render('caracterizacion', {page_title:"Caracterizacion", data:""});
};

exports.buscarvictima = function(req,res){
          
	 var input = JSON.parse(JSON.stringify(req.body));
	 
	 var data = {
            cedula    : input.cedula,
            nombre 	  : input.address,
			apellido  : input.address
        };
    
     req.getConnection(function (err, connection) {
     
		var query = connection.query('SELECT * FROM victimas WHERE cedula = ?',[data.cedula],function(err,rows)
        {
            
            if(err)
                console.log("Error consultado base de datos de victimas : %s ",err );
     
            res.render('consulta', {page_title:"Consulta de Victimas",data:rows});
                
            // console.log(query.sql);
			// console.log(rows);
         });
       
     });
	 
};



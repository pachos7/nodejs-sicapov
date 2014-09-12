/*
 * GET informacion de victimas .
 */

exports.list = function(req, res){
  res.render('index', {page_title:"XSicapov" });
};


exports.consultavictima = function(req,res){
          
     /*
	 var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("SELECT * FROM customer ", function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
       */     
             //res.redirect('/consulta', {page_title:"Consulta de Victimas"});
			 res.render('consulta', {page_title:"Consulta de Victimas", data:"" });
         /*    
        });
        
     });
	 */
};
 
exports.buscarvictima = function(req,res){
          
     
	 //var cedula = req.params.cedula; 
	 
	 var input = JSON.parse(JSON.stringify(req.body));
	 console.log("input: %s", JSON.stringify(req.body));
	 console.log("cedula: %s", input.cedula);
	 
	 var data = {
            cedula    : input.cedula,
            nombre : input.address,
			apellido : input.address
            // email   : input.email,
            // phone   : input.phone 
        
        };
    
     req.getConnection(function (err, connection) {
     
		//var query = connection.query('SELECT * FROM victimas WHERE cedula = ?',[cedula],function(err,rows)
		var query = connection.query('SELECT * FROM victimas WHERE cedula = ?',[data.cedula],function(err,rows)
        {
            
            if(err)
                console.log("Error consultado base de datos de victimas : %s ",err );
     
            res.render('consulta', {page_title:"Consulta de Victimas - Resultado",data:rows});
                
            console.log(query.sql);
			console.log(rows);
         });
       
     });
	 
};

 /*
exports.list = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customer',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('customers',{page_title:"Customers - Node.js",data:rows});
                
           
         });
         
         //console.log(query.sql);
    });
  
};

exports.add = function(req, res){
  res.render('add_customer',{page_title:"Add Customers - Node.js"});
};

exports.edit = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('edit_customer',{page_title:"Edit Customers - Node.js",data:rows});
                
           
         });
         
         //console.log(query.sql);
    }); 
};

// Save the customer
exports.save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            name    : input.name,
            address : input.address,
            email   : input.email,
            phone   : input.phone 
        
        };
        
        var query = connection.query("INSERT INTO customer set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.redirect('/customers');
          
        });
        
       // console.log(query.sql); get raw query
    
    });
};

exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            name    : input.name,
            address : input.address,
            email   : input.email,
            phone   : input.phone 
        
        };
        
        connection.query("UPDATE customer set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/customers');
          
        });
    
    });
};


exports.delete_customer = function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM customer  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/customers');
             
        });
        
     });
};
*/


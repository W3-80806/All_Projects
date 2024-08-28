const mysql = require('mysql2');
const express = require('express');
const config = require('config');

const app =  express.Router();

const connectionDetails = {  
    host: config.get("SERVER"),
    database: config.get("DATABASE"),
    user: config.get("USER"),
    password: config.get("PASSWORD")
  }

  app.put("/:D_Id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
   // var Action = request.body.Action;
   var  D_Id = request.params.D_Id;
    var statement = 
        `update doners set Action='Rejected' where D_Id =${D_Id}`;

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});
module.exports =app;
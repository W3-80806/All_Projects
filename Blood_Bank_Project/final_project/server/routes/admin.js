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

//Below code handles Users GET, POST, PUT,DELETE


// get admin data 

app.get("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var statement = `select * from users where Role like 'admin'`;

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


//edit admin profile

app.put("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

  
    var First_Name = request.body.First_Name;//This data belongs to body part 
    var Last_Name = request.body.Last_Name;//This data belongs to body part 
    var Email = request.body.Email;//This data belongs to body part 
    var Mobile = request.body.Mobile;//This data belongs to body part 
    var Password = request.body.Password;//This data belongs to body part 
    var Address = request.body.Address;//This data belongs to body part 

    var statement = 
        `update users set First_Name='${First_Name}',Last_Name='${Last_Name}',Email='${Email}',Password='${Password}',Mobile='${Mobile}', Address='${Address}' where Role like 'admin'`;

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
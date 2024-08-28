const mysql = require('mysql');
const express = require('express');
const config = require('config');

const app =  express.Router();

var connectionDetails = {
                            host: config.get("server"),
                            database: config.get("database"),
                            user: config.get("user"),
                            password: config.get("password")
                        }

//Below code handles Users GET, POST, PUT,DELETE
app.get("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var statement = "select * from users";

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

app.post("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

   // var No = request.body.No;
    var Name = request.body.Name;
    var Address = request.body.Address;

    var statement = 
        `insert into users(Name,Address) values('${Name}', '${Address}')`;

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

app.put("/:No", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var No = request.params.No;
    var Name = request.body.Name;
    var Address = request.body.Address;

    var statement = 
        `update users set Name='${Name}',Address='${Address}'where No =${No}`;

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
app.delete("/:No", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var No = request.params.No;//This data belongs to header part 
  
    var statement = 
        `delete from users where No =${No}`;

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
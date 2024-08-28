const express = require('express');
const mysql = require('mysql');
const config = require('config');
const GenerateToken = require('../helper/tokenfactory');

const app = express.Router();

const connectionDetails = {  
                             host: config.get("SERVER"),
                             database: config.get("DATABASE"),
                             user: config.get("USER"),
                             password: config.get("PASSWORD")
                           }
                           
console.log(connectionDetails);



app.get("/", (request, response)=>{
  var connection = mysql.createConnection(connectionDetails);
  const Email = request.body.Email;
  const Password = request.body.Password;
  var statement = `select * from users where Email='${Email}' and Password='${Password}' `;

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

app.post("/", (request, response)=>
{
    console.log(request.body);

    const Email = request.body.Email;
    const Password = request.body.Password;

    console.log(Email);
    console.log(Password);

    const connection1 = mysql.createConnection(connectionDetails)
    const statement1 = `select count(*) as count from users where Email='${Email}' and Password='${Password}'`;

    console.log(statement1);

    connection1.query(statement1, (error, result)=>{
        if(error==null)
        {
            console.log("query successfull.");
            console.log(result);

            var count = result[0].count;
            if(count>0)
            {
                console.log("U r a valid user!");
                var Token = GenerateToken();
                console.log(`generated token ${Token} for ${Email}`);

             var connection2 = 
             mysql.createConnection(connectionDetails);
               
             var statement2 = `update users set Token='${Token}' where Email='${Email}'`;

             console.log(statement2);

             connection2.query(statement2,
                             (error2, result2)=>{
                if(error2==null)
                {
                if(result2.affectedRows>0)
                {
                  let reply = {
                            Token : Token,
                            message: "success"  
                            } ;
                  response.setHeader("Content-Type",
                                    "application/json");
                  response.write(JSON.stringify(reply));
                  connection2.end();
                  response.end();
                        
                }
                else
                {
                 let reply = {
                                    message: "problem updating token in DB"  
                                    } ;
                  response.setHeader("Content-Type",
                                    "application/json");
                  response.write(JSON.stringify(reply));
                  connection2.end();
                  response.end();
                    }
                }
                else
                {
                  response.setHeader("Content-Type",
                                    "application/json");
                  response.write(JSON.stringify(error2));
                  connection2.end();
                  response.end();
                }
             });

            }
            else
            {
                console.log("No user found!")
                var reply = {message : "No Match Found"}
                response.setHeader("Content-Type","application/json");

                response.write(JSON.stringify(reply));
                connection1.end();
                response.end();
            }
        }
        else
        {
            console.log(error);
            console.log("query failed.");

            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            connection1.end();
            response.end();
        }
    })

})

module.exports = app;




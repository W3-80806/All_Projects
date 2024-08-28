const express = require('express');
const config =require('config');
const atob =require('atob');

var users=require("./routes/users");
var doners=require("./routes/doners");
var hospitals=require("./routes/hospitals");
var admin=require("./routes/admin");
var bloodbank=require("./routes/bloodbank");
var notification=require("./routes/notification");
var actionaccept=require("./routes/actionaccept");
var actionreject=require("./routes/actionreject");
var accepteddoners=require("./routes/accepteddoners");
var admincontactus=require("./routes/admincontactus");
var login=require("./routes/login");

const app =  express();

app.use((request, response,next)=>{
    //Below line allows calls from any domain / site b'coz of *
    response.setHeader("Access-Control-Allow-Origin", "*");
    
    //Below line allows calls with any method GET,PUT,POST, DELETE *
    response.setHeader("Access-Control-Allow-Methods", "*");

    //Below line allows calls with any Headers - even custom so *
    response.setHeader("Access-Control-Allow-Headers", "*");
    next();
})

app.use(express.json());

//code for tocken

// app.use((request, response, next)=>{
// //Common code for checking token
    
//         if(!request.url.includes('login'))
//         {
//                  console.log(request.headers.authorization);
//                  //This means if call is received for /profile and /shopping
//                 if(request.headers.authorization!=undefined)
//                 {
//                     //Get the token & email from authorization header
//                      console.log(request.headers.authorization);
//                      var base64String = request.headers.authorization.split(' ')[1];
    
//                      var utf8String = atob(base64String);
    
//                      console.log(utf8String);
    
//                      var tokenDetailsFromClient = JSON.parse(utf8String); 
    
//                      console.log(tokenDetailsFromClient);
    
//                      console.log("Email received from client is: ")
//                      console.log(tokenDetailsFromClient.Email);
    
//                     console.log("Token received from client is: ")
//                     console.log(tokenDetailsFromClient.Token);
    
//                     //compare token and Email against db
//                     var connection = mysql.createConnection(connectionDetails);
    
//                     var statement  = `select count(*) as count from users where Email = '${tokenDetailsFromClient.Email}' and Token = '${tokenDetailsFromClient.Token}'`;
    
//                     console.log(statement);
    
//                     connection.query(statement, (error, result)=>{
//                      if(error==null)
//                      {
//                            if(result[0].count > 0)
//                            {
//                               //We received a fact that user is logged in
//                                 connection.end();
//                                 next();
//                            }
//                            else
//                             {
//                                 //We received a fact that user is yet to log in
//                                 let  reply = {message : "Please Login."}
//                                 response.setHeader("Content-Type", "application/json");
//                                 response.write(JSON.stringify(reply));
//                                 connection.end();
//                                 response.end();
//                            }
//                      }
//                      else
//                      {
//                             response.setHeader("Content-Type", "application/json");
//                             response.write(JSON.stringify(error));
//                             connection.end();
//                             response.end();
//                     }
//                })
//             }
//             else
//             {
//                 let  reply = {message : "Please Login."}
//                 response.setHeader("Content-Type", "application/json");
//                 response.write(JSON.stringify(reply));
//                 response.end();
//             }
    
//         }
//         else
//         {
//            next();
//         }
    
//     })    



app.use("/login",login);
app.use("/users",users);
app.use("/doners",doners);
app.use("/hospitals",hospitals);
app.use("/bloodbank",bloodbank);
app.use("/admin",admin);
app.use("/notification",notification);
app.use("/actionaccept",actionaccept);
app.use("/actionreject",actionreject);
app.use("/accepteddoners",accepteddoners);
app.use("/admincontactus",admincontactus);



app.listen(9898, ()=>{console.log("server started listening at port 9898");});
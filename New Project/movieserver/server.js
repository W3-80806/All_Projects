const express = require('express');
const cors =require('cors');
const app =  express();

const usersRouteHandlerApp = require('./routes/users');

app.use(cors("*"));
app.use(express.json());

app.use("/users", usersRouteHandlerApp);

app.listen(3000,"0.0.0.0", ()=>{console.log(`server started listening at port 3000`);});
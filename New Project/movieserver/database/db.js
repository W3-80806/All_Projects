const mysql=require("mysql");

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"manager",
    database:"MovieApp"
})

connection.connect()
module.exports=connection
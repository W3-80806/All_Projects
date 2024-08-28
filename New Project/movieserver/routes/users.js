const express = require("express");
const db = require("../database/db");
const utils =require("../utils");

const router = express.Router();

router.get("/",(request,response)=>
{
    const sql=`select * from users`
    db.query(sql, request.params.id ,(error,data) =>
    {
        response.send(utils.createResult(error,data))
    })
})


router.get("/:id",(request,response)=>
    {
        const sql=`select * from users where id=?`
        db.query(sql, request.params.id, (error,data) =>
        {
            response.send(utils.createResult(error,data))
        })
    })


    router.post("/login",(request, response)=>
    {
        const {email, password} =request.body
        const sql=`select * from users where email=? AND password=?`
        db.query(sql, [email,password], (error,data)=>
        {
            response.send(utils.createResult(error,data))
        })
    })


    router.post("/register",(request,response)=>
    {
    const {username, email, password}=request.body
    const sql=`insert into users(username,email,password) values(?,?,?)`
    db.query(sql,[username,email,password],(error,data)=>
    {
        response.send(utils.createResult(error,data))
    })
})

module.exports = router
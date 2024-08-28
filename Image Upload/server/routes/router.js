const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");
const multer = require("multer");
const moment =require("moment");

// using multer we can upload img in our file 
// after that we can store that file path in our database

//img storage config
var imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./upload")
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
})

//img filter
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(null, error("only image is allowed"))
    }
}


var upload = multer({
    storage: imgconfig,
    fileFilter: isImage
})

//register userdata
//post data in database
router.post("/register", upload.single("photo"), (req, res) => {
 //console.log(req.file)
 const {fname}= req.body;
 const {filename}=req.file;
 let date=moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
 
 const statment=`insert into usersdata(username,userimg,date) values('${fname}','${filename}','${date}')`;
 conn.query(statment,(error,result)=>{
    if(error)
        {
            console.log("error")
        }
        else
        {
            console.log("data added")
            res.status(201).json({status:201,data:req.body})
        }
 })
  
})


//get users data fron database
router.get("/getdata",(req,res)=>{
    const statment=`select * from usersdata`;
    conn.query(statment,(error,result)=>{
        if(error)
            {
                console.log("error")
            }
            else
            {
                console.log("data geted")
                res.status(201).json({status:201,data:result})
            }
    })
})

// delete user
router.delete("/:id",(req,res)=>{
    const {id} = req.params;
    const statment=`delete from usersdata where id='${id}'`;
    conn.query(statment,(err,result)=>{
        if(err){
            console.log("error")
        }else{
            console.log("data delete")
            res.status(201).json({status:201,data:result})
        }
    })
})

module.exports = router;
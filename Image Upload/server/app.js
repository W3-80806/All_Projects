const express =require("express");
const app=express();
require("./db/conn");
const cors =require("cors");
const port=8004;
const router=require("./routes/router");

app.use(express.json());
app.use(cors());

app.use("/upload",express.static("./upload"))
app.use(router);


app.listen(port,()=>{
    console.log("server started")
})
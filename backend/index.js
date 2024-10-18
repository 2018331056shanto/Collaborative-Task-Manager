const express=require('express')
const cors=require('cors')
const bodyParser = require("body-parser");
const route=require('./Routes/Route')
const db=require('./config/CreateConnection')
const { createDatabase } = require("./Schemas/CreateDatabse");
const User=require('./Schemas/Users')
require("dotenv").config()

db.connect((_) => {
  db.query("use collaborative ", (err, result) => {
    if (err) console.log(err);
    // db.query(User,(err,result)=>{
    //     if(err)
    //         console.log(err)

    // })

    console.log("connection is on");
  });
});



const app=express()


app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use("/",route);
app.listen(4000,()=>{
    console.log("server is running")
})






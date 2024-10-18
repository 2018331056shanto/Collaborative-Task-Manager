const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const mongodbClient=require("mongodb").MongoClient
const {Users}=require('../Schemas/Users')
const { v4: uuidv4 } = require("uuid");

const db=require('../config/CreateConnection')
router.get('/hello',(req,res)=>{

    // console.log("hello world")
    res.send({msg:"hello world"})
})
router.post("/register",async(req,res)=>{

    const {userName,password}=req.body
    // console.log(userName+" "+password)

    const hash= await bcrypt.hash(password,saltRounds)
    db.query(`select count(username) from collaborative where username=${userName}`, (err, result) => {
      if (err){
        db.query(`insert into user (id,username,password) values(?,?,?)`,[uuidv4(),userName,hash],(err,result)=>{
            console.log(err)
        })
      }
      res.sendStatus(200)

      console.log(result);
    });

      
})

module.exports=router
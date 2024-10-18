const db=require("../config/CreateConnection")
const User=require('./Users')
const mysql=require("mysql")
module.exports=createDatabase=async(req,res)=>{

    db.query(User,(err,result)=>{
        if(err)
            throw err
        console.log("user created")
    })

}
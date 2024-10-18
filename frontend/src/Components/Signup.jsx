import React, { useState } from "react";
import { GET,POST } from "../api/api";

const Signup=()=>{
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")

    const userNameHandler=(e)=>{

        console.log(e.target.value)
        setUserName(e.target.value)
    }
    const userPasswordHandler=(e)=>{
        setPassword(e.target.value)
    }

    const submitHandler=async()=>{

        const res=await POST('/register',{userName,password})
        console.log(res.data)

    }
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex justify-evenly items-center flex-col w-[400px] h-[600px] bg-cyan-200">
          <div className="text-4xl">Signup</div>
          <div className="flex flex-col justify-between">
            <div className="flex items-start justify-around flex-col">
              <div className="text-lg">Username</div>
              <input className="" onChange={(e) => userNameHandler(e)} />
            </div>

            <div className="flex items-start flex-col">
              <div className="text-lg">Password</div>
              <input className="" type="password" onChange={(e) => userPasswordHandler(e)} />
            </div>
            <button className="top-9 " onClick={submitHandler}>Submit</button>
          </div>
        </div>
      </div>
    );
}

export default Signup

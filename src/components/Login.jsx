import { isEditable } from '@testing-library/user-event/dist/utils'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"
function Login() {

    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("") 
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const handleClick = ()=>{
        if(email===""&&password===""){
            alert("Enter right cridential")
        }else{
            let flag = false;
        for(let i=0; i<data.length; i++){
            if(data[i].email===email&&data[i].password===password){
               flag = true
            }
           
        }if(flag){
            alert("success")
            navigate("/data")
           
        }else{
            alert("failure")
        } 
        }
    

    }

    const getData = ()=>{
        axios({
            method:"GET",
            url:"http://localhost:8080/data"
         })
         .then((res)=>{
           setData(res.data)
         })
         .then((error)=>{
         console.log(error)
         })
    }

    useEffect(()=>{
     getData()
    },[])

console.log("data",data)


  return (
    <div id="container">
          <h1 id="heading1">Sign-in</h1>
        <form>
            <input onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/><br/>
            <input onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/><br/>
            <button onClick={handleClick}>Submit</button>
        </form>
    </div>
  )
}

export default Login
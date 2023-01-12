import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./signup.css"
function SignUp() {

 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState("");
 const [data, setData] = useState([])     
 const navigate =  useNavigate()
const handleClick = ()=>{

    if(email!==""&&password!==""){
        let data = {
            email:email,
            password:password
        }
        
        
            axios({
               method:"POST",
               url:"http://localhost:8080/data",
               data
            })
            .then((res)=>{
              setData(res.data)
            })
            .then((error)=>{
            console.log(error)
            })
            navigate("/login")

    }else{
        alert("Enter the details to signup")
    }

}






  return (
    <div id="container2">
        <h1 id="heading2">Sign-up Page</h1>
        <form>
            <input onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/><br/>
            <input onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/><br/>
            <button  onClick={handleClick}>Submit</button><br/>
        </form>
    </div>
  )
}

export default SignUp
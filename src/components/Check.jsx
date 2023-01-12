import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./main.css"
function Check() {

const [data, setData] = useState([])
const [details, setDetails] = useState("")
const navigate = useNavigate()
const handleClick = (e)=>{

   axios({
    method:"GET",
    url:"https://dog.ceo/api/breeds/list/all"
   })
   .then((res)=>{
   setData(Object.keys(res.data.message))
   })
   .then((error)=>{

   })
   
  
}

// let data3 = []
// data3.push(data)

// console.log("zaaz",data)

const handleDetails = (item)=>{
  setDetails(item);
  localStorage.setItem("dogs",JSON.stringify(item));
  navigate("/details")
  
}

console.log("detail",details)


useEffect(()=>{
   handleClick()    
},[])
  return (
    <>
    <h1>Dogs List</h1>
    <div  id="container">
{data.map((item,index)=>(
  <div key={index} id="box">
  <h3>{item}</h3>
  <button onClick={()=>handleDetails(item)}>Details</button>
   </div>
))}
    
    </div>
    </>
  )
}

export default Check
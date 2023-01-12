import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Details = () => {
const [data, setData] = useState([])
var dogs = JSON.parse(localStorage.getItem("dogs")) || [];

console.log("dogsss",dogs)
const getData = ()=>{
  axios({
    method:"GET",
    url:`https://dog.ceo/api/breed/${dogs}/images/random`
  })
  .then((res)=>{
   setData(res.data.message)
  })
  .then((error)=>{

  })
}

useEffect(()=>{
  getData()
},[])

console.log("data",data)

  return (
    <div>
      <h1>Details</h1>
      <h2>Dog: {dogs}</h2>
        <img src={data} alt="dog"/>
    </div>
  )
}
export default Details
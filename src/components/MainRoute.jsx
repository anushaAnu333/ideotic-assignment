import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Check from './Check'
import Details from './Details'
import Login from './Login'
import SignUp from './SignUp'

function MainRoute() {
  return (
    <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/data" element={<Check/>}/>
        <Route path="/details" element={<Details/>}/>
    </Routes>
  )
}

export default MainRoute
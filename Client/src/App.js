import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./Component/Home"
import Login from "./Component/Login"
import Signup from "./Component/Signup"
const App = () => {
  
  return (
     <>
    <Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path="/login" element={<Login></Login>}></Route>
  <Route path="/signup" element={<Signup></Signup>}></Route>
 </Routes>

   
    </>
  )
}

export default App
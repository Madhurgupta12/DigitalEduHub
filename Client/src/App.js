import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import { useEffect } from "react";
import Room from "./Component/Room";
import Video from "./Component/Video"
const App = () => {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/video" element={<Video></Video>}></Route>
        <Route path="/room/:id" element={<Room></Room>}></Route>
      </Routes>
      
    </>
  );
};

export default App;

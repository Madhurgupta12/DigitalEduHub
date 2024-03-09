import React from 'react'
import {useEffect} from "react"
import io from "socket.io-client";
import JoinButton from "./JoinButton"
const Video = () => {
    const socket = io("http://localhost:5001");
    useEffect(() => {
      socket.on("connect", () => {
        console.log("Connected to Socket.io server");
      });
    }, []);
  return (
    <>

    <div className="App flex items-center justify-center">
        <JoinButton></JoinButton>
    </div>
    </>
  )
}

export default Video